import os

from flask import Blueprint, request
from flask import Flask
from flask_cors import CORS
from flask_restplus import Api, Resource, fields
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///news.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SWAGGER_UI_DOC_EXPANSION'] = 'list'
app.config['RESTPLUS_VALIDATE'] = True
app.config['RESTPLUS_MASK_SWAGGER'] = True
app.config['ERROR_404_HELP'] = False
db = SQLAlchemy(app)
news_api_url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=16eabca179494fa391757fa32d70a9cd'

from flask_app.article.article_service import get_articles, save_articles
from flask_app.news_api.news_api_service import fetch_top_headlines

api = Api(app=app, version='1.0', title='Articles API',
          description='A simple Articles API', doc="/doc")

article_model = api.model('article', {
    'title': fields.String(required=True, description="Article title"),
    'body': fields.String(required=True, description="Article body"),
    'img_url': fields.String(required=True, description="Image URL"),
    'created_ts': fields.DateTime(required=False, description="Created Timestamp"),
})


@api.route('/articles')
class ArticleList(Resource):
    def get(self):
        return get_articles()

    @api.expect([article_model])
    def post(self):
        save_articles(request.json)
        return "OK!", 201


@api.route('/news-api')
class NewsApiList(Resource):
    def get(self):
        return fetch_top_headlines()


def initialize_app(flask_app):
    blueprint = Blueprint('api', __name__, url_prefix='/')
    api.init_app(blueprint)

    flask_app.register_blueprint(blueprint)

    db.init_app(flask_app)


def main():
    initialize_app(app)
    app.run(debug=False)

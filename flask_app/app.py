from flask import Blueprint, request
from flask import Flask
from flask_cors import CORS
from flask_restplus import Api, Namespace, Resource, fields
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

app.config.from_json("config.json")
db = SQLAlchemy(app)
news_api_urls = app.config['NEWS_API_URLS']

from flask_app.article.article_service import get_articles, save_articles, delete_article
from flask_app.news_api.news_api_service import fetch_top_headlines

api = Api(app=app, version='1.0', title='Articles API',
          description='A simple Articles API', doc="/doc")

ns1 = Namespace('articles', description='Article operations')
ns2 = Namespace('news-api', description='NewsApi operations')

api.add_namespace(ns1)
api.add_namespace(ns2)

article_model = api.model('article', {
    'title': fields.String(required=True, description="Article title"),
    'body': fields.String(required=True, description="Article body"),
    'img_url': fields.String(required=True, description="Image URL"),
    'created_ts': fields.DateTime(required=False, description="Created Timestamp"),
    'url': fields.String(required=True, description="URL"),
})


@ns1.route('/')
class ArticleList(Resource):
    def get(self):
        """Retrieves all saved articles from the database"""
        return get_articles()

    @ns1.expect([article_model])
    def post(self):
        """Saves articles to the database"""
        save_articles(request.json)
        return "OK!", 201


@ns1.route('/<int:id>')
class Article(Resource):
    def delete(self, id):
        """Deletes an article from the database"""
        delete_article(id)
        return 'DELETED!', 204


@ns2.route('/', defaults={'category': None})
@ns2.route('/<string:category>')
class NewsApiList(Resource):
    def get(self, category):
        """Fetches top headlines and latest articles from newsapi.org"""
        return fetch_top_headlines(category=category)


def initialize_app(flask_app):
    blueprint = Blueprint('api', __name__, url_prefix='/')
    api.init_app(blueprint)

    flask_app.register_blueprint(blueprint)

    db.init_app(flask_app)


def main():
    initialize_app(app)
    with app.app_context():
        app.run(debug=False)

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

from flask_app.article.article_service import get_articles, create_articles

api = Api(app=app, version='1.0', title='Articles API',
          description='A simple Articles API', doc="/doc")

basedir = os.path.abspath(os.path.dirname(__file__))

article_model = api.model('article', {
    'title': fields.String(required=True, description="Article title"),
    'subtitle': fields.String(required=True, description="Article subtitle"),
    'body': fields.String(required=True, description="Article body")
})


@api.route('/article/<int:id>')
@api.doc()
class Article(Resource):
    def get(self, id):
        return get_articles(id)


@api.route('/articles')
class ArticleList(Resource):
    def get(self):
        return get_articles()

    @api.expect([article_model])
    def post(self):
        create_articles(request.json)
        return "OK!", 201


def initialize_app(flask_app):
    blueprint = Blueprint('api', __name__, url_prefix='/')
    api.init_app(blueprint)

    flask_app.register_blueprint(blueprint)

    db.init_app(flask_app)


def main():
    initialize_app(app)
    app.run(debug=True)

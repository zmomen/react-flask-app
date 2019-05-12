import os

from flask import Blueprint, request
from flask import Flask
from flask_restplus import Api, Resource, fields
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///news.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
app.config['SWAGGER_UI_DOC_EXPANSION'] = 'list'
app.config['RESTPLUS_VALIDATE'] = True
app.config['RESTPLUS_MASK_SWAGGER'] = True
app.config['ERROR_404_HELP'] = False
db = SQLAlchemy(app)

from flask_app.models.article_service import create_article, get_articles

api = Api(app=app, version='1.0', title='Articles API',
          description='A simple Articles API', doc="/doc")

basedir = os.path.abspath(os.path.dirname(__file__))

article_model = api.model('article', {
    'title': fields.String(required=True, description="Article title"),
    'subtitle': fields.String(required=True, description="Article subtitle"),
    'body': fields.String(required=True, description="Article body")
})


@api.route('/articles')
@api.doc()
class Article(Resource):

    def get(self):
        return get_articles()

    @api.expect(article_model)
    def post(self):
        print("here", request.json)
        create_article(request.json)
        return "OK!", 201


def initialize_app(flask_app):
    blueprint = Blueprint('api', __name__, url_prefix='/')
    api.init_app(blueprint)

    flask_app.register_blueprint(blueprint)

    db.init_app(flask_app)


def main():
    initialize_app(app)
    app.run(debug=True)

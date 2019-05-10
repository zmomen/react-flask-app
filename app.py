import os
from flask import jsonify, Blueprint, request
from flask_restplus import Api, Resource, fields
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///news.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SWAGGER_UI_DOC_EXPANSION'] = 'list'
app.config['RESTPLUS_VALIDATE'] = True
app.config['RESTPLUS_MASK_SWAGGER'] = True
app.config['ERROR_404_HELP'] = False
db = SQLAlchemy(app)

from models.article_service import create_article

api = Api(app=app, version='1.0', title='Articles API',
          description='A simple Articles API', doc="/doc")

basedir = os.path.abspath(os.path.dirname(__file__))

article_model = api.model('article', {
    'title': fields.String(required=True, description="Article title"),
    'subtitle': fields.String(required=True, description="Article subtitle"),
    'body': fields.String(required=True, description="Article body")
})


# # db creation
# def create_session(config):
#     engine = create_engine(config['SQLALCHEMY_DATABASE_URI'])
#     Session = sessionmaker(bind=engine)
#     session = Session()
#     session._model_changes = {}
#     return session
#
#
# manual_session = create_session(app.config)


@api.route('/')
class Index(Resource):
    def get(self):
        return {"message": 'hello world!'}


@api.route('/articles')
@api.doc()
class Article(Resource):

    def get(self):
        return {"article": "testing"}

    @api.expect(article_model)
    def post(self):
        print("here", request.json)
        create_article(request.json)
        return None, 201


#         article = Article(title=dict_body['title'],
#                           subtitle=dict_body['subtitle'],
#                           body=dict_body['body'],
#                           created_ts=date.today())
#         manual_session.add(article)
#         manual_session.commit()
#         return jsonify({'message': 'New article successfully created.'}), 200
#


def initialize_app(flask_app):
    blueprint = Blueprint('api', __name__, url_prefix='/')
    api.init_app(blueprint)
    # api.add_namespace(blog_posts_namespace)
    # api.add_namespace(blog_categories_namespace)
    flask_app.register_blueprint(blueprint)

    db.init_app(flask_app)


def main():
    initialize_app(app)
    # log.info('>>>>> Starting development server at http://{}/api/ <<<<<'.format(app.config['SERVER_NAME']))
    app.run(debug=True)

# # endpoint to create a new user
# @app.route("/user", methods=["POST"])
# def add_user():
#     username = request.json['username']
#     email = request.json['email']
#
#     new_user = User(username, email)
#
#     db.session.add(new_user)
#     db.session.commit()
#
#     return jsonify(new_user)
#
#
# # endpoint to show all users
# @app.route("/user", methods=["GET"])
# def get_user():
#     all_users = User.query.all()
#     results = user_schema.dump(all_users)
#     return jsonify(results.data)
#
#
# # endpoint to get user by id
# @app.route("/user/<id>", methods=["GET"])
# def user_detail(id):
#     user = User.query.get(id)
#     return user_schema.jsonify(user)
#
#
# # endpoint to update user
# @app.route("/user/<id>", methods=["PUT"])
# def user_update(id):
#     user = User.query.get(id)
#     username = request.json['username']
#     email = request.json['email']
#
#     user.email = email
#     user.username = username
#
#     db.session.commit()
#     return user_schema.jsonify(user)
#
#
# # endpoint to delete user
# @app.route("/user/<id>", methods=["DELETE"])
# def user_delete(id):
#     user = User.query.get(id)
#     db.session.delete(user)
#     db.session.commit()
#
#     return user_schema.jsonify(user)

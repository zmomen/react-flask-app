import os
from flask_sqlalchemy import SQLAlchemy

from flask import Flask
from flask_restplus import Api, Resource, fields
from sqlalchemy import create_engine, and_, text
from sqlalchemy.orm import sessionmaker

app = Flask(__name__)
api = Api(app=app, version='1.0', title='Articles API',
          description='A simple Articles API', doc="/doc")

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////news.sqlite'

db = SQLAlchemy(app)
basedir = os.path.abspath(os.path.dirname(__file__))

api.model('article', {
    'id': fields.Integer(readOnly=True, description="unique identifier"),
    'title': fields.String(required=True, description="Article title")
})


# db creation
def create_session(config):
    engine = create_engine(config['SQLALCHEMY_DATABASE_URI'])
    Session = sessionmaker(bind=engine)
    session = Session()
    session._model_changes = {}
    return session


manual_session = create_session(app.config)


@api.route('/')
def index():
    return {"message": 'hello world!'}


@api.route('/articles')
class Article(Resource):

    def get(self):
        return {"api-get": "success"}


if __name__ == '__main__':
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

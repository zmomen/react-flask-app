import os

from flask import Flask, jsonify, Response

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))

articles = [
    {
        'id': 1,
        'title': u'Buy groceries',
        'subtitle': u'Milk, Cheese, Pizza, Fruit, Tylenol',
        'body': False
    },
    {
        'id': 2,
        'title': u'Learn Python',
        'subtitle': u'Need to find a good Python tutorial on the web',
        'body': False
    }
]


@app.route("/")
@app.route('/articles', methods=['GET'])
def get_articles():
    return jsonify({'articles': articles})

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
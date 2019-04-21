from flask import Flask
from .. import db 

class Article(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    title = db.Column(db.String(100), nullable=False)
    subtitle = db.Column(db.String(100), nullable=True)
    body = db.Column(db.String(1000), unique=False, nullable=True)

    def __repr__(self):
        return '<Article %r>' % self.title
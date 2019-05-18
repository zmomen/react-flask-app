from datetime import datetime

from flask_app.app import db
from flask_app.article.article import Article


def create_articles(data):
    for i in range(len(data)):
        title = data[i].get('title')
        subtitle = data[i].get('subtitle')
        body = data[i].get('body')
        article = Article(title=title, body=body, subtitle=subtitle, created_ts=datetime.now())
        db.session.add(article)
        db.session.commit()


def get_articles(id=None):
    if id:
        return {k: v for k, v in Article.query.get(id).__dict__.items() if not str(k).startswith("_")}
    return [{k: v for k, v in row.__dict__.items() if not str(k).startswith("_")}
            for row in Article.query.all()]

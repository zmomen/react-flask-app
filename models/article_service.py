from app import db
from models.article import Article
from datetime import datetime


def create_article(data):
    title = data.get('title')
    subtitle = data.get('subtitle')
    body = data.get('body')
    article = Article(title=title, body=body, subtitle=subtitle, created_ts=datetime.now())
    db.session.add(article)
    db.session.commit()


def get_articles():
    return [{k: v for k, v in row.__dict__.items() if not str(k).startswith("_")}
            for row in Article.query.all()]

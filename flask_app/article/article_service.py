from datetime import datetime

from flask_app.app import db
from flask_app.article.article import Article
from flask_app.news_api.news_api_service import fetch_top_headlines


def save_articles(data):
    for i in range(len(data)):
        title = data[i].get('title')
        subtitle = data[i].get('subtitle')
        body = data[i].get('body')
        article = Article(title=title, body=body, subtitle=subtitle, created_ts=datetime.now())
        db.session.add(article)
        db.session.commit()


def get_articles():
    return fetch_top_headlines()
    # if id:
    #     return {k: v for k, v in Article.query.get(id).__dict__.items() if not str(k).startswith("_")}
    # return [{k: v for k, v in row.__dict__.items() if not str(k).startswith("_")}
    #         for row in Article.query.all()]

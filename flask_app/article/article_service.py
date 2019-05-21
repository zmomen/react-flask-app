from datetime import datetime

from flask_app.app import db
from flask_app.article.article import Article
from flask_app.news_api.news_api_service import fetch_top_headlines


def save_articles(data):
    for i in range(len(data)):
        title = data[i].get('title')
        body = data[i].get('body')
        img_url = data[i].get('img_url')
        created_ts = data[i].get('created_ts', datetime.now())
        article = Article(title=title, body=body,
                          img_url=img_url, created_ts=created_ts)
        db.session.add(article)
        db.session.commit()


def get_articles():
    #     return fetch_top_headlines()
    return [{k: v for k, v in row.__dict__.items() if not str(k).startswith("_")}
            for row in Article.query.all()]

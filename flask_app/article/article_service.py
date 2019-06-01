from datetime import datetime

from flask_app.app import db
from flask_app.article.article import Article


def save_articles(data):
    for i in range(len(data)):
        if db.session.query(Article).filter(Article.title == data[i].get('title')).first() is not None:
            print("not new!")
            break
        else:
            title = data[i].get('title')
            body = data[i].get('body')
            img_url = data[i].get('img_url')
            url = data[i].get('url')
            created_ts = data[i].get('created_ts', datetime.now())
            article = Article(title=title, body=body,
                              img_url=img_url, url=url, created_ts=created_ts)
            db.session.add(article)
            db.session.commit()


def get_articles():
    #     return fetch_top_headlines()
    return [{k: v for k, v in row.__dict__.items() if not str(k).startswith("_")}
            for row in Article.query.all()]


def delete_article(id):
    Article.query.filter_by(id=id).delete()
    db.session.commit()

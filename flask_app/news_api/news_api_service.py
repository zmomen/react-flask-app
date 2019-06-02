import requests
from flask_app.app import news_api_urls
from flask_app.news_api.categories import CATEGORIES, DEFAULT_CATEGORY


def fetch_top_headlines(category=None):
    cat = category if category in CATEGORIES else DEFAULT_CATEGORY
    resp = requests.get(news_api_urls[cat]).json()
    articles = resp['articles']

    output = []
    id = 0
    for article in articles:
        entry = dict()
        entry['id'] = id
        entry['source'] = article['source']['name']
        entry['title'] = article['title']
        entry['body'] = article['description']
        entry['created_ts'] = article['publishedAt']
        entry['img_url'] = article['urlToImage']
        entry['url'] = article['url']
        output.append(entry)
        id += 1

    return output

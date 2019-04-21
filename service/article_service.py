from app import db 
from models.articles import Article

def create_new_article(data):
    found = Article.query.filter_by(title=data['title'])
    if not found:
        new_article = Article(
            public_id=str(uuid.uuid4()),
            email=data['email'],
            username=data['username'],
            password=data['password'],
            registered_on=datetime.datetime.utcnow()
        ) 

def get_all_articles():
    return Article.query.all()

def get_article(title):
    return Article.query.filter_by(title__contains=title)

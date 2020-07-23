from flask import Flask
from flask_cors import CORS

from html_parser.html_parser import HTMLParser

app = Flask(__name__)
CORS(app)

foundations_program_map = dict()


@app.route('/update', methods=['POST'])
def update():
    url = "https://www.healthwellfoundation.org/disease-funds/"

    html_parser = HTMLParser()
    foundations_program_map.update(html_parser.parse_url(url=url))
    return '', 204


@app.route('/get', methods=['GET'])
def get():
    return foundations_program_map

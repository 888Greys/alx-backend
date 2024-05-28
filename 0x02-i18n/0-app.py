#!/usr/bin/env python3
"""
Flask App that renders a basic HTML page
"""


from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def hello_world():
    """
    Render a basic HTML page
    """
    return render_template('0-index.html')


if __name__ == '__main__':
    app.run(port="5000", host="0.0.0.0", debug=True)

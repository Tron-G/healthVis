from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template("index.html")


# 跳转到详情页
@app.route('/feature',  methods=['POST', 'GET'])
def feature():
    return render_template('feature.html')


if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0')

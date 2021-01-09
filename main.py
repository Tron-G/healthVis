from flask import Flask, render_template, url_for, redirect, jsonify
import data_manager as dm
app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template("index.html")


# 跳转到详情页
@app.route('/feature',  methods=['POST', 'GET'])
def feature():
    return render_template('feature.html')


@app.route('/testInfo',  methods=['POST', 'GET'])
def testInfo():
    print("\n**************************\n")
    data = dm.radar_map("all")
    return jsonify(data)


if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0')

from flask import Flask, render_template, url_for, redirect, jsonify, request
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
    data = request.get_json()
    print(data["season"], data["hospital"])
    out_data = dm.season(data["season"])
    print(out_data)
    return jsonify(out_data)


@app.route('/init',  methods=['POST', 'GET'])
def initSys():
    data = {"radar": dm.radar_map("all", "all"), "map": dm.season("all"), "pie": dm.job("all", "all")}
    print(data)
    return jsonify(data)
    pass



if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0')

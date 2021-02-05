from flask import Flask, render_template, url_for, redirect, jsonify, request
import data_manager as dm
app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template("index.html")


# ******************************************************************************************
# 跳转到详情页
# ******************************************************************************************
@app.route('/feature',  methods=['POST', 'GET'])
def feature():
    return render_template('feature.html')


# ******************************************************************************************
# 点击时间轴更新各个视图的数据
# ******************************************************************************************
@app.route('/change_season',  methods=['POST', 'GET'])
def change_season():
    print("\n*************change_season*************\n")
    data = request.get_json()
    print(data["season"], data["hospital"])
    out_data = {"map": dm.season(data["season"]), "radar": dm.radar_map(data["season"], data["hospital"]),
                "pie": dm.job(data["season"], data["hospital"])}
    return jsonify(out_data)


# ******************************************************************************************
# 点击医院更新各个视图的数据
# ******************************************************************************************
@app.route('/change_hospital',  methods=['POST', 'GET'])
def change_hospital():
    data = request.get_json()
    print("\n*************change_hospital*************\n")
    print(data["season"], data["hospital"])
    out_data = {"radar": dm.radar_map(data["season"], data["hospital"]),
                "pie": dm.job(data["season"], data["hospital"])}

    return jsonify(out_data)


# ******************************************************************************************
# 初始化系统各个视图数据
# ******************************************************************************************
@app.route('/init',  methods=['POST', 'GET'])
def initSys():
    data = {"radar": dm.radar_map("all", "all"), "map": dm.season("all"), "pie": dm.job("all", "all"),
            "GDP": dm.load_static_data("GDP"), "school": dm.load_static_data("school"),
            "health_center": dm.load_static_data("health_center"),
            "pollution_company": dm.load_static_data("pollution_company")}
    # print(dm.job("all", "all"))
    return jsonify(data)
    pass


# ******************************************************************************************
# 后台接口测试
# ******************************************************************************************
@app.route('/test',  methods=['POST', 'GET'])
def test():
    data = request.get_json()
    # print(data["season"], data["hospital"])
    # out = dm.month(data["hospital"])
    # out = dm.get_disease_age("脂肪肝", 0)
    # out = dm.get_topdisease_sex(0)
    # print("\n*************test*************\n")
    # print(out)
    out = ""
    return jsonify(out)
    pass


if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0')

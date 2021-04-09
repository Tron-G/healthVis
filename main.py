from flask import Flask, render_template, url_for, redirect, jsonify, request
import data_manager as dm

app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template("index.html")


# ******************************************************************************************
# 跳转到疾病分析页面
# ******************************************************************************************
@app.route('/feature', methods=['POST', 'GET'])
def feature():
    return render_template('feature.html')


# ******************************************************************************************
# 跳转到气候分析页面
# ******************************************************************************************
@app.route('/weather', methods=['POST', 'GET'])
def weather():
    return render_template('weather.html')


# ******************************************************************************************
# 点击时间轴更新各个视图的数据
# ******************************************************************************************
@app.route('/change_season', methods=['POST', 'GET'])
def changeSeason():
    print("\n*************change_season*************")
    data = request.get_json()
    print(data["season"], data["hospital"])
    out_data = {"map": dm.season(data["season"]), "radar": dm.radar_map(data["season"]),
                "pie": dm.job(data["season"], data["hospital"]),
                "disease_bar": dm.get_season_hospital_data(data["season"], data["hospital"]),
                "category": dm.load_static_data(data["map_checked_type"])}

    # print(dm.job(data["season"], data["hospital"]))
    # print(out_data["disease_bar"])
    return jsonify(out_data)


# ******************************************************************************************
# 更新地图图层数据
# ******************************************************************************************
@app.route('/select_category', methods=['POST', 'GET'])
def selectCategory():
    print("\n*************select_category*************")
    data = request.get_json()
    print(data["map_checked_type"])
    if data["last_checked_type"] == "":
        out_data = {"now": dm.load_static_data(data["map_checked_type"]),
                    "last": {}}
    else:
        out_data = {"now": dm.load_static_data(data["map_checked_type"]),
                    "last": dm.load_static_data(data["last_checked_type"])}
    return jsonify(out_data)


# ******************************************************************************************
# 点击医院更新各个视图的数据
# ******************************************************************************************
@app.route('/change_hospital', methods=['POST', 'GET'])
def changeHospital():
    data = request.get_json()
    print("\n*************change_hospital*************")
    print(data["season"], data["hospital"])
    out_data = {"pie": dm.job(data["season"], data["hospital"]),
                "disease_bar": dm.get_season_hospital_data(data["season"], data["hospital"])}
    # print(out_data["disease_bar"])
    return jsonify(out_data)


# ******************************************************************************************
# 餐饮界面下点击医院
# ******************************************************************************************
@app.route('/change_hospital_restaurant', methods=['POST', 'GET'])
def changeHospitalRestaurant():
    data = request.get_json()
    print("\n*************change_hospital_restaurant*************")
    print(data["season"], data["hospital"])
    out_data = {"pie": dm.job(data["season"], data["hospital"]),
                "disease_bar": dm.get_season_hospital_data(data["season"], data["hospital"], True),
                "food_disease": dm.get_food_disease_data(data["selected_restaurant_type"])}
    print(out_data["disease_bar"])
    return jsonify(out_data)


# ******************************************************************************************
# 初始化系统首页各个视图数据
# ******************************************************************************************
@app.route('/init', methods=['POST', 'GET'])
def initSys():
    data = {"radar": dm.radar_map("all"), "map": dm.season("all"), "pie": dm.job("all", "all"),
            "GDP": dm.load_static_data("GDP"),
            "disease_bar": dm.get_season_hospital_data("all", "all")}
    return jsonify(data)


# ******************************************************************************************
# 初始化人体结构图系统
# ******************************************************************************************
@app.route('/init_bodyvis', methods=['POST', 'GET'])
def initBodyVis():
    month = request.get_json()["month"]
    disease_info = dm.set_disease_info_data("", 0, month)
    data = {"sunburst": dm.load_static_data("sunburst"), "disease-detail": dm.load_static_data("disease-detail"),
            "body_disease": dm.get_topdisease_sex(month), "disease_rules": dm.load_static_data("disease_rules"),
            "disease_info": disease_info, "single_graph": dm.get_single_graph_data(disease_info["name"])}

    # print(dm.load_static_data("disease-detail"))
    # print(dm.get_topdisease_sex(month))
    return jsonify(data)


# ******************************************************************************************
# 旭日图选择月份
# ******************************************************************************************
@app.route('/get_month_data', methods=['POST', 'GET'])
def getMonthData():
    month = request.get_json()["month"]
    disease_info = dm.set_disease_info_data("", 0, month)
    data = {"month": dm.get_sunburst_month_data(month),
            "disease_info": disease_info,
            "single_graph": dm.get_single_graph_data(disease_info["name"])}
    # print(data["month"])
    return jsonify(data)


# ******************************************************************************************
# 搜索病人id
# ******************************************************************************************
@app.route('/search_id', methods=['POST', 'GET'])
def searchById():
    id = request.get_json()["id"]
    data = {"patient_disease": dm.get_patient_disease(id), "recommend_list": dm.get_recommend_disease(id)}
    print(data)
    return jsonify(data)


# ******************************************************************************************
# 搜索具体疾病
# ******************************************************************************************
@app.route('/search_disease', methods=['POST', 'GET'])
def searchBydisease():
    disease = request.get_json()["disease"]
    month = request.get_json()["month"]
    data = dm.get_disease_age(disease, month)
    # print(dm.get_disease_age(disease, month))
    return jsonify(data)


# ******************************************************************************************
# 返回疾病具体信息和单分图数据
# ******************************************************************************************
@app.route('/get_disease_info', methods=['POST', 'GET'])
def getDiseaseInfo():
    disease = request.get_json()["disease_info"]
    data = {"info_text": dm.set_disease_info_data(disease, 1),
            "single_graph": dm.get_single_graph_data(disease)}
    return jsonify(data)


# ******************************************************************************************
# 返回疾病知识图谱数据
# ******************************************************************************************
@app.route('/get_knowledge_info', methods=['POST', 'GET'])
def getKnowledgeInfo():
    disease = request.get_json()["selected_disease"]
    data = dm.get_disease_list_info(disease)
    return jsonify(data)


# ******************************************************************************************
# 返回疾病关联图选择疾病的数据
# ******************************************************************************************
@app.route('/force_map_select', methods=['POST', 'GET'])
def selectForceMapNode():
    disease = request.get_json()["disease"]
    month = request.get_json()["month"]
    disease_names = request.get_json()["disease_info"]
    disease_lis = request.get_json()["selected_disease"]
    data = {"search": dm.get_disease_age(disease, month), "info_text": dm.set_disease_info_data(disease_names, 1),
            "knowledge": dm.get_disease_list_info(disease_lis)}
    # print(dm.get_disease_age(disease, month))
    return jsonify(data)


# ******************************************************************************************
# 后台接口测试
# ******************************************************************************************
@app.route('/test', methods=['POST', 'GET'])
def test():
    print("\n*************test*************")
    data = request.get_json()
    # print(data["season"], data["hospital"])
    # out = dm.month(data["hospital"])
    # out = dm.get_disease_age("脂肪肝", 0)
    # out = dm.get_topdisease_sex(0)
    # out = dm.sunburst_data("all")
    # 9a38653b2e769a84fa89ffa9da1c9e6d
    # out = dm.get_patient_disease("1e6ce7eab018584f9cbac518d4fd2824")
    out = dm.get_disease_list_info(["咽炎", "鼻甲肥大"])
    print(out)
    return jsonify(out)


if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=80)

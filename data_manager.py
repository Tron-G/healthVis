# -*- codeing = utf-8 -*-
# @Time: 2021/1/4 16:36
# @Author : 付超
# @File : .py
# @Software : PyCharm
from flask import Flask
import pandas as pd
import jieba


# 按医院科室返回json
def radar_map(hospital):
    df = pd.read_csv("./files/exam.csv")
    hospital = str(hospital)
    hospitals = {}
    department = {}
    if hospital != "all":
        department["心电"] = len(df[(df["DEPT_NAME"] == '心电室') & (df["ORG_NAME"] == hospital)]) + len(
            df[(df["DEPT_NAME"] == '心电图室') & (df["ORG_NAME"] == hospital)])
        department["眼科"] = len(df[(df["DEPT_NAME"] == '眼科') & (df["ORG_NAME"] == hospital)])
        department["外科"] = len(df[(df["DEPT_NAME"] == '外科') & (df["ORG_NAME"] == hospital)])
        department["CT"] = len(df[(df["DEPT_NAME"] == 'CT') & (df["ORG_NAME"] == hospital)]) + len(
            df[(df["DEPT_NAME"] == 'CT室') & (df["ORG_NAME"] == hospital)])
        department["彩超"] = len(df[(df["DEPT_NAME"] == '彩超') & (df["ORG_NAME"] == hospital)]) + len(
            df[(df["DEPT_NAME"] == '彩超室') & (df["ORG_NAME"] == hospital)])
        department["耳鼻喉"] = len(df[(df["DEPT_NAME"] == '耳鼻喉科') & (df["ORG_NAME"] == hospital)])
        department["口腔科"] = len(df[(df["DEPT_NAME"] == '口腔科') & (df["ORG_NAME"] == hospital)])
        department["内科"] = len(df[(df["DEPT_NAME"] == '内科') & (df["ORG_NAME"] == hospital)])
        hospitals[hospital] = department
    else:
        all = ["日照市岚山区人民医院", "日照市人民医院", "日照市中医医院", "五莲县人民医院"]
        for hospital in all:
            department["心电"] = len(df[(df["DEPT_NAME"] == '心电室') & (df["ORG_NAME"] == hospital)]) + len(
                df[(df["DEPT_NAME"] == '心电图室') & (df["ORG_NAME"] == hospital)])
            department["眼科"] = len(df[(df["DEPT_NAME"] == '眼科') & (df["ORG_NAME"] == hospital)])
            department["外科"] = len(df[(df["DEPT_NAME"] == '外科') & (df["ORG_NAME"] == hospital)])
            department["CT"] = len(df[(df["DEPT_NAME"] == 'CT') & (df["ORG_NAME"] == hospital)]) + len(
                df[(df["DEPT_NAME"] == 'CT室') & (df["ORG_NAME"] == hospital)])
            department["彩超"] = len(df[(df["DEPT_NAME"] == '彩超') & (df["ORG_NAME"] == hospital)]) + len(
                df[(df["DEPT_NAME"] == '彩超室') & (df["ORG_NAME"] == hospital)])
            department["耳鼻喉"] = len(df[(df["DEPT_NAME"] == '耳鼻喉科') & (df["ORG_NAME"] == hospital)])
            department["口腔科"] = len(df[(df["DEPT_NAME"] == '口腔科') & (df["ORG_NAME"] == hospital)])
            department["内科"] = len(df[(df["DEPT_NAME"] == '内科') & (df["ORG_NAME"] == hospital)])
            hospitals[hospital] = department
    print(hospitals)
    return hospitals


# 按职业返回json
def job(season, hospital):
    df = pd.read_csv("./files/exam_out.csv")
    the_season = ["spring", "summer", "fall", "winter"]
    the_hospital = ["日照市岚山区人民医院", "日照市人民医院", "日照市中医医院", "五莲县人民医院"]
    work = {}
    condition1 = {}
    condition2 = {}
    condition3 = {}
    condition4 = {}
    condition5 = {}
    for one_season in the_season:
        if season == one_season:
            df = df[(df["SEASON"] == "spring")]
            df = df.reset_index(drop=True)
            for one_hospital in the_hospital:
                if hospital == one_hospital:
                    df = df[(df["ORG_NAME"] == hospital)]
                    df = df.reset_index(drop=True)
                    condition1["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '公安局体检套餐(男)') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '公安局体检套餐(女)') & (df["SUMMARY"] == "正常")])
                    condition1["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '公安局体检套餐(男)') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '公安局体检套餐(女)') & (df["SUMMARY"] == "异常")])
                    work["警察"] = condition1
                    condition2["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐一') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐二') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐三') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐四') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '京杭林产家具招工套餐') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '中国人寿') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '鲁圣招工套餐') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '岚山区公会') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '2019云通水务') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '中为') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '体检套餐（五）众生生物') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '体检套餐（六）新玛特') & (df["SUMMARY"] == "正常")])
                    condition2["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐一') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐二') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐三') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐四') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '京杭林产家具招工套餐') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '中国人寿') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '鲁圣招工套餐') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '岚山区公会') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '2019云通水务') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '中为') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '体检套餐（五）众生生物') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '体检套餐（六）新玛特') & (df["SUMMARY"] == "异常")])
                    work["普通工人"] = condition2
                    condition3["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '山钢体检套餐') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '铸福招工套餐') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '日钢入岗前查体(高温噪声粉尘)') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '2019天辰公司（男）') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '2019鑫通源钢管套餐') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '2019莱钢金鼎体检套餐') & (df["SUMMARY"] == "正常")])
                    condition3["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '山钢体检套餐') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '铸福招工套餐') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '日钢入岗前查体(高温噪声粉尘)') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '2019天辰公司（男）') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '2019鑫通源钢管套餐') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '2019莱钢金鼎体检套餐') & (df["SUMMARY"] == "异常")])
                    work["钢铁工人"] = condition3
                    condition4["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '教师体检套餐') & (df["SUMMARY"] == "正常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '幼师体检套餐') & (df["SUMMARY"] == "正常")])
                    condition4["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '教师体检套餐') & (df["SUMMARY"] == "异常")]) + len(
                        df[(df["EXAM_TYPE_NAME"] == '幼师体检套餐') & (df["SUMMARY"] == "异常")])
                    work["教师"] = condition4
                    condition5["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '特种作业') & (df["SUMMARY"] == "正常")])
                    condition5["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '特种作业') & (df["SUMMARY"] == "异常")])
                    work["特别员工"] = condition5
                    return work
            condition1["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '公安局体检套餐(男)') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '公安局体检套餐(女)') & (df["SUMMARY"] == "正常")])
            condition1["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '公安局体检套餐(男)') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '公安局体检套餐(女)') & (df["SUMMARY"] == "异常")])
            work["警察"] = condition1
            condition2["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐一') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐二') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐三') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐四') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '京杭林产家具招工套餐') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '中国人寿') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '鲁圣招工套餐') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '岚山区公会') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '2019云通水务') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '中为') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '体检套餐（五）众生生物') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '体检套餐（六）新玛特') & (df["SUMMARY"] == "正常")])
            condition2["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐一') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐二') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐三') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐四') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '京杭林产家具招工套餐') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '中国人寿') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '鲁圣招工套餐') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '岚山区公会') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '2019云通水务') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '中为') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '体检套餐（五）众生生物') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '体检套餐（六）新玛特') & (df["SUMMARY"] == "异常")])
            work["普通工人"] = condition2
            condition3["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '山钢体检套餐') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '铸福招工套餐') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '日钢入岗前查体(高温噪声粉尘)') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '2019天辰公司（男）') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '2019鑫通源钢管套餐') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '2019莱钢金鼎体检套餐') & (df["SUMMARY"] == "正常")])
            condition3["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '山钢体检套餐') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '铸福招工套餐') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '日钢入岗前查体(高温噪声粉尘)') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '2019天辰公司（男）') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '2019鑫通源钢管套餐') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '2019莱钢金鼎体检套餐') & (df["SUMMARY"] == "异常")])
            work["钢铁工人"] = condition3
            condition4["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '教师体检套餐') & (df["SUMMARY"] == "正常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '幼师体检套餐') & (df["SUMMARY"] == "正常")])
            condition4["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '教师体检套餐') & (df["SUMMARY"] == "异常")]) + len(
                df[(df["EXAM_TYPE_NAME"] == '幼师体检套餐') & (df["SUMMARY"] == "异常")])
            work["教师"] = condition4
            condition5["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '特种作业') & (df["SUMMARY"] == "正常")])
            condition5["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '特种作业') & (df["SUMMARY"] == "异常")])
            work["特别员工"] = condition5
            return work
    condition1["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '公安局体检套餐(男)') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '公安局体检套餐(女)') & (df["SUMMARY"] == "正常")])
    condition1["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '公安局体检套餐(男)') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '公安局体检套餐(女)') & (df["SUMMARY"] == "异常")])
    work["警察"] = condition1
    condition2["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐一') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐二') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐三') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐四') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '京杭林产家具招工套餐') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '中国人寿') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '鲁圣招工套餐') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '岚山区公会') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '2019云通水务') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '中为') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '体检套餐（五）众生生物') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '体检套餐（六）新玛特') & (df["SUMMARY"] == "正常")])
    condition2["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐一') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐二') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐三') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '普通招工体检套餐四') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '京杭林产家具招工套餐') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '中国人寿') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '鲁圣招工套餐') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '岚山区公会') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '2019云通水务') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '中为') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '体检套餐（五）众生生物') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '体检套餐（六）新玛特') & (df["SUMMARY"] == "异常")])
    work["普通工人"] = condition2
    condition3["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '山钢体检套餐') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '铸福招工套餐') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '日钢入岗前查体(高温噪声粉尘)') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '2019天辰公司（男）') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '2019鑫通源钢管套餐') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '2019莱钢金鼎体检套餐') & (df["SUMMARY"] == "正常")])
    condition3["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '山钢体检套餐') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '铸福招工套餐') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '日钢入岗前查体(高温噪声粉尘)') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '2019天辰公司（男）') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '2019鑫通源钢管套餐') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '2019莱钢金鼎体检套餐') & (df["SUMMARY"] == "异常")])
    work["钢铁工人"] = condition3
    condition4["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '教师体检套餐') & (df["SUMMARY"] == "正常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '幼师体检套餐') & (df["SUMMARY"] == "正常")])
    condition4["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '教师体检套餐') & (df["SUMMARY"] == "异常")]) + len(
        df[(df["EXAM_TYPE_NAME"] == '幼师体检套餐') & (df["SUMMARY"] == "异常")])
    work["教师"] = condition4
    condition5["正常"] = len(df[(df["EXAM_TYPE_NAME"] == '特种作业') & (df["SUMMARY"] == "正常")])
    condition5["异常"] = len(df[(df["EXAM_TYPE_NAME"] == '特种作业') & (df["SUMMARY"] == "异常")])
    work["特别员工"] = condition5
    return work


# 按医院诊断人数返回json
def season(season, hospital):
    df = pd.read_csv("./files/report_out.csv")
    season_json = {}
    the_season = ["spring", "summer", "fall", "winter"]
    for one_season in the_season:
        if season == one_season:
            df = df[(df["SEASON"] == season)]
            df = df.reset_index(drop=True)
            season_json["season"] = hospital
            season_json["日照市岚山区人民医院"] = len(df[df["ORG_NAME"] == "日照市岚山区人民医院"])
            season_json["日照市人民医院"] = len(df[df["ORG_NAME"] == "日照市人民医院"])
            season_json["日照市中医医院"] = len(df[df["ORG_NAME"] == "日照市中医医院"])
            season_json["五莲县人民医院"] = len(df[df["ORG_NAME"] == "五莲县人民医院"])
            return season_json
    df = df.reset_index(drop=True)
    season_json["season"] = hospital
    season_json["日照市岚山区人民医院"] = len(df[df["ORG_NAME"] == "日照市岚山区人民医院"])
    season_json["日照市人民医院"] = len(df[df["ORG_NAME"] == "日照市人民医院"])
    season_json["日照市中医医院"] = len(df[df["ORG_NAME"] == "日照市中医医院"])
    season_json["五莲县人民医院"] = len(df[df["ORG_NAME"] == "五莲县人民医院"])
    return season_json










# @app.route("/top10/<season>/<hospital>")
# def top10(season,hospital):
#     df = pd.read_csv("./files/report_out.csv")
#     the_hospital = {}
#     diseases = []
#     with open("./files/myword.txt","r",encoding='UTF-8') as file:
#         keywords = []
#         top10 = []
#         words = file.readlines()
#         for i in range(0,len(words)):
#             words[i] = words[i].replace("\n","")
#         if season == "spring":
#             df = df[(df["SEASON"] == "spring")]
#             df = df.reset_index(drop=True)
#             if hospital == "日照市岚山区人民医院":
#                 df = df[(df["ORG_NAME"] == "日照市岚山区人民医院")]
#                 df = df.reset_index(drop=True)
#                 for word in words:
#                     keyword = {"keyword":word,"value":0}
#                     tmp = 0
#                     for i in range(0,len(df["ID"])):
#                         if word in df["EXAM_SUMMARY"][i]:
#                             keyword['value'] = keyword['value'] + 1
#                     keywords.append(keyword)
#                 for i in range(0, 10):
#                     max = {"keyword": "", "value": 0}
#                     for keyword in keywords:
#                         if keyword['value'] > max['value']:
#                             max['keyword'] = keyword['keyword']
#                             max['value'] = keyword['value']
#                     top10.append(max)
#                     for keyword in keywords:
#                         if keyword['keyword'] == max['keyword']:
#                             keyword['value'] = 0
#                 the_hospital["hospital"] = hospital
#                 outstr = ''
#                 print(top10)
#                 for one in top10:
#                     disease = {}
#                     info = {}
#                     info["total"] = one["value"]
#                     for i in range(0,len(df["FOOD_GUIDANCE"])):
#                         if one["keyword"] in df["FOOD_GUIDANCE"][i]:
#                             stopword_list = [k.strip() for k in open('./files/stopwords.txt', encoding='utf8').readlines() if
#                                              k.strip() != '']
#                             sentence_seged = jieba.cut(df["FOOD_GUIDANCE"][i].strip())
#                             for word in sentence_seged:
#                                 if word not in stopword_list:
#                                     if word != '\t' and u'\u4e00' <= word <= u'\u9fff':
#                                         outstr += word
#                                         outstr += "\n"
#                     info["advice"] = outstr
#                     disease[one["keyword"]] = info
#                     diseases.append(disease)
#                 the_hospital["disease"] = diseases
#                 print(the_hospital)
#                 return the_hospital
#             # deseases = [{"yajieshi":{}},{},{}]
#             if hospital == "日照市中医医院":
#                 df = df[(df["ORG_NAME"] == "日照市中医医院")]
#                 df = df.reset_index(drop=True)
#                 for word in words:
#                     keyword = {"keyword":word,"value":0}
#                     tmp = 0
#                     for i in range(0,len(df["ID"])):
#                         if word in df["EXAM_SUMMARY"][i]:
#                             keyword['value'] = keyword['value'] + 1
#                     keywords.append(keyword)
#                 for i in range(0, 10):
#                     max = {"keyword": "", "value": 0}
#                     for keyword in keywords:
#                         if keyword['value'] > max['value']:
#                             max['keyword'] = keyword['keyword']
#                             max['value'] = keyword['value']
#                     top10.append(max)
#                     for keyword in keywords:
#                         if keyword['keyword'] == max['keyword']:
#                             keyword['value'] = 0
#                 the_hospital["hospital"] = hospital
#                 outstr = ''
#                 print(top10)
#                 for one in top10:
#                     disease = {}
#                     info = {}
#                     info["total"] = one["value"]
#                     for i in range(0,len(df["FOOD_GUIDANCE"])):
#                         if one["keyword"] in df["FOOD_GUIDANCE"][i]:
#                             stopword_list = [k.strip() for k in open('./files/stopwords.txt', encoding='utf8').readlines() if
#                                              k.strip() != '']
#                             sentence_seged = jieba.cut(df["FOOD_GUIDANCE"][i].strip())
#                             for word in sentence_seged:
#                                 if word not in stopword_list:
#                                     if word != '\t' and u'\u4e00' <= word <= u'\u9fff':
#                                         outstr += word
#                                         outstr += "\n"
#                     info["advice"] = outstr
#                     disease[one["keyword"]] = info
#                     diseases.append(disease)
#                 the_hospital["disease"] = diseases
#                 print(the_hospital)
#                 return the_hospital
#             if hospital == "日照市人民医院":
#                 df = df[(df["ORG_NAME"] == "日照市人民医院")]
#                 df = df.reset_index(drop=True)
#                 for word in words:
#                     keyword = {"keyword":word,"value":0}
#                     tmp = 0
#                     for i in range(0,len(df["ID"])):
#                         if word in df["EXAM_SUMMARY"][i]:
#                             keyword['value'] = keyword['value'] + 1
#                     keywords.append(keyword)
#                 for i in range(0, 10):
#                     max = {"keyword": "", "value": 0}
#                     for keyword in keywords:
#                         if keyword['value'] > max['value']:
#                             max['keyword'] = keyword['keyword']
#                             max['value'] = keyword['value']
#                     top10.append(max)
#                     for keyword in keywords:
#                         if keyword['keyword'] == max['keyword']:
#                             keyword['value'] = 0
#                 the_hospital["hospital"] = hospital
#                 outstr = ''
#                 print(top10)
#                 for one in top10:
#                     disease = {}
#                     info = {}
#                     info["total"] = one["value"]
#                     for i in range(0,len(df["FOOD_GUIDANCE"])):
#                         if one["keyword"] in df["FOOD_GUIDANCE"][i]:
#                             stopword_list = [k.strip() for k in open('./files/stopwords.txt', encoding='utf8').readlines() if
#                                              k.strip() != '']
#                             sentence_seged = jieba.cut(df["FOOD_GUIDANCE"][i].strip())
#                             for word in sentence_seged:
#                                 if word not in stopword_list:
#                                     if word != '\t' and u'\u4e00' <= word <= u'\u9fff':
#                                         outstr += word
#                                         outstr += "\n"
#                     info["advice"] = outstr
#                     disease[one["keyword"]] = info
#                     diseases.append(disease)
#                 the_hospital["disease"] = diseases
#                 print(the_hospital)
#                 return the_hospital
#             if hospital == "五莲县人民医院":
#                 df = df[(df["ORG_NAME"] == "五莲县人民医院")]
#                 df = df.reset_index(drop=True)
#                 for word in words:
#                     keyword = {"keyword":word,"value":0}
#                     tmp = 0
#                     for i in range(0,len(df["ID"])):
#                         if word in df["EXAM_SUMMARY"][i]:
#                             keyword['value'] = keyword['value'] + 1
#                     keywords.append(keyword)
#                 for i in range(0, 10):
#                     max = {"keyword": "", "value": 0}
#                     for keyword in keywords:
#                         if keyword['value'] > max['value']:
#                             max['keyword'] = keyword['keyword']
#                             max['value'] = keyword['value']
#                     top10.append(max)
#                     for keyword in keywords:
#                         if keyword['keyword'] == max['keyword']:
#                             keyword['value'] = 0
#                 the_hospital["hospital"] = hospital
#                 outstr = ''
#                 print(top10)
#                 for one in top10:
#                     disease = {}
#                     info = {}
#                     info["total"] = one["value"]
#                     for i in range(0,len(df["FOOD_GUIDANCE"])):
#                         if one["keyword"] in df["FOOD_GUIDANCE"][i]:
#                             stopword_list = [k.strip() for k in open('./files/stopwords.txt', encoding='utf8').readlines() if
#                                              k.strip() != '']
#                             sentence_seged = jieba.cut(df["FOOD_GUIDANCE"][i].strip())
#                             for word in sentence_seged:
#                                 if word not in stopword_list:
#                                     if word != '\t' and u'\u4e00' <= word <= u'\u9fff':
#                                         outstr += word
#                                         outstr += "\n"
#                     info["advice"] = outstr
#                     disease[one["keyword"]] = info
#                     diseases.append(disease)
#                 the_hospital["disease"] = diseases
#                 print(the_hospital)
#                 return the_hospital
#             for word in words:
#                 keyword = {"keyword": word, "value": 0}
#                 tmp = 0
#                 for i in range(0, len(df["ID"])):
#                     if word in df["EXAM_SUMMARY"][i]:
#                         keyword['value'] = keyword['value'] + 1
#                 keywords.append(keyword)
#             # for keyword in keywords:
#             #     keyword["value"] = keyword["value"]
#             # keyword["value"] = keyword["value"]/len(df["ID"])
#             for i in range(0, 10):
#                 max = {"keyword": "", "value": 0}
#                 for keyword in keywords:
#                     if keyword['value'] > max['value']:
#                         max['keyword'] = keyword['keyword']
#                         max['value'] = keyword['value']
#                 top10.append(max)
#                 for keyword in keywords:
#                     if keyword['keyword'] == max['keyword']:
#                         keyword['value'] = 0
#             the_hospital["hospital"] = hospital
#             for one in top10:
#                 disease = {}
#                 info = {}
#                 info["total"] = one["value"]
#                 # for i in range(0,len())
#                 # info["advice"] =
#                 disease[one["keyword"]] = info
#                 diseases.append(disease)
#             the_hospital["disease"] = diseases
#             print(the_hospital)
#             # deseases = [{"yajieshi":{}},{},{}]
#             return the_hospital
#
#
#         if season == "summer":
#             df = df[(df["SEASON"] == "summer")]
#             df = df.reset_index(drop=True)
#         if season == "fall":
#             df = df[(df["SEASON"] == "fall")]
#             df = df.reset_index(drop=True)
#         if season == "winter":
#             df = df[(df["SEASON"] == "winter")]
#             df = df.reset_index(drop=True)
#
#     return "yes"

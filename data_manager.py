# -*- codeing = utf-8 -*-
# @Time: 2021/1/4 16:36
# @Author : 付超
# @File : .py
# @Software : PyCharm
import random

from flask import Flask
import pandas as pd
import json

app = Flask(__name__)


# ******************************************************************************************
# 按医院科室返回json
# ******************************************************************************************
# @app.route('/radar_map/<season>/<hospital>/')
def radar_map(season, hospital):
    df = pd.read_csv("./files/exam.csv")
    the_season = ["spring", "summer", "fall", "winter"]
    all = ["日照市岚山区人民医院", "日照市人民医院", "日照市中医医院", "五莲县人民医院"]
    hospital = str(hospital)
    hospitals = {}
    for one_season in the_season:
        if season == one_season:
            df = df[(df["SEASON"] == season)]
            df = df.reset_index(drop=True)
            if hospital != "all":
                department = {}
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
                return hospitals
            else:
                for one_hospital in all:
                    department = {}
                    department["心电"] = len(df[(df["DEPT_NAME"] == '心电室') & (df["ORG_NAME"] == one_hospital)]) + len(
                        df[(df["DEPT_NAME"] == '心电图室') & (df["ORG_NAME"] == one_hospital)])
                    department["眼科"] = len(df[(df["DEPT_NAME"] == '眼科') & (df["ORG_NAME"] == one_hospital)])
                    department["外科"] = len(df[(df["DEPT_NAME"] == '外科') & (df["ORG_NAME"] == one_hospital)])
                    department["CT"] = len(df[(df["DEPT_NAME"] == 'CT') & (df["ORG_NAME"] == one_hospital)]) + len(
                        df[(df["DEPT_NAME"] == 'CT室') & (df["ORG_NAME"] == one_hospital)])
                    department["彩超"] = len(df[(df["DEPT_NAME"] == '彩超') & (df["ORG_NAME"] == one_hospital)]) + len(
                        df[(df["DEPT_NAME"] == '彩超室') & (df["ORG_NAME"] == one_hospital)])
                    department["耳鼻喉"] = len(df[(df["DEPT_NAME"] == '耳鼻喉科') & (df["ORG_NAME"] == one_hospital)])
                    department["口腔科"] = len(df[(df["DEPT_NAME"] == '口腔科') & (df["ORG_NAME"] == one_hospital)])
                    department["内科"] = len(df[(df["DEPT_NAME"] == '内科') & (df["ORG_NAME"] == one_hospital)])
                    hospitals[one_hospital] = department
                return hospitals
    if hospital != "all":
        department = {}
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
        return hospitals
    else:
        for one_hospital in all:
            department = {}
            department["心电"] = len(df[(df["DEPT_NAME"] == '心电室') & (df["ORG_NAME"] == one_hospital)]) + len(
                df[(df["DEPT_NAME"] == '心电图室') & (df["ORG_NAME"] == one_hospital)])
            department["眼科"] = len(df[(df["DEPT_NAME"] == '眼科') & (df["ORG_NAME"] == one_hospital)])
            department["外科"] = len(df[(df["DEPT_NAME"] == '外科') & (df["ORG_NAME"] == one_hospital)])
            department["CT"] = len(df[(df["DEPT_NAME"] == 'CT') & (df["ORG_NAME"] == one_hospital)]) + len(
                df[(df["DEPT_NAME"] == 'CT室') & (df["ORG_NAME"] == one_hospital)])
            department["彩超"] = len(df[(df["DEPT_NAME"] == '彩超') & (df["ORG_NAME"] == one_hospital)]) + len(
                df[(df["DEPT_NAME"] == '彩超室') & (df["ORG_NAME"] == one_hospital)])
            department["耳鼻喉"] = len(df[(df["DEPT_NAME"] == '耳鼻喉科') & (df["ORG_NAME"] == one_hospital)])
            department["口腔科"] = len(df[(df["DEPT_NAME"] == '口腔科') & (df["ORG_NAME"] == one_hospital)])
            department["内科"] = len(df[(df["DEPT_NAME"] == '内科') & (df["ORG_NAME"] == one_hospital)])
            hospitals[one_hospital] = department
        print(hospitals)
        return hospitals


# ******************************************************************************************
# 按职业返回json
# ******************************************************************************************
# @app.route('/job/<season>/<hospital>')
def job(season, hospital):
    df = pd.read_csv("./files/exam.csv")
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


# ******************************************************************************************
# 按医院诊断人数返回json
# ******************************************************************************************
# @app.route("/season/<season>/<hospital>")
def season(season):
    df = pd.read_csv("./files/report.csv")
    season_json = {}
    the_season = ["spring", "summer", "fall", "winter"]
    for one_season in the_season:
        if season == one_season:
            df = df[(df["SEASON"] == season)]
            df = df.reset_index(drop=True)
            season_json["season"] = season
            season_json["日照市岚山区人民医院"] = len(df[df["ORG_NAME"] == "日照市岚山区人民医院"])
            season_json["日照市人民医院"] = len(df[df["ORG_NAME"] == "日照市人民医院"])
            season_json["日照市中医医院"] = len(df[df["ORG_NAME"] == "日照市中医医院"])
            season_json["五莲县人民医院"] = len(df[df["ORG_NAME"] == "五莲县人民医院"])
            return season_json
    df = df.reset_index(drop=True)
    season_json["season"] = season
    season_json["日照市岚山区人民医院"] = len(df[df["ORG_NAME"] == "日照市岚山区人民医院"])
    season_json["日照市人民医院"] = len(df[df["ORG_NAME"] == "日照市人民医院"])
    season_json["日照市中医医院"] = len(df[df["ORG_NAME"] == "日照市中医医院"])
    season_json["五莲县人民医院"] = len(df[df["ORG_NAME"] == "五莲县人民医院"])
    return season_json


# ******************************************************************************************
# 根据医院和季节返回top10疾病在该医院的人数和建议
# ******************************************************************************************
# @app.route("/top10/<season>/<hospital>")
def top10(season, hospital):
    df = pd.read_csv("./files/report.csv")
    the_hospitals = ["日照市岚山区人民医院", "日照市人民医院", "日照市中医医院", "五莲县人民医院"]
    the_season = ["spring", "summer", "fall", "winter"]
    the_hospital = {}
    diseases = []
    keywords = []
    top10 = []
    # 读取全部疾病，放入words列表中
    with open("./files/myword.txt", "r", encoding='UTF-8') as file:
        words = file.readlines()
        for i in range(0, len(words)):
            words[i] = words[i].replace("\n", "")
        # 选择该季节的数据
        for one_season in the_season:
            if season == one_season:
                df = df[(df["SEASON"] == season)]
                df = df.reset_index(drop=True)
                # 选择该医院的数据
                for one_hospital in the_hospitals:
                    if hospital == one_hospital:
                        df = df[(df["ORG_NAME"] == hospital)]
                        df = df.reset_index(drop=True)
                        # 计算出top10
                        for word in words:
                            keyword = {"keyword": word, "value": 0}
                            for i in range(0, len(df["ID"])):
                                if word in df["EXAM_SUMMARY"][i]:
                                    keyword['value'] = keyword['value'] + 1
                            keywords.append(keyword)
                        for i in range(0, 10):
                            max = {"keyword": "", "value": 0}
                            for keyword in keywords:
                                if keyword['value'] > max['value']:
                                    max['keyword'] = keyword['keyword']
                                    max['value'] = keyword['value']
                            top10.append(max)
                            for keyword in keywords:
                                if keyword['keyword'] == max['keyword']:
                                    keyword['value'] = 0
                        the_hospital["hospital"] = hospital
                        print(top10)
                        # 将top的疾病赋予人数和建议
                        for one in top10:
                            disease = {}
                            info = {}
                            # 将人数加入info中
                            info["total"] = one["value"]
                            # 读取已经处理好的疾病和建议的json
                            with open("./files/advice.json", "r", encoding="utf-8") as json_file:
                                advices = json_file.read()
                                advices = json.loads(advices)
                            # 将建议加入info中
                            for advice in advices.keys():
                                if one["keyword"] == advice:
                                    info["advice"] = advices[advice]
                                    print(advices[advice])
                            disease[one["keyword"]] = info
                            diseases.append(disease)
                        the_hospital["disease"] = diseases
                        print(the_hospital)
                        return the_hospital
                # 在不选择医院的情况下将进行
                for word in words:
                    keyword = {"keyword": word, "value": 0}
                    for i in range(0, len(df["ID"])):
                        if word in df["EXAM_SUMMARY"][i]:
                            keyword['value'] = keyword['value'] + 1
                    keywords.append(keyword)
                for i in range(0, 10):
                    max = {"keyword": "", "value": 0}
                    for keyword in keywords:
                        if keyword['value'] > max['value']:
                            max['keyword'] = keyword['keyword']
                            max['value'] = keyword['value']
                    top10.append(max)
                    for keyword in keywords:
                        if keyword['keyword'] == max['keyword']:
                            keyword['value'] = 0
                the_hospital["hospital"] = hospital
                print(top10)
                for one in top10:
                    disease = {}
                    info = {}
                    info["total"] = one["value"]
                    with open("./files/advice.json", "r", encoding="utf-8") as json_file:
                        advices = json_file.read()
                        advices = json.loads(advices)
                    for advice in advices.keys():
                        if one["keyword"] == advice:
                            info["advice"] = advices[advice]
                            print(advices[advice])
                    disease[one["keyword"]] = info
                    diseases.append(disease)
                the_hospital["disease"] = diseases
                print(the_hospital)
                return the_hospital
        # 在不选择季节的情况下进行
        for one_hospital in the_hospitals:
            if hospital == one_hospital:
                df = df[(df["ORG_NAME"] == hospital)]
                df = df.reset_index(drop=True)
                # 计算出top10
                for word in words:
                    keyword = {"keyword": word, "value": 0}
                    for i in range(0, len(df["ID"])):
                        if word in df["EXAM_SUMMARY"][i]:
                            keyword['value'] = keyword['value'] + 1
                    keywords.append(keyword)
                for i in range(0, 10):
                    max = {"keyword": "", "value": 0}
                    for keyword in keywords:
                        if keyword['value'] > max['value']:
                            max['keyword'] = keyword['keyword']
                            max['value'] = keyword['value']
                    top10.append(max)
                    for keyword in keywords:
                        if keyword['keyword'] == max['keyword']:
                            keyword['value'] = 0
                the_hospital["hospital"] = hospital
                print(top10)
                # 将top的疾病赋予人数和建议
                for one in top10:
                    disease = {}
                    info = {}
                    # 将人数加入info中
                    info["total"] = one["value"]
                    # 读取已经处理好的疾病和建议的json
                    with open("./files/advice.json", "r", encoding="utf-8") as json_file:
                        advices = json_file.read()
                        advices = json.loads(advices)
                    # 将建议加入info中
                    for advice in advices.keys():
                        if one["keyword"] == advice:
                            info["advice"] = advices[advice]
                            print(advices[advice])
                    disease[one["keyword"]] = info
                    diseases.append(disease)
                the_hospital["disease"] = diseases
                print(the_hospital)
                return the_hospital
        # 在不选择季节和医院的情况下将进行
        for word in words:
            keyword = {"keyword": word, "value": 0}
            for i in range(0, len(df["ID"])):
                if word in df["EXAM_SUMMARY"][i]:
                    keyword['value'] = keyword['value'] + 1
            keywords.append(keyword)
        for i in range(0, 10):
            max = {"keyword": "", "value": 0}
            for keyword in keywords:
                if keyword['value'] > max['value']:
                    max['keyword'] = keyword['keyword']
                    max['value'] = keyword['value']
            top10.append(max)
            for keyword in keywords:
                if keyword['keyword'] == max['keyword']:
                    keyword['value'] = 0
        the_hospital["hospital"] = hospital
        outstr = ''
        print(top10)
        for one in top10:
            disease = {}
            info = {}
            info["total"] = one["value"]
            with open("./files/advice.json", "r", encoding="utf-8") as json_file:
                advices = json_file.read()
                advices = json.loads(advices)
            for advice in advices.keys():
                if one["keyword"] == advice:
                    info["advice"] = advices[advice]
                    print(advices[advice])
            disease[one["keyword"]] = info
            diseases.append(disease)
        the_hospital["disease"] = diseases
        print(the_hospital)
        return the_hospital
        # deseases = [{"yajieshi":{}},{},{}]


# ******************************************************************************************
# 返回年龄段分布
# ******************************************************************************************
def age(season, hospital):
    df = pd.read_csv("./files/report.csv")
    the_hospitals = ["日照市岚山区人民医院", "日照市人民医院", "日照市中医医院", "五莲县人民医院"]
    the_season = ["spring", "summer", "fall", "winter"]
    ages = {}
    for one_season in the_season:
        if season == one_season:
            df = df[(df["SEASON"] == season)]
            df = df.reset_index(drop=True)
            for one_hospital in the_hospitals:
                if hospital == one_hospital:
                    df = df[(df["ORG_NAME"] == hospital)]
                    df = df.reset_index(drop=True)
                    ages["0-10"] = len(df[(df["AGE"] >= 0) & (df["AGE"] < 10)])
                    ages["10-20"] = len(df[(df["AGE"] >= 10) & (df["AGE"] < 20)])
                    ages["20-30"] = len(df[(df["AGE"] >= 20) & (df["AGE"] < 30)])
                    ages["30-40"] = len(df[(df["AGE"] >= 30) & (df["AGE"] < 40)])
                    ages["40-50"] = len(df[(df["AGE"] >= 40) & (df["AGE"] < 50)])
                    ages["50-60"] = len(df[(df["AGE"] >= 50) & (df["AGE"] < 60)])
                    ages["60-70"] = len(df[(df["AGE"] >= 60) & (df["AGE"] < 70)])
                    ages["70-80"] = len(df[(df["AGE"] >= 70) & (df["AGE"] < 80)])
                    ages["80-90"] = len(df[(df["AGE"] >= 80) & (df["AGE"] < 90)])
                    ages["90-100"] = len(df[(df["AGE"] >= 90) & (df["AGE"] < 100)])
                    return ages
            ages["0-10"] = len(df[(df["AGE"] >= 0) & (df["AGE"] < 10)])
            ages["10-20"] = len(df[(df["AGE"] >= 10) & (df["AGE"] < 20)])
            ages["20-30"] = len(df[(df["AGE"] >= 20) & (df["AGE"] < 30)])
            ages["30-40"] = len(df[(df["AGE"] >= 30) & (df["AGE"] < 40)])
            ages["40-50"] = len(df[(df["AGE"] >= 40) & (df["AGE"] < 50)])
            ages["50-60"] = len(df[(df["AGE"] >= 50) & (df["AGE"] < 60)])
            ages["60-70"] = len(df[(df["AGE"] >= 60) & (df["AGE"] < 70)])
            ages["70-80"] = len(df[(df["AGE"] >= 70) & (df["AGE"] < 80)])
            ages["80-90"] = len(df[(df["AGE"] >= 80) & (df["AGE"] < 90)])
            ages["90-100"] = len(df[(df["AGE"] >= 90) & (df["AGE"] < 100)])
            return ages
    for one_hospital in the_hospitals:
        if hospital == one_hospital:
            df = df[(df["ORG_NAME"] == hospital)]
            df = df.reset_index(drop=True)
            ages["0-10"] = len(df[(df["AGE"] >= 0) & (df["AGE"] < 10)])
            ages["10-20"] = len(df[(df["AGE"] >= 10) & (df["AGE"] < 20)])
            ages["20-30"] = len(df[(df["AGE"] >= 20) & (df["AGE"] < 30)])
            ages["30-40"] = len(df[(df["AGE"] >= 30) & (df["AGE"] < 40)])
            ages["40-50"] = len(df[(df["AGE"] >= 40) & (df["AGE"] < 50)])
            ages["50-60"] = len(df[(df["AGE"] >= 50) & (df["AGE"] < 60)])
            ages["60-70"] = len(df[(df["AGE"] >= 60) & (df["AGE"] < 70)])
            ages["70-80"] = len(df[(df["AGE"] >= 70) & (df["AGE"] < 80)])
            ages["80-90"] = len(df[(df["AGE"] >= 80) & (df["AGE"] < 90)])
            ages["90-100"] = len(df[(df["AGE"] >= 90) & (df["AGE"] < 100)])
            return ages
    ages["0-10"] = len(df[(df["AGE"] >= 0) & (df["AGE"] < 10)])
    ages["10-20"] = len(df[(df["AGE"] >= 10) & (df["AGE"] < 20)])
    ages["20-30"] = len(df[(df["AGE"] >= 20) & (df["AGE"] < 30)])
    ages["30-40"] = len(df[(df["AGE"] >= 30) & (df["AGE"] < 40)])
    ages["40-50"] = len(df[(df["AGE"] >= 40) & (df["AGE"] < 50)])
    ages["50-60"] = len(df[(df["AGE"] >= 50) & (df["AGE"] < 60)])
    ages["60-70"] = len(df[(df["AGE"] >= 60) & (df["AGE"] < 70)])
    ages["70-80"] = len(df[(df["AGE"] >= 70) & (df["AGE"] < 80)])
    ages["80-90"] = len(df[(df["AGE"] >= 80) & (df["AGE"] < 90)])
    ages["90-100"] = len(df[(df["AGE"] >= 90) & (df["AGE"] < 100)])
    return ages


# ******************************************************************************************
# 根据病人id返回对应的疾病列表和医生建议
# ******************************************************************************************
def searchById(HEALTH_EXAM_NO):
    list_data = pd.read_csv("./files/report.csv")

    pass


# ******************************************************************************************
# 旭日图数据
# ******************************************************************************************
def month(hospital):
    df = pd.read_csv("./files/report.csv")
    the_hospitals = ["日照市岚山区人民医院", "日照市人民医院", "日照市中医医院", "五莲县人民医院"]
    the_month = ["2019-01", "2019-02", "2019-03", "2019-04", "2019-05", "2019-06", "2019-07", "2019-08", "2019-09",
                 "2019-10", "2019-11", "2019-12"]
    English_month = ["January.January", "February.February", "March.March", "April.April", "May.May", "June.June",
                     "July.July", "August.August", "September.September", "October.October", "November.November",
                     "December.December"]
    names = ["girl({}).January", "girl({}).February", "girl({}).March", "girl({}).April", "girl({}).May",
             "girl({}).June", "girl({}).July", "girl({}).August", "girl({}).September", "girl({}).October",
             "girl({}).November", "girl({}).December", "girl({}).wonmen"]
    root = {}
    root["name"] = "root"
    # top的数量
    n = 20
    months = []
    # 读取全部疾病
    with open("./files/myword.txt", "r", encoding='UTF-8') as file:
        words = file.readlines()
        for i in range(0, len(words)):
            words[i] = words[i].replace("\n", "")
    # 选择医院
    for one_hospital in the_hospitals:
        if hospital == one_hospital:
            df = df[(df["ORG_NAME"] == hospital)]
            df = df.reset_index(drop=True)
            # 选择月份
            for i in range(0, len(the_month)):
                one_month = the_month[i]
                one_month_df = df[(df["SUMMARIZE_TIME"] == one_month)]
                one_month_df = one_month_df.reset_index(drop=True)
                keywords = []
                top20 = []
                month = {}
                month["name"] = English_month[i]
                month["num"] = len(df["ID"])
                diseases = []
                # 找出top20的疾病
                for word in words:
                    keyword = {"keyword": word, "value": 0}
                    for i in range(0, len(one_month_df["ID"])):
                        if word in one_month_df["EXAM_SUMMARY"][i]:
                            keyword['value'] = keyword['value'] + 1
                    keywords.append(keyword)
                for i in range(0, n):
                    max = {"keyword": "", "value": 0}
                    for keyword in keywords:
                        if keyword['value'] > max['value']:
                            max['keyword'] = keyword['keyword']
                            max['value'] = keyword['value']
                    top20.append(max["keyword"])
                    for keyword in keywords:
                        if keyword['keyword'] == max['keyword']:
                            keyword['value'] = 0
                # 找出top20疾病女性和男性的人数
                girl_df = one_month_df[one_month_df["SEX_CODE"] == "2"]
                girl_df = girl_df.reset_index(drop=True)
                boy_df = one_month_df[one_month_df["SEX_CODE"] == "1"]
                boy_df = boy_df.reset_index(drop=True)
                for one in top20:
                    # 找出女性的人数
                    disease = {}
                    disease["name"] = random.choice(names).format(one)
                    # print(disease["name"])
                    disease["num"] = 0
                    for i in range(0, len(girl_df["ID"])):
                        if one in girl_df["EXAM_SUMMARY"][i]:
                            disease["num"] = disease["num"] + 1
                    # 找出男性的人数
                    boy_diseases = []
                    boy_disease = {}
                    boy_disease["name"] = "boy(" + one + ").man"
                    boy_disease["size"] = 100
                    boy_disease["num"] = 0
                    for i in range(0, len(boy_df["ID"])):
                        if one in boy_df["EXAM_SUMMARY"][i]:
                            boy_disease["num"] = boy_disease["num"] + 1
                    boy_diseases.append(boy_disease)
                    disease["children"] = boy_diseases
                    the_names = []
                    for name in names:
                        name = name.replace("{", "")
                        name = name.replace("}", "")
                        the_names.append(name)
                    if disease["name"] not in the_names:
                        diseases.append(disease)
                month["children"] = diseases
                months.append(month)
            root["children"] = months
            # print(root)
            return root
    # 选择月份
    for i in range(0, len(the_month)):
        one_month = the_month[i]
        one_month_df = df[(df["SUMMARIZE_TIME"] == one_month)]
        one_month_df = one_month_df.reset_index(drop=True)
        keywords = []
        top20 = []
        month = {}
        month["name"] = English_month[i]
        month["num"] = len(df["ID"])
        diseases = []
        # 找出top20的疾病
        for word in words:
            keyword = {"keyword": word, "value": 0}
            for i in range(0, len(one_month_df["ID"])):
                if word in one_month_df["EXAM_SUMMARY"][i]:
                    keyword['value'] = keyword['value'] + 1
            keywords.append(keyword)
        for i in range(0, n):
            max = {"keyword": "", "value": 0}
            for keyword in keywords:
                if keyword['value'] > max['value']:
                    max['keyword'] = keyword['keyword']
                    max['value'] = keyword['value']
            top20.append(max["keyword"])
            for keyword in keywords:
                if keyword['keyword'] == max['keyword']:
                    keyword['value'] = 0
        # 找出top20疾病女性和男性的人数
        girl_df = one_month_df[one_month_df["SEX_CODE"] == "2"]
        girl_df = girl_df.reset_index(drop=True)
        boy_df = one_month_df[one_month_df["SEX_CODE"] == "1"]
        boy_df = boy_df.reset_index(drop=True)
        for one in top20:
            # 找出女性的人数
            disease = {}
            disease["name"] = random.choice(names).format(one)
            # print(disease["name"])
            disease["num"] = 0
            for i in range(0, len(girl_df["ID"])):
                if one in girl_df["EXAM_SUMMARY"][i]:
                    disease["num"] = disease["num"] + 1
            # 找出男性的人数
            boy_diseases = []
            boy_disease = {}
            boy_disease["name"] = "boy(" + one + ").man"
            boy_disease["size"] = 100
            boy_disease["num"] = 0
            for i in range(0, len(boy_df["ID"])):
                if one in boy_df["EXAM_SUMMARY"][i]:
                    boy_disease["num"] = boy_disease["num"] + 1
            boy_diseases.append(boy_disease)
            disease["children"] = boy_diseases
            the_names = []
            for name in names:
                name = name.replace("{", "")
                name = name.replace("}", "")
                the_names.append(name)
            if disease["name"] not in the_names:
                diseases.append(disease)
        month["children"] = diseases
        months.append(month)
    root["children"] = months
    # print(root)
    return root

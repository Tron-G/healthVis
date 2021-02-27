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
# @app.route('/radar_map/<season>/')
def radar_map(season):
    df = pd.read_csv("./files/exam.csv")
    the_season = ["spring", "summer", "fall", "winter"]
    all = ["日照市岚山区人民医院", "日照市人民医院", "日照市中医医院", "五莲县人民医院"]
    hospitals = {}
    for one_season in the_season:
        if season == one_season:
            df = df[(df["SEASON"] == season)]
            df = df.reset_index(drop=True)
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
    #top的数量
    n = 15
    top = []
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
                        for i in range(0, n):
                            max = {"keyword": "", "value": 0}
                            for keyword in keywords:
                                if keyword['value'] > max['value']:
                                    max['keyword'] = keyword['keyword']
                                    max['value'] = keyword['value']
                            top.append(max)
                            for keyword in keywords:
                                if keyword['keyword'] == max['keyword']:
                                    keyword['value'] = 0
                        the_hospital["hospital"] = hospital
                        # print(top)
                        # 将top的疾病赋予人数和建议
                        for one in top:
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
                                    # print(advices[advice])
                            disease[one["keyword"]] = info
                            diseases.append(disease)
                        the_hospital["disease"] = diseases
                        # print(the_hospital)
                        return the_hospital
                # 在不选择医院的情况下将进行
                for word in words:
                    keyword = {"keyword": word, "value": 0}
                    for i in range(0, len(df["ID"])):
                        if word in df["EXAM_SUMMARY"][i]:
                            keyword['value'] = keyword['value'] + 1
                    keywords.append(keyword)
                for i in range(0, n):
                    max = {"keyword": "", "value": 0}
                    for keyword in keywords:
                        if keyword['value'] > max['value']:
                            max['keyword'] = keyword['keyword']
                            max['value'] = keyword['value']
                    top.append(max)
                    for keyword in keywords:
                        if keyword['keyword'] == max['keyword']:
                            keyword['value'] = 0
                the_hospital["hospital"] = hospital
                # print(top)
                for one in top:
                    disease = {}
                    info = {}
                    info["total"] = one["value"]
                    with open("./files/advice.json", "r", encoding="utf-8") as json_file:
                        advices = json_file.read()
                        advices = json.loads(advices)
                    for advice in advices.keys():
                        if one["keyword"] == advice:
                            info["advice"] = advices[advice]
                            # print(advices[advice])
                    disease[one["keyword"]] = info
                    diseases.append(disease)
                the_hospital["disease"] = diseases
                # print(the_hospital)
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
                for i in range(0, n):
                    max = {"keyword": "", "value": 0}
                    for keyword in keywords:
                        if keyword['value'] > max['value']:
                            max['keyword'] = keyword['keyword']
                            max['value'] = keyword['value']
                    top.append(max)
                    for keyword in keywords:
                        if keyword['keyword'] == max['keyword']:
                            keyword['value'] = 0
                the_hospital["hospital"] = hospital
                # print(top)
                # 将top的疾病赋予人数和建议
                for one in top:
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
                            # print(advices[advice])
                    disease[one["keyword"]] = info
                    diseases.append(disease)
                the_hospital["disease"] = diseases
                # print(the_hospital)
                return the_hospital
        # 在不选择季节和医院的情况下将进行
        for word in words:
            keyword = {"keyword": word, "value": 0}
            for i in range(0, len(df["ID"])):
                if word in df["EXAM_SUMMARY"][i]:
                    keyword['value'] = keyword['value'] + 1
            keywords.append(keyword)
        for i in range(0, n):
            max = {"keyword": "", "value": 0}
            for keyword in keywords:
                if keyword['value'] > max['value']:
                    max['keyword'] = keyword['keyword']
                    max['value'] = keyword['value']
            top.append(max)
            for keyword in keywords:
                if keyword['keyword'] == max['keyword']:
                    keyword['value'] = 0
        the_hospital["hospital"] = hospital
        outstr = ''
        # print(top)
        for one in top:
            disease = {}
            info = {}
            info["total"] = one["value"]
            with open("./files/advice.json", "r", encoding="utf-8") as json_file:
                advices = json_file.read()
                advices = json.loads(advices)
            for advice in advices.keys():
                if one["keyword"] == advice:
                    info["advice"] = advices[advice]
                    # print(advices[advice])
            disease[one["keyword"]] = info
            diseases.append(disease)
        the_hospital["disease"] = diseases
        # print(the_hospital)
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
# 旭日图数据
# ******************************************************************************************
def sunburst_data(hospital):
    df = pd.read_csv("./files/report.csv")
    the_hospitals = ["日照市岚山区人民医院", "日照市人民医院", "日照市中医医院", "五莲县人民医院"]
    the_month = ["19-Jan", "19-Feb", "19-Mar", "19-Apr", "19-May", "19-Jun", "19-Jul", "19-Aug",
                 "19-Sep", "19-Oct", "19-Nov", "19-Dec"]
    English_month = ["January.January", "February.February", "March.March", "April.April", "May.May", "June.June",
                     "July.July", "August.August", "September.September", "October.October", "November.November",
                     "December.December"]
    names = ["girl({}).January", "girl({}).February", "girl({}).March", "girl({}).April", "girl({}).May",
             "girl({}).June", "girl({}).July", "girl({}).August", "girl({}).September", "girl({}).October",
             "girl({}).November", "girl({}).December", "girl({}).wonmen"]
    root = {}
    root["name"] = "root"
    # top的数量
    n = 15
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
                top = []
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
                    top.append(max["keyword"])
                    for keyword in keywords:
                        if keyword['keyword'] == max['keyword']:
                            keyword['value'] = 0
                # 找出top20疾病女性和男性的人数
                girl_df = one_month_df[one_month_df["SEX_CODE"] == "2"]
                girl_df = girl_df.reset_index(drop=True)
                boy_df = one_month_df[one_month_df["SEX_CODE"] == "1"]
                boy_df = boy_df.reset_index(drop=True)
                for one in top:
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
        top = []
        month = {}
        month["name"] = English_month[i]
        month["num"] = len(df["ID"])
        diseases = []
        # 找出top的疾病
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
            top.append(max["keyword"])
            for keyword in keywords:
                if keyword['keyword'] == max['keyword']:
                    keyword['value'] = 0
        # 找出top疾病女性和男性的人数
        girl_df = one_month_df[one_month_df["SEX_CODE"] == "2"]
        girl_df = girl_df.reset_index(drop=True)
        boy_df = one_month_df[one_month_df["SEX_CODE"] == "1"]
        boy_df = boy_df.reset_index(drop=True)
        for one in top:
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


# ******************************************************************************************
# 加载地图静态数据
# ******************************************************************************************
def load_static_data(data_name):
    if data_name == "GDP":
        with open("./files/category_files/gdpData.json", encoding='UTF-8') as f:
            data = json.load(f)
    elif data_name == "health_center":
        # 卫生院
        with open("./files/category_files/health_center_geo.json", encoding='GBK') as f:
            data = json.load(f)
    elif data_name == "pollution_company":
        # 污染企业
        with open("./files/category_files/pollution_company_geo.json", encoding='GBK') as f:
            data = json.load(f)
    elif data_name == "restaurant":
        # 热门餐饮
        with open("./files/category_files/restaurant_geo.json", encoding='GBK') as f:
            data = json.load(f)
    elif data_name == "teacher":
        # 学校数据
        with open("./files/category_files/school_geo.json", encoding='GBK') as f:
            data = json.load(f)
    elif data_name == "police":
        # 公安局
        with open("./files/category_files/police_geo.json", encoding='GBK') as f:
            data = json.load(f)
    elif data_name == "special":
        # 特种职业
        with open("./files/category_files/special_geo.json", encoding='GBK') as f:
            data = json.load(f)
    elif data_name == "worker":
        # 普工
        with open("./files/category_files/normal_company_geo.json", encoding='GBK') as f:
            data = json.load(f)
    elif data_name == "iron":
        # 钢铁企业
        with open("./files/category_files/iron_geo.json", encoding='GBK') as f:
            data = json.load(f)
    elif data_name == "sunburst":
        # 旭日图数据
        with open("./files/sunburst-data.json", encoding='UTF-8') as f:
            data = json.load(f)
    elif data_name == "disease-detail":
        # 疾病表
        with open("./files/disease-details.json", encoding='UTF-8') as f:
            data = json.load(f)
    elif data_name == "disease_rules":
        # 疾病图谱
        with open("./files/disease_rules.json", encoding='GBK') as f:
            data = json.load(f)
    elif data_name == "disease-data":
        # 本地储存一整年的所有医院的高发疾病
        with open("./files/disease-data.json", encoding='UTF-8') as f:
            data = json.load(f)
    return data


# ******************************************************************************************
# 返回指定疾病和月份的年龄及性别分布数据，参数disease_name为指定的疾病； 参数month的值为1到12,值为0就返回一整年的数据
# ******************************************************************************************
def get_disease_age(disease_name, month):
    df = pd.read_csv("./files/report.csv")
    the_month = ["all", "19-Jan", "19-Feb", "19-Mar", "19-Apr", "19-May", "19-Jun", "19-Jul", "19-Aug",
                 "19-Sep", "19-Oct", "19-Nov", "19-Dec"]
    ages = {
        "disease_name": "",
        "0-10": [0, 0],
        "10-20": [0, 0],
        "20-30": [0, 0],
        "30-40": [0, 0],
        "40-50": [0, 0],
        "50-60": [0, 0],
        "60-70": [0, 0],
        "70-80": [0, 0],
        "80-90": [0, 0],
        "90-100": [0, 0]
    }
    month = int(month)
    ages["disease_name"] = disease_name
    # 当月份参数不为0时
    if the_month[month] != "all":
        df = df[(df["SUMMARIZE_TIME"] == the_month[month])]
        df = df.reset_index(drop=True)
        # print(df)
        for i in range(0, len(df["HEALTH_EXAM_NO"])):
            if disease_name in df["EXAM_SUMMARY"][i]:
                age = df["AGE"][i]
                if df["SEX_CODE"][i] != "N":
                    df["SEX_CODE"][i] = int(df["SEX_CODE"][i])
                    sex_code = df["SEX_CODE"][i] - 1
                    if age <= 10:
                        ages["0-10"][sex_code] = ages["0-10"][sex_code] + 1
                    if age > 10 and age <= 20:
                        ages["10-20"][sex_code] = ages["10-20"][sex_code] + 1
                    if age > 20 and age <= 30:
                        ages["20-30"][sex_code] = ages["20-30"][sex_code] + 1
                    if age > 30 and age <= 40:
                        ages["30-40"][sex_code] = ages["30-40"][sex_code] + 1
                    if age > 40 and age <= 50:
                        ages["40-50"][sex_code] = ages["40-50"][sex_code] + 1
                    if age > 50 and age <= 60:
                        ages["50-60"][sex_code] = ages["50-60"][sex_code] + 1
                    if age > 60 and age <= 70:
                        ages["60-70"][sex_code] = ages["60-70"][sex_code] + 1
                    if age > 70 and age <= 80:
                        ages["70-80"][sex_code] = ages["70-80"][sex_code] + 1
                    if age > 80 and age <= 90:
                        ages["80-90"][sex_code] = ages["80-90"][sex_code] + 1
                    if age > 90 and age <= 100:
                        ages["90-100"][sex_code] = ages["90-100"][sex_code] + 1
        # print(ages)
        return ages
    #当月份参数为0时
    for i in range(0, len(df["HEALTH_EXAM_NO"])):
        if disease_name in df["EXAM_SUMMARY"][i]:
            age = df["AGE"][i]
            if df["SEX_CODE"][i] != "N":
                df["SEX_CODE"][i] = int(df["SEX_CODE"][i])
                sex_code = df["SEX_CODE"][i] - 1
                if age <= 10:
                    ages["0-10"][sex_code] = ages["0-10"][sex_code] + 1
                if age > 10 and age <= 20:
                    ages["10-20"][sex_code] = ages["10-20"][sex_code] + 1
                if age > 20 and age <= 30:
                    ages["20-30"][sex_code] = ages["20-30"][sex_code] + 1
                if age > 30 and age <= 40:
                    ages["30-40"][sex_code] = ages["30-40"][sex_code] + 1
                if age > 40 and age <= 50:
                    ages["40-50"][sex_code] = ages["40-50"][sex_code] + 1
                if age > 50 and age <= 60:
                    ages["50-60"][sex_code] = ages["50-60"][sex_code] + 1
                if age > 60 and age <= 70:
                    ages["60-70"][sex_code] = ages["60-70"][sex_code] + 1
                if age > 70 and age <= 80:
                    ages["70-80"][sex_code] = ages["70-80"][sex_code] + 1
                if age > 80 and age <= 90:
                    ages["80-90"][sex_code] = ages["80-90"][sex_code] + 1
                if age > 90 and age <= 100:
                    ages["90-100"][sex_code] = ages["90-100"][sex_code] + 1
    # print(ages)
    return ages


# ******************************************************************************************
# 返回指定病人HEALTH_EXAM_NO的疾病列表，没有就返回空数组, 参数exam_id的值为report.csv表中的HEALTH_EXAM_NO列的数据
# ******************************************************************************************
def get_patient_disease(exam_id):
    df = pd.read_csv("./files/report.csv")
    with open("./files/myword.txt", "r", encoding='UTF-8') as file:
        words = file.readlines()
        for i in range(0, len(words)):
            words[i] = words[i].replace("\n", "")
    patient = {}
    patient["exam_id"] = exam_id
    diseases = []
    col = df.iloc[:,4]
    # print(col.values)
    if exam_id not in col.values:
        patient["sex"] = ""
        patient["disease_list"] = diseases
        return patient
    df = df[(df["HEALTH_EXAM_NO"] == exam_id)]
    df = df.reset_index(drop=True)
    patient["sex"] = df["SEX_CODE"][0]
    for word in words:
        if word in df["EXAM_SUMMARY"][0]:
            diseases.append(word)
    patient["disease_list"] = diseases
    return patient


# ******************************************************************************************
# 返回指定月份的前20高发疾病以及疾病的男女人数数据,参数month的值为1到12,值为0就返回一整年的数据
# ******************************************************************************************
def get_topdisease_sex(month):
    df = pd.read_csv("./files/report.csv")
    with open("./files/myword.txt","r",encoding='UTF-8') as file:
        words = file.readlines()
        for i in range(0,len(words)):
            words[i] = words[i].replace("\n","")
    #topn
    n = 20
    top = []
    month = int(month)
    keywords = []
    diseases = {}
    the_month = ["all", "19-Jan", "19-Feb", "19-Mar", "19-Apr", "19-May", "19-Jun", "19-Jul", "19-Aug",
                 "19-Sep", "19-Oct", "19-Nov", "19-Dec"]
    #当参数不为0时
    if the_month[month] != "all":
        #筛选出该月的数据
        df = df[(df["SUMMARIZE_TIME"] == the_month[month])]
        df = df.reset_index(drop=True)
        #找出top20
        for word in words:
            keyword = {"keyword": word, "value": 0}
            for i in range(0, len(df["ID"])):
                if word in df["EXAM_SUMMARY"][i]:
                    keyword['value'] = keyword['value'] + 1
            keywords.append(keyword)
        for i in range(0, n):
            max = {"keyword": "", "value": 0}
            for keyword in keywords:
                if keyword['value'] > max['value']:
                    max['keyword'] = keyword['keyword']
                    max['value'] = keyword['value']
            if max['keyword']!= "":
                top.append(max)
            for keyword in keywords:
                if keyword['keyword'] == max['keyword']:
                    keyword['value'] = 0
        #找出男女的人数
        # print(top)
        girl_df = df[df["SEX_CODE"] == "2"]
        girl_df = girl_df.reset_index(drop=True)
        boy_df = df[df["SEX_CODE"] == "1"]
        boy_df = boy_df.reset_index(drop=True)
        for one in top:
            girl = 0
            boy = 0
            num = []
            one = one["keyword"]
            for i in range(0, len(girl_df["ID"])):
                if one in girl_df["EXAM_SUMMARY"][i]:
                    girl = girl + 1
            for i in range(0, len(boy_df["ID"])):
                if one in boy_df["EXAM_SUMMARY"][i]:
                    boy = boy + 1
            num.append(boy)
            num.append(girl)
            diseases[one] = num
        return diseases
    #当输入的参数为0时
    for word in words:
        keyword = {"keyword": word, "value": 0}
        for i in range(0, len(df["ID"])):
            if word in df["EXAM_SUMMARY"][i]:
                keyword['value'] = keyword['value'] + 1
        keywords.append(keyword)
    for i in range(0, n):
        max = {"keyword": "", "value": 0}
        for keyword in keywords:
            if keyword['value'] > max['value']:
                max['keyword'] = keyword['keyword']
                max['value'] = keyword['value']
        if max['keyword'] != "":
            top.append(max)
        for keyword in keywords:
            if keyword['keyword'] == max['keyword']:
                keyword['value'] = 0
    girl_df = df[df["SEX_CODE"] == "2"]
    girl_df = girl_df.reset_index(drop=True)
    boy_df = df[df["SEX_CODE"] == "1"]
    boy_df = boy_df.reset_index(drop=True)
    for one in top:
        girl = 0
        boy = 0
        num = []
        one = one["keyword"]
        for i in range(0, len(girl_df["ID"])):
            if one in girl_df["EXAM_SUMMARY"][i]:
                girl = girl + 1
        for i in range(0, len(boy_df["ID"])):
            if one in boy_df["EXAM_SUMMARY"][i]:
                boy = boy + 1
        num.append(boy)
        num.append(girl)
        diseases[one] = num
    return diseases


# -*- codeing = utf-8 -*-
# @Time: 2021/1/4 16:36
# @Author : 付超
# @File : .py
# @Software : PyCharm
import random
import copy
from flask import Flask
import pandas as pd
import json
import numpy as np

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
            df = df[(df["SEASON"] == season)]
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
def top10(season, hospital, food_disease=False):
    df = pd.read_csv("./files/report.csv")
    the_hospitals = ["日照市岚山区人民医院", "日照市人民医院", "日照市中医医院", "五莲县人民医院"]
    the_season = ["spring", "summer", "fall", "winter"]
    the_hospital = {}
    diseases = []
    keywords = []
    # top的数量
    n = 15
    top = []
    # 读取全部疾病，放入words列表中
    with open("./files/disease_data/myword.txt", "r", encoding='UTF-8') as file:
        words = file.readlines()
        for i in range(0, len(words)):
            words[i] = words[i].replace("\n", "")

        if food_disease == True:
            with open("files/food_disease/disease.json", "r", encoding="UTF-8") as file:
                infos = json.load(file)
            disease_names = []
            for info in infos:
                disease_names.append(info["disease_name"])
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
                            new_top = []
                            for i in range(len(top)):
                                if top[i]["keyword"] in disease_names:
                                    new_top.append(top[i])
                            top = new_top
                            # 将top的疾病赋予人数和建议
                            for one in top:
                                disease = {}
                                info = {}
                                # 将人数加入info中
                                info["total"] = one["value"]
                                # 读取已经处理好的疾病和建议的json
                                with open("./files/disease_data/advice.json", "r", encoding="utf-8") as json_file:
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
                    new_top = []
                    for i in range(len(top)):
                        if top[i]["keyword"] in disease_names:
                            new_top.append(top[i])
                    top = new_top
                    for one in top:
                        disease = {}
                        info = {}
                        info["total"] = one["value"]
                        with open("./files/disease_data/advice.json", "r", encoding="utf-8") as json_file:
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
                    new_top = []
                    for i in range(len(top)):
                        if top[i]["keyword"] in disease_names:
                            new_top.append(top[i])
                    top = new_top
                    # 将top的疾病赋予人数和建议
                    for one in top:
                        disease = {}
                        info = {}
                        # 将人数加入info中
                        info["total"] = one["value"]
                        # 读取已经处理好的疾病和建议的json
                        with open("./files/disease_data/advice.json", "r", encoding="utf-8") as json_file:
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
            new_top = []
            for i in range(len(top)):
                if top[i]["keyword"] in disease_names:
                    new_top.append(top[i])
            top = new_top
            # print(top)

            for one in top:
                disease = {}
                info = {}
                info["total"] = one["value"]
                with open("./files/disease_data/advice.json", "r", encoding="utf-8") as json_file:
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
    with open("./files/disease_data/myword.txt", "r", encoding='UTF-8') as file:
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
        with open("./files/disease_data/sunburst-data.json", encoding='UTF-8') as f:
            data = json.load(f)
    elif data_name == "disease-detail":
        # 疾病表
        with open("./files/disease_data/disease-details.json", encoding='UTF-8') as f:
            data = json.load(f)
    elif data_name == "disease_rules":
        # 疾病图谱
        with open("./files/disease_data/disease_rules.json", encoding='GBK') as f:
            data = json.load(f)
    elif data_name == "disease-hospital":
        # 本地储存一整年的所有医院的高发疾病
        with open("./files/disease_data/disease-hospital.json", encoding='UTF-8') as f:
            data = json.load(f)
    elif data_name == "disease-hospital-food":
        # 本地储存一整年的所有医院的高发疾病
        with open("./files/disease_data/disease-hospital-food.json", encoding='UTF-8') as f:
            data = json.load(f)
    elif data_name == "disease_knowledge":
        # 疾病详细知识
        with open("./files/disease_data/disease_knowledge.json", encoding='UTF-8') as f:
            data = json.load(f)
    elif data_name == "disease_month":
        # 本地缓存的旭日图选择的月份数据
        with open("./files/disease_data/disease_month.json", encoding='UTF-8') as f:
            data = json.load(f)
    elif data_name == "disease_distance":
        # 本地缓存的疾病距离矩阵
        with open("./files/disease_data/disease_value.json", encoding='UTF-8') as f:
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
    # 当月份参数为0时
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
    with open("./files/disease_data/myword.txt", "r", encoding='UTF-8') as file:
        words = file.readlines()
        for i in range(0, len(words)):
            words[i] = words[i].replace("\n", "")
    patient = {}
    patient["exam_id"] = exam_id
    diseases = []
    col = df.iloc[:, 4]
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
def get_topdisease_sex(month, hospital="all", top_num=20):
    df = pd.read_csv("./files/report.csv")
    with open("./files/disease_data/myword.txt", "r", encoding='UTF-8') as file:
        words = file.readlines()
        for i in range(0, len(words)):
            words[i] = words[i].replace("\n", "")
    # topn
    n = top_num
    top = []
    month = int(month)
    keywords = []
    diseases = {}
    the_month = ["all", "19-Jan", "19-Feb", "19-Mar", "19-Apr", "19-May", "19-Jun", "19-Jul", "19-Aug",
                 "19-Sep", "19-Oct", "19-Nov", "19-Dec"]
    the_hospitals = ["日照市岚山区人民医院", "日照市人民医院", "日照市中医医院", "五莲县人民医院"]
    # 判断是否在为四个医院之一
    for one_hospital in the_hospitals:
        if hospital == one_hospital:
            df = df[(df["ORG_NAME"] == hospital)]
            df = df.reset_index(drop=True)
        # 当参数不为0时
        if the_month[month] != "all":
            # 筛选出该月的数据
            df = df[(df["SUMMARIZE_TIME"] == the_month[month])]
            df = df.reset_index(drop=True)
            # 找出top20
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
            # 找出男女的人数
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
        # 当输入的参数为0时
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
    # 当参数不为0时
    if the_month[month] != "all":
        # 筛选出该月的数据
        df = df[(df["SUMMARIZE_TIME"] == the_month[month])]
        df = df.reset_index(drop=True)
        # 找出top20
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
        # 找出男女的人数
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
    # 当输入的参数为0时
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


# ******************************************************************************************
# 基于用户协同过滤推荐算法的返回指定患者的相似用户的推荐疾病
# ******************************************************************************************
def get_recommend_disease(exam_id):
    # 最相似个数
    similarity_nums = 5

    # 患者-疾病表
    with open("./files/disease_data/patient_disease.json") as f:
        patient_disease = json.load(f, encoding='gbk')
    # 疾病-病人倒排表
    with open("./files/disease_data/disease_patient.json") as f:
        disease_patient = json.load(f, encoding='gbk')
    # 用户相似度矩阵
    with open("./files/disease_data/patient_matrix_final.json") as f:
        patient_matrix = json.load(f, encoding='gbk')
    # 疾病统计频率作为评分
    with open("./files/disease_data/disease_score.json") as f:
        disease_score = json.load(f, encoding='gbk')

    # 疾病表
    disease_list = []
    # 患者列表
    patient_list = []
    for each in patient_disease:
        if each["id"] not in patient_list:
            patient_list.append(each["id"])
        for i in each["disease"]:
            if i not in disease_list:
                disease_list.append(i)

    usr_disease = patient_disease[patient_list.index(exam_id)]["disease"]
    usr_index = patient_list.index(exam_id)

    recommend_disease = {}
    similarity_usr = []

    # similaritys = []
    # 寻找k个最相似用户
    temp_list = copy.copy(patient_matrix[usr_index])
    for i in range(similarity_nums):
        similarity_usr.append(patient_list[temp_list.index(max(temp_list))])
        # similaritys.append(temp_list[temp_list.index(max(temp_list))])
        temp_list[temp_list.index(max(temp_list))] = 0

    # 用户相似度*评分 = 推荐疾病的总分
    for i in similarity_usr:
        for j in patient_disease[patient_list.index(i)]["disease"]:
            if j not in usr_disease:
                recommend_disease[j] = disease_score[j] * patient_matrix[usr_index][patient_list.index(i)]

    # 按照评分降序排序
    recommend_disease = sorted(recommend_disease.items(), key=lambda kv: (kv[1], kv[0]), reverse=True)
    return recommend_disease


# ******************************************************************************************
# 生成具体疾病信息表,type:返回的数据的种类，0表示返回当月最高发疾病的信息用于初始化信息界面，1表示返回具体疾病数据
# ******************************************************************************************
def set_disease_info_data(disease_name, type=0, month=0):
    month = str(month)
    disease_detail = load_static_data("disease-detail")
    disease_knowledge = load_static_data("disease_knowledge")

    if type == 0:
        disease_list = {"2": "牙结石", "3": "椎间盘突出", "5": "总胆固醇(CHOL)偏高", "6": "牙结石",
                        "7": "高密度脂蛋白(HDL-C)偏低", "8": "窦性心动过缓", "9": "高密度脂蛋白(HDL-C)偏低",
                        "10": "窦性心动过缓", "11": "牙结石"}
        disease_name = disease_list[month]

    data = {"name": disease_name, "advice": disease_detail[disease_name]["advice"]}
    for i in disease_knowledge:
        if i["name"] == disease_name:
            for j in i["pithy"]:
                data[j] = i["pithy"][j]
            for k in i["detail"]:
                data[k] = i["detail"][k]
    return data


# ******************************************************************************************
# 生成在疾病关联图中点击的疾病列表详细数据
# ******************************************************************************************
def get_disease_list_info(disease_list):
    data = []
    for each in disease_list:
        data.append(set_disease_info_data(each, 1))
    return data


# ******************************************************************************************
# bfs遍历图算法，返回路径上的疾病名称
# ******************************************************************************************
def BFS(graph, start):  # graph图  s指的是开始结点
    # 需要一个队列
    if start not in graph:
        return []
    queue = [start]
    temp = []
    seen = set()  # 看是否访问过该结点
    seen.add(start)
    while len(queue) > 0:
        vertex = queue.pop(0)  # 保存第一结点，并弹出，方便把他下面的子节点接入
        nodes = graph[vertex]  # 子节点的数组
        # p = k[i] + 1
        for w in nodes:
            if w not in seen:  # 判断是否访问过，使用一个数组
                queue.append(w)
                seen.add(w)
        temp.append(vertex)
    return temp


# ******************************************************************************************
# 根据搜索的疾病名称生成单分图数据
# ******************************************************************************************
def get_single_graph_data(disease_name, parameter1=0.30, parameter2=0.09, parameter3=0.09):
    # with open("./files/disease_data/single_graph.json", encoding='UTF-8') as f:
    #     data = json.load(f)

    data = set_single_map_data(parameter1, parameter2, parameter3)
    dis_list = BFS(data, disease_name)
    res = {}
    for i in dis_list:
        for each in data:
            if each == i:
                res[each] = data[each]
    node = []
    relation = []
    out_data = {}
    for i in dis_list:
        node.append({"name": i, "draggable": "true"})
    out_data["node"] = node
    for i in res:
        for j in res[i]:
            temp = {}
            temp["source"] = i
            temp["target"] = j
            temp["lineStyle"] = {"normal": {"width": res[i][j] * 10}}
            relation.append(temp)
    out_data["relation"] = relation
    print(out_data)
    return out_data


# ******************************************************************************************
# 根据餐饮种类返回关联疾病
# ******************************************************************************************
def get_food_disease_data(restaurant_type):
    f = open('./files/food_disease/food.json', 'rb')
    f1 = open('./files/food_disease/disease.json', 'rb')

    content1 = f1.read()
    content = f.read()
    a = json.loads(content)
    b = json.loads(content1)

    restaurant_name = ""
    alcohol_food = []
    oli_food = []
    salinity_food = []
    sugar_food = []
    smog_food = []
    hot_food = []
    purine_food = []

    disease_name = ""
    alcohol_disease = []
    oli_disease = []
    salinity_disease = []
    sugar_disease = []
    smog_disease = []
    hot_disease = []
    purine_disease = []

    # 餐馆的菜品数组
    for i in a:
        temp1 = (i["Alcohol"])
        temp2 = (i["Oli"])
        temp3 = (i["Salinity"])
        temp4 = (i["Sugar"])
        temp5 = (i["Smog"])
        temp6 = (i["Hot"])
        temp7 = (i["Purine"])
        temp8 = (i["restaurant_name"])

        list1 = list(temp1)
        list2 = list(temp2)
        list3 = list(temp3)
        list4 = list(temp4)
        list5 = list(temp5)
        list6 = list(temp6)
        list7 = list(temp7)

        restaurant_name = str(restaurant_name) + temp8 + " "
        alcohol_food = alcohol_food + list1
        oli_food = oli_food + list2
        salinity_food += list3
        sugar_food += list4
        smog_food += list5
        hot_food += list6
        purine_food += list7
    restaurant_Array = restaurant_name.split(" ")

    # 疾病的数组
    for i in b:
        temp1 = (i["Alcohol"])
        temp2 = (i["Oli"])
        temp3 = (i["Salinity"])
        temp4 = (i["Sugar"])
        temp5 = (i["Smog"])
        temp6 = (i["Hot"])
        temp7 = (i["Purine"])
        temp8 = (i["disease_name"])

        list1 = list(temp1)
        list2 = list(temp2)
        list3 = list(temp3)
        list4 = list(temp4)
        list5 = list(temp5)
        list6 = list(temp6)
        list7 = list(temp7)

        disease_name = str(disease_name) + temp8 + " "

        alcohol_disease += list1
        oli_disease += list2
        salinity_disease += list3
        sugar_disease += list4
        smog_disease += list5
        hot_disease += list6
        purine_disease += list7
    disease_Array = disease_name.split(" ")

    canshu = []
    numCollect = []
    # 替换变量
    tempNum = []
    tempDisease = []
    # 疾病的名称
    diseaseIndex = []
    diseaEnd = []

    # 计算关联度
    for i in range(len(restaurant_Array) - 1):
        temp9 = 10
        # print("\n")
        # print("吃" + restaurant_Array[i])
        diseaseIndex.clear()
        canshu.clear()
        for j in range(len(disease_Array) - 1):
            min = temp9
            # print(min)
            aa = int(alcohol_food[i]) - int(alcohol_disease[j])
            bb = int(oli_food[i]) - int(oli_disease[j])
            cc = int(salinity_food[i]) - int(salinity_disease[j])
            dd = int(sugar_food[i]) - int(sugar_disease[j])
            ee = int(smog_food[i]) - int(smog_disease[j])
            ff = int(hot_food[i]) - int(hot_disease[j])
            gg = int(purine_food[i]) - int(purine_disease[j])
            count = [aa, bb, cc, dd, ee, ff, gg]

            # 计数器
            NUMBER = 0
            if (int(alcohol_food[i]) == int(alcohol_disease[j]) == 1):
                del count[0]
                NUMBER = NUMBER + 1
            if (int(oli_food[i]) == int(oli_disease[j]) == 1):
                del count[1 - NUMBER]
                NUMBER = NUMBER + 1
            if (int(salinity_food[i]) == int(salinity_disease[j]) == 1):
                del count[2 - NUMBER]
                NUMBER = NUMBER + 1

            if (int(sugar_food[i]) == int(sugar_disease[j]) == 1):
                del count[3 - NUMBER]
                NUMBER = NUMBER + 1

            if (int(smog_food[i]) == int(smog_disease[j]) == 1):
                del count[4 - NUMBER]
                NUMBER = NUMBER + 1

            if (int(hot_food[i]) == int(hot_disease[j]) == 1):
                del count[5 - NUMBER]
                NUMBER = NUMBER + 1

            if (int(purine_food[i]) == int(purine_disease[j]) == 1):
                del count[6 - NUMBER]
                NUMBER = NUMBER + 1

            # count.append(aa)
            # print(count)
            result = np.var(count)
            # print(result)
            if (result < temp9):
                index = j
                temp9 = result
            if (result < 3):
                result = 1 - result / 3

                # print(result)
                sum = result
                indexF = j
                canshu.append(result)

                diseaseIndex.append(disease_Array[indexF])
                # print(disease_Array[indexF])

        # print(disease_Array)
        diseaseIndex.append(disease_Array[indexF])

        tempDisease = [k for k in diseaseIndex]

        tempNum = [k for k in canshu]

        diseaEnd.append(tempDisease)
        # print(diseaEnd)
        numCollect.append(tempNum)

    # 解决bug
    for i in range(len(diseaEnd)):
        del diseaEnd[i][len(diseaEnd[i]) - 1]

    # 给定输出的疾病系数集
    out_num = []
    # 给定输出的病名称
    out_disease = []
    res = {}
    for i in range(len(restaurant_type)):
        for j in range(len(restaurant_Array) - 1):
            if restaurant_type[i] == restaurant_Array[j]:
                # 输出的病
                k = 0
                for each in diseaEnd[j]:
                    if each in res:
                        if numCollect[j][k] > res[each]:
                            res[each] = numCollect[j][k]
                    else:
                        res[each] = numCollect[j][k]
                    k += 1
                out_num.append(numCollect[j])

                # 该病的系数
                out_disease.append(diseaEnd[j])

    print(out_num)
    print(out_disease)
    # print(res)
    res = sorted(res.items(), key=lambda kv: (kv[1], kv[0]), reverse=True)
    return res


# ******************************************************************************************
# 读取本地缓存的所有季节所有医院的高发疾病表
# ******************************************************************************************
def get_season_hospital_data(season, hospital, is_food=False):
    if is_food:
        data = load_static_data("disease-hospital-food")
    else:
        data = load_static_data("disease-hospital")
    out_data = {}
    for each in data:
        if each["season"] == season:
            for item in each["data"]:
                if item["hospital"] == hospital:
                    out_data = item
    return out_data


# ******************************************************************************************
# 读取本地缓存的所有季节所有医院的高发疾病表
# ******************************************************************************************
def get_sunburst_month_data(month):
    data = load_static_data("disease_month")
    return data[str(month)]


# ******************************************************************************************
# 动态计算单分图
# 参数：词权重，症状权重，科室权重，治疗权重，检查权重，诊断权重，疾病权重
# ******************************************************************************************
def set_single_map_data(word_value=0.30, symptom_value=0.09, departments_value=0.09, treat_value=0.16,
                        inspect_value=0.03, check_value=0.18, cause_value=0.15):
    diseases = load_static_data("disease_distance")
    graphs = {}
    for disease_name_1 in diseases.keys():
        graph = {}
        for disease_name_2 in diseases[disease_name_1].keys():
            value = 0
            for i in range(len(diseases[disease_name_1][disease_name_2])):
                if i == 0:
                    value = value + diseases[disease_name_1][disease_name_2][i] * word_value
                if i == 1:
                    value = value + diseases[disease_name_1][disease_name_2][i] * symptom_value
                if i == 2:
                    value = value + diseases[disease_name_1][disease_name_2][i] * departments_value
                if i == 3:
                    value = value + diseases[disease_name_1][disease_name_2][i] * treat_value
                if i == 4:
                    value = value + diseases[disease_name_1][disease_name_2][i] * inspect_value
                if i == 5:
                    value = value + diseases[disease_name_1][disease_name_2][i] * check_value
                if i == 6:
                    value = value + diseases[disease_name_1][disease_name_2][i] * cause_value
            if value > 0.17:
                graph[disease_name_2] = value
        graphs[disease_name_1] = graph
    # with open(save_path,"w",encoding="utf-8") as file:
    #     json.dump(graphs,file,ensure_ascii=False)
    return graphs

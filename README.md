# HealthVis - Visual Exploration of Regional Factors of the Health of Urban Residents

本项目以某城市的市级医院公开的电子病历数据结合餐饮、工业、经济、气候等城市地域数据，通过系统呈现的高发疾病情况和饮食习惯、周边企业污染情况等，能从整体上了解该市的公共健康状况以及探索多种外界因素与城市居民健康关联模式，便于相关部门作出应对措施。

- - -

## 项目环境：

* python3.7.0 *(自行安装)*
* d3.v3.js 
* echarts
* mapbox
* jquery

项目启动：

```python3
python3 main.py 
```
浏览器中打开：
```sh
http://127.0.0.1:5000/
```


## 算法支持
* Apriori
$$ support\left ( A\Rightarrow B \right )=P\left ( A\cap B \right )  $$

$$ confidence\left ( A\Rightarrow B \right )  = P\left ( B \mid A \right )  = \frac{support\_count\left ( A\cap B \right )}{support\_count\left ( A \right ) \notag} $$

* TF-IDF
  $$ tf_{i,j} = \frac{n_{i,j}}{ {\textstyle \sum_{0}^{k}}n_{k,j} }  $$

* K-Means
  
* 二分图投影
$$     D\left ( s,t \right )=\sum_{i=1}^{m}\frac{\sum_{j=1}^{n}s_{ij}\times t_{ij}}{\sqrt{\sum_{j=1}^{n}\left ( s_{ij} \right )^2\times \sum_{j=1}^{n}\left ( t_{ij} \right )^2}}\times v_{i} $$

* 协同过滤
$$ P\left ( u,i \right ) = \sum_{v\in S\left ( u,K \right )\cap N\left ( i \right )}^{}w_{uv}\times r_{vi} $$

算法详情，及可视化视图设计等，参见论文：

[Visual Exploration of Regional Factors of the Health of Urban Residents [J]. IEEE Access, 2022.](https://ieeexplore.ieee.org/document/9721899)


## 系统展示

1. 城市健康态势，探索不同季节，不同医院的高发疾病概况等

![布局](https://raw.githubusercontent.com/ustbhuangyi/better-scroll/master/packages/vuepress-docs/docs/.vuepress/public/assets/images/schematic.png)

2. 工业经济区域因素探索


3. 地区饮食区域因素探索


4. 气候关联因素探索


5. 高发疾病时间分布特征，及疾病聚类结构


6. 关联疾病探索及疾病知识图谱


7. 病情分析及疾病预测



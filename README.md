#Animal	Snapshot

[![Build Status](https://travis-ci.org/michaelliao/openweixin.svg?branch=master)](https://travis-ci.org/michaelliao/openweixin)


## 使用方法

(2)：运行 npm install   <br/>(1)：将项目克隆到自己的本地：git clone git@github.com:RangelZZZ/animal-snapshot.git <br/>
(3)：运行 jasmine   <br/>


##需求描述

动物学家研究动物的一种行为的一种方式是将信号发射器安装到动物身上，然后追踪动物在一定区域内的活动路线，而且希望了解任意一个指定的时间上的所有动物的分布。
***
假设现在有多个动物在指定的区域内活动。为了节省存储空间，科学即并没有选择存储每一个时刻的动物分布快照，而是存储当前时刻与上一个时刻的变化，假设每一个动物的位置是由x，y两个整数坐标确定，则我们规定以下的存储格式：

***
* 第一种形式：{动物的Id} {x坐标}  {y坐标} 这种形式说明这种动物第一次出现在这个区域里。
* 第二种形式：{动物的Id}{上一个时刻x 的坐标} {上一个时刻y的坐标} {x坐标变化量} {y坐标变化量}这种形式说明该动物在之前已经位于这个区域里了，其上一个时刻的 x 和 y 坐标 用于进行校验 ，而 x 和 y 坐标的 变化为整数，正数表示增加，负数表示减少。
* 所有的数据全部存储在 historyData 字符串中。

***

例如：<br/>
eaf64eebef862108e2a322b3e3b7baea920182b5

e4e87cb2-8e9a-4749-BB6-26c59344dfee <br/>
2016/09/02  22:30:46<br/>
cat1 10 9<br/>

351055db-33e6-4f9b-bfe1-16f1ac446ac1 <br/>
2016/09/02  22:30:52 <br/>
cat1 10 9 2 -1 <br/>
cat2 2 3 <br/>

dcfa0c7a-5855-ded2-bc8x-4accae8bd155  <br/>
2016/09/02   22:31:02   <br/>
cat1 12 8 3 4 <br/>
***
请编写一个函数，其输入是上述数据字符串，和当前时刻的id，输出为字符串。例如：<br/>
* JavaScript：getSnapshot（historyData，id）<br/>
***
输入该Id代表的时刻的动物的坐标快照
生成某一时刻的所有动物的坐标快照。并将坐标按照{动物 Id} {x} {y} 的格式输出。输出按动物 Id 升序排序。

例如，针对范例历史数据，当 id 为 dcfa0c7a-5855-4ed2-bc8c-4accae8bd155 时，输出内容如下：<br/>
cat1 15 12 <br/>
cat2 2 3 <br/>
***
验证输入信息<br/>
程序应当验证输入的有效性。
* 当 historyData 的格式不符合要求时请输出

Invalid format.
* 若 historyData 数据存在问题，例如对于以下文本

e4e87cb2-8e9a-4749-BB6-26c59344dfee  <br/>
2016/09/02  22:30:46   <br/>
cat1 10 9   <br/>

351055db-33e6-4f9b-bfe1-16f1ac446ac1  <br/>
2016/09/02  22:30:52   <br/>
cat1 10 9 2 -1     <br/>
cat2  2 3       <br/>

dcfa0c7a-5855-ded2-bc8x-4accae8bd155 <br/>
2016/09/02   22:31:02   <br/>
cat1 11 8 3 4  <br/>

则输出为

conflict found at dcfa0c7a-5855-4ed2-bc8c-4accae8bd155 <br/>
如果有多于一个的错误，则只需要输出第一个错误即可。









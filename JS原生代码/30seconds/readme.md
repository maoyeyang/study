正则知识点
贪婪匹配 * + ?
^的第二种用法
[]范围匹配

函数参数
写一个函数,返回最大的两个数
[2,6,'a'] [8,4,6] [10]
[10,8]
1. Math.max 最简单的求最大值
2. ... spread 展开一个数组
3. n个数? slice方法
综合题


- args
    1. map + spread 运算符
    2. 闭包
        遍历每一项,
        取前两个 slice + n +Math.max(),
        求最大值
    map     callback
    callback    取前两个 + 求最大值 做为一个功能
    math.max.slice(n)
# 打包工具

## rollup

- tree shaking

  没用到的代码 不会被打包

## parcel

- 零配置

## webpack 4.0

production 会自动开启 tree shaking

作用域里面的代码不分析,直接打包

NODE_ENV development

## css-module

命名冲突

利用 hash 值 解决重复命名

## webpack 3.0

import(/\* webpackChunkName:'async' \*/)

magic comment 魔法注释 异步加载模块的

import Home from 'lazy!./components/Home'

用 babel-loader 检测有没有 lazy

最后替换成 魔法注释

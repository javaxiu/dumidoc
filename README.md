# 说明

用于复现 dumi api.applyPlugins 异常的问题

操作方式

1. npx @umijs/create-dumi-lib --site
2. yarn install
3. .umirc.ts 里增加   plugins: [ './mdRoute.ts' ],
4. 新建 mdRoute.ts 文件，里面贴上此代码片段 https://d.umijs.org/zh-CN/plugin#dumigetrootroute
5. npm start
---
title: 配置参考
sort: 3
---

# 配置参考

## 参数配置

| 参数名称 | 类型   | 参数说明   | 参数默认值  |  
|------|--------|------|--------|
|style  | Object  | 一键布局默认样式参数  |{'text-align':'justify','text-indent':'2em','line-height': 1.5 }   | 
|filterTags|  Array |  过滤标签，该数组中的标签，一键布局中将会被忽略 | ['table>*','img'] |  
| tagsStyle|  Object |  单独标签样式处理 | ——  | 
| clearStyle|  Array |  清除样式 ，一键布局后 ，数组中的样式将会清除掉 | ——  | 

:::tip 提示

配置优先级从低到高： style < filterTags < tagsStyle < clearStyle

:::
```js
tinymce.init({
    selector: '#tinydemo',
    plugins: "layout",
    toolbar: "layout",
    tp_layout_options: {
                style: {
                   'text-align':'justify',
                   'text-indent':'2em',
                   'line-height': 1.5
                },
                filterTags：['table>*','tbody'], //'table，'tbody','td','tr' 将会忽略掉 同时 table>*，忽略table 标签 以及所有子标签
                clearStyle: ['text-indent'],//text-indent 将会被清除掉
                tagsStyle: {
                   'table': {
                       'line-height': 3,
                       'text-align': 'center'
                   },
                  'table,tbody,tr,td': { //支持并集选择
                    'line-height': 2
                   },
                   'tr>td,table>tbody': { //支持, 精准定位 通过 ' > '
                    'line-height': 3,
                    'text-align': 'center'
                   }
               }
    }
});
```

## 如何通过外部按钮触发
 可以用通过 `execCommand('mceTpLayout')` 调用

:::tinymce
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="shortcut icon" href="https://avatars.githubusercontent.com/u/87648636?s=60&v=4" type="image/x-icon">
    <title>Tinymce-Plugin</title>
    <style>
      .open-plugin{
        width:150px;
        height: 30px;
        display: flex;
        padding: 0px 10px;
        background-color:rgb(27, 158, 234);
        border-radius:5px;
        color:white;
        font-size:0;
        text-align:center;
        cursor:pointer;
        align-content: space-around;
        flex-wrap: nowrap;
        align-items: center;
        justify-items: center;
      }
      .open-plugin img{
        display: block;
        width: 20px;
        height: 20px;
      }
      .open-plugin span{
        display: inline-block;
        height:20px;
        line-height:20px;
        vertical-align: middle;
        margin-left:10px;
        font-size:14px;
      }
    </style>
    <script src='/tinymce/tinymce.js'></script>
    <script src="/tinymce/tinymce-plugin.js"></script>
    <script src="https://unpkg.com/tinymce-plugin/langs/zh_CN.js"></script>
    <script src="https://unpkg.com/tinymce-plugin/plugins/tpLayout/plugin.min.js"></script>    
  </head>
  <body tp-page-height="298">
    <div>
      <textarea class="tinymce">
        <p>这是一个一键排版插件</p>
      </textarea>
    </div>
    <div>
      <p></p>
      <a onclick="openPlugin()" class="open-plugin"  title="点击调用触发插件" ><img  src="https://avatars.githubusercontent.com/u/87648636?s=60&v=4" alt=""><span>点击调用触发插件</span></a>
    </div>
    <script>

     tinymce.init({
        selector: 'textarea.tinymce',
        language: 'zh_CN',
        skeletonScreen: true,
        plugins: 'code tpLayout autoresize',
        toolbar: 'code tpLayout'
        });

     var openPlugin=()=>{
       tinymce.activeEditor.execCommand('mceTpLayout');
     }
    </script>
  </body>
</html>

```
:::
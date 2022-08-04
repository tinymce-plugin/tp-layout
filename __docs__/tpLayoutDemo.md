---
title: 插件demo
---

:::tinymce-vue3
```vue
<template>
<div>
 <h1>插件demo展示区域</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :init="tinymceOptions" ></tinymce-vue>
  </div>
  <div  v-html="content"></div>
</div>
</template>
<script>
import tinymce from "tinymce";
import "tinymce-plugin";
import TinymceVue from "@tinymce-plugin/tinymce-vue";
export default{
name: 'domeVue3',
components: { TinymceVue },
data(){
    return {
        content: '这是一个自动排版插件',
        tinymceOptions:{
                min_height: 300,
                max_height: 700,
                menubar: 'file edit insert view format table tools help mymenubar',
                skeletonScreen: true,
                tp_i18n_langs: true,
                 menu: {
                    mymenubar: {title: 'Extension', items: 'tpLayout tpI18n' },
                },
                base_url:'/tinymce',
                plugins: 'code tpLayout preview autoresize',
                toolbar: 'code tpLayout preview',
             
        }
    }
  }
}
</script>
```
:::

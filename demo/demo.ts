

import  "tinymce/skins/ui/oxide/skin.min.css"
import  "tinymce/skins/ui/oxide/content.min.css"
import  tinymce, { Editor } from "tinymce"
import  "tinymce-plugin"
import  "tinymce-plugin/langs/zh_CN"
import  "tinymce-plugin/langs/i18n"
import  "tinymce/themes/silver/theme"
import  "tinymce/icons/default"
import  "tinymce/plugins/code"
import  "tinymce/plugins/imagetools"
import  "tinymce/plugins/media"
import plugin from "../src/main"
//@ts-ignore
tinymcePlugin.setDev()
//@ts-ignore
  tinymce.init({
    selector: 'textarea.tinymce',
    plugins: `code  imagetools media ${plugin.opt.registryName}`,
    toolbar: `code ${plugin.opt.registryName}`,
    skin: false,
    language: 'ko',
    min_height:240,
    tp_i18n: true,
    skeletonScreen: true,
    content_css: false,
  }).then(()=>{

    // console.log(tinymce.activeEditor);
    
      tinymce.init({
        selector: 'div#mytextarea',
        menubar: 'file edit  insert view format table tools help mymenubar',
        skin: false,
        tp_i18n: true,
        // tp_i18n_langs: true,
        content_css: false,
        menu: {
            mymenubar: {title: 'Extension', items: `${plugin.opt.registryName}`+' tpI18n' },
        },
        min_height:240,
        object_resizing: 'img',
        // skeletonScreen: true,
        plugins: `code ${plugin.opt.registryName}`,
        toolbar: `code ${plugin.opt.registryName} image`,
      })
});
       //@ts-ignore
   window.openPlugin=()=>{
   tinymce.activeEditor.execCommand(`mceTp${plugin.opt.name}`);
    }

// },200)
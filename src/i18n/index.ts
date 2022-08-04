 const setupI18n = (e:any,o:pluginOpt)=>{
  // console.log(e);
  
  tinymce.util.XHR.send({
    url:   e.tp$.isDev()? '/langs/i18n.json' : e.editorManager.PluginManager.urls[o.registryName] +'/langs/i18n.json',
    async: false,
    success: function (text:any) {
      console.log(text);
      
     try {
      e.tp$.I18n.add(e.settings.language,JSON.parse(text)[e.settings.language])
     } catch (error) {
     }
    },
  })
  // e.editorManager.PluginManager.requireLangPack(o.registryName,'en,cs,pt,es,vi,fr,de,hu,nl,ja,ko,zh_CN,zh_TW')
  // tinymce.util.XHR.send({
  //   url: './tinymcep/plugins/'+o.registryName+'/langs/'+(e.settings.language||'en')+'.json',
  //   async: false,
  //   dataType: "json",
  //   success: function (text:any) {
  //    try {
  //     e.tp$.I18n.add(e.settings.language,JSON.parse(text))
  //    } catch (error) {
  //    }
  
  //         //  editor.dom.addStyle(text)
  //   },
  // })
}
export default setupI18n



import { layoutOpt } from "../api/Settings";
var layout_filterTags:any={};
var layout_filterTagsRegex:any={};
 var doAct = function (editor:any) {
  var dom = editor.dom;
  let blocks = []
  var global$1 = tinymce.util.Tools.resolve('tinymce.util.Tools');
  editor.execCommand('selectAll');
 let  layout_opt:any = layoutOpt(editor)
 for( let key in layout_opt.filterTags){layout_opt.filterTags[key].indexOf('>*')!=-1?layout_filterTagsRegex[layout_opt.filterTags[key].replace('>*','').toUpperCase()]=true :layout_filterTags[layout_opt.filterTags[key].toUpperCase()]=true;}
  layout_opt.selection = layout_opt.selection || 'p,table,tr,td,h1,h2,h3,h4,h5,h6,ul,blockquote';
  for( let key in layout_opt.tagsStyle){
    let ckeyList = key.split(',');
    layout_opt.selection += ','+key;
    for(let ckey in ckeyList)ckeyList[ckey].indexOf('>*')!=-1?layout_filterTagsRegex[ckeyList[ckey].replace('>*','').toUpperCase()]=key :layout_filterTags[ckeyList[ckey].toUpperCase()]=key;
  }
  blocks= editor.selection.getNode().querySelectorAll(layout_opt.selection)
  function _indent2$getValue( key:any, str:any ) { 
      var m = str.match( new RegExp(key + ':?(.+?)"?[;}]') );
      return m ? m[ 1 ] : false;
  }
  function filterFun(el:any,_r?:any) {
    let parentSelector = 'BODY';
    let parents = el.tagName;
    if(layout_filterTags[parents] || layout_filterTagsRegex[parents]) {
        
        !layout_opt.tagsStyle[layout_filterTags[parents]] || _r ?_r ? removeStyleFun(el,layout_opt.tagsStyle[layout_filterTags[parents]]) :'': setStyleFun(el,layout_opt.tagsStyle[layout_filterTags[parents]])
        return true;
    }
    let _p = el.parentNode;
    let _pName = _p.tagName
    while (_pName !== parentSelector) {
        let o = _p;
        parents = _pName + '>' + parents;
        if(layout_filterTags[parents] || layout_filterTagsRegex[_pName]) {
            !layout_opt.tagsStyle[layout_filterTagsRegex[_pName]] || _r ? _r ? removeStyleFun(el,layout_opt.tagsStyle[layout_filterTagsRegex[_pName]]) :'' : setStyleFun(el,layout_opt.tagsStyle[layout_filterTagsRegex[_pName]])
            !layout_opt.tagsStyle[layout_filterTags[parents]] || _r ? _r ? removeStyleFun(el,layout_opt.tagsStyle[layout_filterTags[parents]]) :'': setStyleFun(el,layout_opt.tagsStyle[layout_filterTags[parents]])
            return true;
        }
        _p = o.parentNode;
        _pName = _p.tagName;
    }
    return false;
}
  function clearStyleFun(_block:any){
      let style=dom.getAttrib(_block,'style');
      for(let key in layout_opt.clearStyle){
          let reg = new RegExp(layout_opt.clearStyle[key] + ':?(.+?)"?[;}]') 
              style = style.replace(reg, '');
          }
          dom.setAttrib(_block,'style',style);
  }
  function removeStyleFun(_block:any,_style:any){
      let style=dom.getAttrib(_block,'style');
      for(let key in _style){
      let reg = new RegExp(key + ':?(.+?)"?[;}]') 
      style = style.replace(reg, '');
      }
      dom.setAttrib(_block,'style',style);
  }
  function setStyleFun(_block:any,_style:any){
      for(let key in _style){
         dom.setStyle(_block, key, _style[key]);
      }
      if(_style["text-indent"]){
      let kv:any = "",kl:any = "";
      if(_block&&_block.children['0']&&_block.children['0'].attributes&&_block.children['0'].attributes.style){
          kv = _indent2$getValue('font-size',_block.children['0'].attributes.style.textContent);
          kl = _indent2$getValue('letter-spacing',_block.children['0'].attributes.style.textContent);
          if(kv) {kv=(parseInt(kv)+parseInt((kl?kl:0)))*2+'px';}
          else kv=(parseInt((kl?kl:0))+16)*2+'px';
      }
      dom.setStyle(_block, 'text-indent', layout_opt.style['text-indent']&&layout_opt.style['text-indent']!='2em'?layout_opt.style['text-indent']: kv?kv:'2em');
     }
  }
  var layoutAct = '';
 if(blocks[0]){ blocks[0].dataset.layoutFv = blocks[0].dataset.layoutFv ? '' : blocks[0].dataset.layoutFv = 'layoutFV'}
  global$1.each(blocks, function (block:any) {
          if(layoutAct==''){if(dom.hasClass(block,'layoutFV')){layoutAct =  'remove'; dom.removeClass(block,'layoutFV')}else{ layoutAct =  'add'; dom.addClass(block,'layoutFV')}}
          if( layoutAct =='add'){
              !filterFun(block)?setStyleFun(block,layout_opt.style):'';
              layout_opt.clearStyle?clearStyleFun(block):'';
          }else{
              !filterFun(block,'remove')?removeStyleFun(block,layout_opt.style):'';
          }
  });
};
const create = (editor: any, value?: any)=>{
  editor.undoManager.transact(function(){
    editor.focus();
    doAct(editor)
});
}
export { create};
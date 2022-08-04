

const layoutOpt = (editor: any) => editor.getParam('tp_layout_options', {selection: 'p,table,tr,td,h1,h2,h3,h4,h5,h6,ul,blockquote' ,clearStyle:[],filterTags:['table>*','img'],style:{'text-align':'justify','text-indent':'2em','line-height': 1.5},tagsStyle:{}});

export {
  layoutOpt
};
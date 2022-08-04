import * as Main from "../core";
const register = (editor: any,opt:pluginOpt) => {
  editor.addCommand(`mce${opt.registryName.substring(0, 1).toUpperCase() + opt.registryName.substring(1)}`, (ui:any, value:any) => {
    Main.create(editor,value);
  });
};

export { register };

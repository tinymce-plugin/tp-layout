import * as Buttons from './ui/Buttons';
import * as Commands from './api/Commands';
import setupI18n from './i18n';
import {Editor} from "tinymce"
// declare const tinymce: any;

export default (opt:pluginOpt) => {
  tinymce.PluginManager.add(opt.registryName, (editor: Editor, url: string) => {
    setupI18n(editor,opt)
    Buttons.setup(editor,opt);
    Commands.register(editor,opt);
    return {
      getMetadata: function () {
          return  {
              name: opt.name,
              url: opt.repo,
          };
      }
  };
  });
};

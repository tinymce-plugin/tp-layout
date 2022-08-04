/// <reference types="vite/client" />
// import type { TinyMCE } from "tinymce"


declare const tinymce: any;
 /**
*
*  插件全局配置
* @interface pluginOpt
*/
 declare interface pluginOpt {
  /**
   * 插件名称
   * @example "Importword"
  */
  name: string; 
  /**
   * 插件注册名称
   * @example "tpImportword"
  */
   registryName: string; 
  /**
   * 插件仓库地址
   *  @example "https://github.com/tinymce-plugin/tpImportword"
  */
  repo: string; 
  /**
   * 插件标题
   *  @example "导入word"
  */
  title: string;
  /**
   *  插件图标
   *  @example "<svg t="1604625110140" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14669" width="24" height="24"><path d="M546.21184 76.9024a30.72 30.72 0 0 1 21.70368 8.9856l248.22784 247.75168a30.72 30.72 0 0 1 9.0112 21.74464v163.3792a10.24 10.24 0 0 1-10.24 10.24h-51.712a10.24 10.24 0 0 1-10.24-10.24v-109.568h-232.448a30.72 30.72 0 0 1-30.72-30.72v-229.888h-330.752v726.016h438.272a10.24 10.24 0 0 1 10.24 10.24v51.2a10.24 10.24 0 0 1-10.24 10.24h-478.72a30.72 30.72 0 0 1-30.72-30.72V107.6224a30.72 30.72 0 0 1 30.72-30.72h427.61728z m197.84192 531.712l-171.40736 141.43488a30.72 30.72 0 0 0 0 47.39072l171.40736 141.43488a10.24 10.24 0 0 0 14.2848-1.2288l36.01408-41.95328a10.24 10.24 0 0 0-1.6128-14.848l-94.68416-71.26016h232.43264a10.24 10.24 0 0 0 10.24-10.24v-51.2a10.24 10.24 0 0 0-10.24-10.24h-232.448l94.69952-71.26016a10.24 10.24 0 0 0 1.6128-14.848l-36.01408-41.95328a10.24 10.24 0 0 0-14.2848-1.2288z m-323.8912-224.512a10.24 10.24 0 0 1 10.24 10.24v51.2a10.24 10.24 0 0 1-10.24 10.24h-190.464a10.24 10.24 0 0 1-10.24-10.24v-51.2a10.24 10.24 0 0 1 10.24-10.24h190.464z m141.312-207.36v155.648a5.12 5.12 0 0 0 5.12 5.12h155.648l-160.768-160.768zM276.48 542.72l37.888 171.008 45.056-171.008h59.904l43.52 173.568 38.4-173.568h50.688l-60.928 248.832H437.76l-49.664-185.856-49.664 185.856H284.16L225.28 542.72h51.2z m143.68768-292.2496a10.24 10.24 0 0 1 10.24 10.24v51.2a10.24 10.24 0 0 1-10.24 10.24h-190.464a10.24 10.24 0 0 1-10.24-10.24v-51.2a10.24 10.24 0 0 1 10.24-10.24h190.464z" fill="#333" ></path></svg>"
  */
  icon: any
  }
  
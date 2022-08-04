
import fs from "fs"
/**
 * @description 判断文件/文件夹是否存在
 * @param {string} path
 * @returns {boolean}
*/
export const isExist = (path:string):Boolean=>{
  try{
    let stat = fs.statSync(path)
    return stat.isDirectory()||stat.isFile()
  }catch(err){
     return false
  }
}

/**
 *
 * 删除文件夹（可排除文件）
 * @export
 * @param {*} path
 * @param {?Array<string>} exclude
 */
export function delDir(path:string,exclude:string[]){
  if(!exclude){
    exclude = []
  }
  const files = fs.readdirSync(path)
  files.forEach(file => {
    const curPath = path + '/' + file
    if(fs.statSync(curPath).isDirectory()){
      delDir(curPath,exclude)
    }else{
      if(exclude.indexOf(file)>-1){
        return
      }
      fs.unlinkSync(curPath)
    }
  })
  fs.rmdirSync(path)
}
/**
 *
 * 重新命名文件
 * @export
 * @param {string} path
 * @param {string} oldName
 * @param {string} newName
 */
export function renameFile(path:string,oldName:string,newName:string){
  const oldPath = path.replace(/\\/gi,'/') + '/' + oldName
  const newPath = path.replace(/\\/gi,'/') + '/' + newName
  
  fs.renameSync(oldPath,newPath)
}



   
/**
 *  定时器 超时自动关闭 
 * @param func 
 * @param delay 
 * @param outTime 
 */
export const setIntervalFn = (func:any, delay:number,outTime?:number)=>{
  !outTime&&(outTime = delay*100)
  let setIntervalObj = {
    id: null,
    outTime: outTime,
    outId: null,
  }
  setIntervalObj.id = setInterval((obj)=>{
    func(()=>{
      clearTimeout(obj.outId)
      clearInterval(obj.id)
    })
  },delay,setIntervalObj)
  setIntervalObj.outId = setTimeout(()=>{
    setIntervalObj.id&&clearInterval(setIntervalObj.id)
  },setIntervalObj.outTime)
 
}

//压缩js  
export const  minifyJs = (filePath:string,minifyPath:string,isCode=false)=>{
 const result =  require('esbuild').transformSync(isCode?filePath:fs.readFileSync(filePath,"utf-8"), {
    minify: true,
  })
  fs.writeFileSync(minifyPath,result.code)
}
const toHump = (name:any) =>{
  return name.replace(/[-|\_](\w)/g, function(all:any, letter:any){
      return letter.toUpperCase();
  });
}
// 驼峰转换下划线
const toLine = (name:any) =>{
return name.replace(/([A-Z])/g,"_$1").toLowerCase().replace(/\-/g,"_");
}
const toHyphen = (name:string) =>{
  return name.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/\_/g,"-");
}
export const namingFormat:any = {
  toHump: toHump,
  toLine: toLine,
  toHyphen: toHyphen,
}
        
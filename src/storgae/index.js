/**
 * Storage封装
 */
const STORAGE_KEY = 'mall';
export default{
    //存储值()
    setItem(key,value,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            val[key] = value;
            this.setItem(module_name,val);
        }else{
            let val = this.getStorage();
            val[key] = value;
            window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
        }
    },
    //获取值()
    getItem(key,module_name){
        if(module_name){
            let val = this.getItem(module_name);
            if(val) return val[key];
        }
        return this.getStorage()[key];
    },
    //获取所有值()
    getStorage(){
        //将sessionStorage转换为JSON格式，并取出，如果没有值则初始化
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}');
    },
    //清除
    clear(key,module_name){
        let val = this.getStorage();
        if(module_name){
            if(!val[module_name]){
                return;
            }
            delete val[module_name][key];
        }else{
            delete val[key];
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    }
}
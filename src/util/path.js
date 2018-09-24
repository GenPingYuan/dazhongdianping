export default {
    setParams: function(path,paramsArr){
        //path = "/home/:key1/:key2?"
        if(path.indexOf(":")) {
            let newPath = "";
            const pathArr = path.split("/");
            let index = 0;
            for(let i = 0; i < pathArr.length; i ++) {
                let item = pathArr[i];
                if(item && item.indexOf(":") >=0 ){
                    item = paramsArr[index];
                    index ++;   
                }
                newPath += item + "/";
            }
            return newPath;
        }else{
            return path;
        }
    }
}
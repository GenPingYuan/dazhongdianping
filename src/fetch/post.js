import 'whatwg-fetch';

function obj2params(paramObj){
    var param = "";
    for(item in paramObj){
        param += "&" + item + "=" + paramObj[item];
    }
    param = param.slice(1);
    return param; 
}

function post(url,paramObj){
    if(process.env.NODE_ENV == "production") {
        url = "https://www.easy-mock.com/mock/5bb326b10b166245847a1b74" + url;
    }
    return fetch(url,{
        method: "POST",
        credentials: "include",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: obj2params(paramObj)
    }).then((res) => {
        return res.text();
    })
}
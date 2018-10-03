import 'whatwg-fetch';

function get(url){
    console.log("开始发送请求。。。。。。" + url);
    if(process.env.NODE_ENV == "production") {
        url = "https://www.easy-mock.com/mock/5bb326b10b166245847a1b74" + url;
    }
    return fetch(url,{
        credentials: 'include',
        headers: {
            'Accept': 'application/json, text/plain, */*'
        }
    }).then((res) => {
         console.log(res);
        return res.json();
    })
}

export default get
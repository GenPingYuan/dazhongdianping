import 'whatwg-fetch';

function get(url){
    console.log("开始发送请求。。。。。。" + url);
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
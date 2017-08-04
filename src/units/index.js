import 'whatwg-fetch';

export function formUrlencodedData(data) {
    let str = "";
    for (let i in data) {
        if (data.hasOwnProperty(i)) {
            str = str + i + "=" + data[i] + "&";
        }
    }
    return str ? str.substring(0, str.length - 1) : '';
}

function errHandle(res) {
   if (res.errcode == -1) {
       alert(res.errmsg);
   }
}

function parse(res) {
    return res.json().then(response => {
      //  console.info(response);
        if (!response) {
            throw "服务器返回数据错误";
        }
        if (response.errcode == 40001) {
            // window.localStorage.setItem("ds_token", "");
            //window.location.reload();
            alert("登录过期,请退出重新登录！");
            window.location.href="/admin";
        }
        if (response.errcode == -1) {
            throw response;
        }
        return response;
    });
}
export function ajaxApi(url, options = {}) {
    let params = {},
        method = options.method || 'get',
        data = options.data || {};
        console.log(data)
  //  if (!TOKEN) window.location.reload()
    data['token'] = localStorage.getItem('setTaken') ? localStorage.getItem('setTaken') : '' ;
    params.method = method;
    switch (method) {
        case 'post':
            params.headers = {};
            params.body = formUrlencodedData(data);
            params.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
           
            break;
        case 'get':
            url = url + (data ? ('?' + formUrlencodedData(data)) : '');
        default:
    }
    return fetch(url, params).then(parse).catch(errHandle);
}

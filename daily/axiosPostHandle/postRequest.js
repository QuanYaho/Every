// 背景：请求405 请求方法显示是OPTIONS
// 解决： 1.引qs  2.用JSON.Stringify 3.封装转换方法
import { isObject, isFormData } from './common.js'

// POST请求 提交数据
function submitData(reqData) {
    let request = {
        mobile: reqData.mobile,
        email: reqData.email,
    }

    // 转换请求参数格式
    request = appendCommon2QueryStr(request);  

    return postAndConvertResp('请求的url', request, '经过转换的后台数据格式')
}


// 发送请求，并且对返回进行处理(POST)
function postAndConvertResp(url, params, succConvert, errConvert, headers = {}) {
    beforeSend(params);

    return httpPost(url, params,headers)
        .then(resp => {
            return resp.err_code === errorCode.SUCCESS ?
                succConvert(resp.result) :
                errConvert ? errConvert(resp.err_code) : requestErrorHandler(resp.err_code, resp.err_msg);
        })
}

// 某些所有接口固定要传的参数，在请求发送前统一处理
function beforeSend(params) {
    if (isObject(params) && !isFormData(params)) {
        params.id = localCaches.id;   //比如：缓存中读取的
        params.type = 'testType';  
    }
}

// 默认错误处理
function requestErrorHandler(errCode, errMsg) {
    throw new ServerRespError(errMsg);
}

// 添加统一参数并转换成paramstr
function appendCommon2QueryStr(params) {
    beforeSend(params);

    return data2ParamString(params);
}


// param对象转换为paramStr
function data2ParamString(data) {
    if (typeof data === 'string') {
        return data;
    }
    return objectToParamString(data);
}


// 将对象转换成键值对形式，只支持单层
function objectToParamString(data) {
    var ret = '';
    for (var key in data) {
        ret = ret + key + '=' + encodeURIComponent(data[key]) + '&';
    }
    ret = ret.substr(0, ret.length - 1); // 去除最后的'&'
    return ret;
}


// 不需要更新store状态的请求.封装成在组件中根据函数处理名称发送请求
export function requestByServiceName(funcName, requestData) {
    const requestHandlers = {
        submitData
    }
    return requestHandlers[funcName](requestData);
}

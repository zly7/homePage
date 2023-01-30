import axios from "axios";
export const froneEndIPReal = '192.168.1.104';
// export function biyingRequest(froneEndIP) { //js从ES6之后的标准
//     const url = '';
//     axios({
//         // url: "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8",
//         // url: "http://bing.ioliu.cn/v1/rand", 这个还是会有跨域问题
//         // url: "http://localhost:7999/proxy/HPImageArchive.aspx?format=js&idx=0&n=8", //7999这个端口是和nginx的server监听对于的
//         //又忘记了js这个网络请求是客户端的浏览器在做,所以上面的localhost是真的localhost
//         url: "http://"+froneEndIP+":7999/proxy/HPImageArchive.aspx?format=js&idx=0&n=8",
//         // baseURL: '',
//         method: 'get',
//     }).then(function (response) {
//         // 处理成功情况
        
//         console.log(response);
//         const imgUrl = response.data.images[0].url;
//         console.log(imgUrl);
//         url = "https://www.bing.com" + imgUrl;
//     }).catch(function (error) {
//         // 处理错误情况
//         console.log(error);
//     });
//     return url;

// }
export function biyingRequestOthers() {
    const https = require('https')
    const options = {
        hostname: 'www.bing.com',
        port: 443,
        path: '/HPImageArchive.aspx?format=js&idx=0&n=8',
        method: 'GET'
    }
    
    const req = https.request(options, bing_res => {
        console.log(bing_res);
        // let bing_body = [], bing_data = {};
        // bing_res.on('data', (chunk) => {
        //     bing_body.push(chunk);
        // });
        // bing_res.on('end', () => {
        //     bing_body = Buffer.concat(bing_body);
        //     bing_data = JSON.parse(bing_body.toString());
        //     let img_array = bing_data.images;
        //     let img_url = [];
        //     img_array.forEach(img => {
        //         img_url.push(img.url);
        //     });
        //     var jsonpStr = "getBingImages(" + JSON.stringify(img_url) + ")";
        //     fs.writeFile('./assets/json/images.json', jsonpStr, (err) => {
        //         if (err) {
        //             throw err;
        //         }
        //         console.log("JSON data is saved: " + jsonpStr);
        //     });
        // });
    })
}
export function request(conifg) {

    const instance = axios.create({
        baseURL: 'https://some-domain.com/api/',
        timeout: 1000,
    });
    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
        // 在发送请求之前做些什么
        return config;
    }, function (error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
        // 2xx 范围内的状态码都会触发该函数。
        // 对响应数据做点什么
        return response;
    }, function (error) {
        // 超出 2xx 范围的状态码都会触发该函数。
        // 对响应错误做点什么
        return Promise.reject(error);
    });

    return instance(conifg);

}
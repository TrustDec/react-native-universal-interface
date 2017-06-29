/*
* update -v：2017-6-29 16:13
*/
require('./components/es6-promise');
require('./components/rnwi-browser');

var Authorization = window.WebViewInvoke;
/*
*   
*/
async function GetUserOpenId() {
    let GetUserOpenId = Authorization.bind('GetUserOpenId');

    let resolve = await GetUserOpenId();

}
/* 浏览器 */

/* rnwebview */

const phantom = require('phantom');
let cookie = '';

const getWhsCookie = async () => {
    try {
        cookie = '';
        const instance = await phantom.create();
        const page = await instance.createPage();
        await page.on('onLoadFinished', async function(status, a) {
            if(status === 'success') {
                await page.evaluateJavaScript(function() {
                    // document.getElementById('switcher_plogin').click();
                    var u = document.getElementById('u');
                    var p = document.getElementById('p');
                    if(u) {
                        u.value= '963320737';
                        p.value= 'lt880919';
                        document.getElementById('go').click();
                    }
                }).then(async function(html){
                    const cookies = await page.cookies();
                    cookies.forEach(co => {
                        if(co.name === 'uin' || co.name === 'skey') {
                            cookie += `${co.name}=${co.value};`;
                        }
                    });
                    if(cookie) {
                        await instance.exit();
                    }
                });
            }
        });

        // await page.open('https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=501038301&target=self&s_url=http://im.qq.com/loginSuccess.html');
        await page.open('http://ui.ptlogin2.qq.com/cgi-bin/login?pt_no_onekey=1&style=9&appid=1006102&s_url=http%3A%2F%2Fxiaoqu.qq.com%2Fmobile%2Fbarindex.html%3F_lv%3D29313%26_bid%3D128%26_wv%3D1027%26from%3Dshare_link%23bid%3D37469%26type%3D%26source%3Dindex%26scene%3Drecent%26from%3Ddongtai%26webview%3D1&low_login=0&hln_css=http%3A%2F%2Fpub.idqqimg.com%2Fqqun%2Fxiaoqu%2Fmobile%2Fimg%2Fnopack%2Flogin-logo.png');

        await checkCookie();
        return cookie;
    }catch (e) {
        console.log(e);
    }

};

const checkCookie = async () => {
    if(!cookie) {
        await timeout(100);
        return await checkCookie();
    }
};

function timeout(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}

exports.getWhsCookie = getWhsCookie;
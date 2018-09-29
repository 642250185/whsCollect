const path = require('path');

const config = {
    whsqd: {
        productDetailURL: 'https://chong.qq.com/tws/recycleevaluate/GetAttrListByModelId?appId=wx47031447c8352579&UidType=1',
        productPageSize: 50,
        brandURL: 'https://chong.qq.com/tws/recycleevaluate/GetModelListByBrandId',
        brandDataPath: path.join(__dirname, '..', 'data/brand.json'),
        spuDataPath: path.join(__dirname, '..', 'data/spu.json'),
        downloadPath: path.join(__dirname, '..', 'download')
    },
    env: function () {
        global.$config = this;
        return global.$config;
    }
};


module.exports = config.env();
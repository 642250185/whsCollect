const path = require('path');
const config = {
    whsqd: {
        openApiProductDetailUrl: 'http://openapi.huishoubao.com/api/get_product_param_v2',
        productDetailURL: 'https://chong.qq.com/tws/recycleevaluate/GetAttrListByModelId?appId=wx47031447c8352579&UidType=1',
        productPageSize: 50,
        brandURL: 'https://chong.qq.com/tws/recycleevaluate/GetModelListByBrandId',
        brandDataPath: path.join(__dirname, '..', 'data/brand.json'),
        spuDataPath: path.join(__dirname, '..', 'data/spu.json'),
        ctypePath: path.join(__dirname, '..', 'data/ctype.json'),
        downloadPath: path.join(__dirname, '..', 'download'),
        whsMapping: {
            domain: 'http://mapping.huishoubao.com.cn/index/index',
            secretKey: 'e6ca30702e4aa0315937663daf1684c7',
            callerServiceId: '200001',
            productMappingInterface: 'productEvaMapList',
            optionMappingInterface: 'characterEvaMapList',
            descMappingInterface: 'characterEvaDescList'
        },
        openApi: {
            pid: '1114',
        }
    },
    env: function () {
        global.$config = this;

        return global.$config;
    }
};


module.exports = config.env();
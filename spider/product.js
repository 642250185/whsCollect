const path = require('path');
const fs = require('fs-extra');
const config = require('../config');
const request = require('superagent');
const {getWhsCookie} = require('../util/whsCookie');
const {productPageSize, brandURL, brandDataPath, spuDataPath} = config.whsqd;

const _getPListByBrandId = async (brandId, cookie, pageIndex, plist) => {
    try{
        if(!pageIndex) {
            pageIndex = 0;
            plist = [];
        }
        let result = await request.post(brandURL)
            .set('Cookie', cookie)
            .query({appId: 'wx47031447c8352579', UidType: 1})
            .send({
                bid: brandId,
                pageindex: pageIndex,
                pagesize: productPageSize,
                time: new Date().getTime()
            });
        result = JSON.parse(result.text);
        const {datalist, pageinfo} = result.data ? result.data : {};
        plist = plist.concat(datalist);
        pageIndex++;
        const end = Math.ceil(pageinfo.total / pageinfo.pagesize);
        if(pageIndex < end){
            return await _getPListByBrandId(brandId, cookie, pageIndex, plist);
        } else {
            return plist;
        }
    } catch(e) {
        console.log('=========', e);
        return [];
    }
};

const _getAllProducts = async (cookie) => {
    let resultList = [];
    const brands = JSON.parse(fs.readFileSync(brandDataPath));
    console.info('品牌总数: %d', brands.length);
    for (let brand of brands) {
        const plist = await _getPListByBrandId(brand.bid, cookie);
        console.info(`[ ${brand.name} ]品牌下, 机型总数有: ${plist.length}`);
        resultList = resultList.concat(plist);
    }
    return resultList;
};

const crawlerProducts = async () => {
    try {
        const cookie = await getWhsCookie();
        const spus = await _getAllProducts(cookie);
        await fs.ensureDir(path.join(spuDataPath, '..'));
        fs.writeFileSync(spuDataPath, JSON.stringify(spus, null, 4));
    } catch (e) {
        console.error(e);
        return [];
    }
};

// crawlerProducts();
exports.crawlerProducts = crawlerProducts;
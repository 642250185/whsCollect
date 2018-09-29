const {crawlerBrands} = require('./spider/brand');
const {crawlerProducts} = require('./spider/product');
const {exportExcel} = require('./spider/details');

const start = async () => {
    try {
        console.info('start......');

        console.info('start collect Brand...');
        await crawlerBrands();
        console.info('end collected Brand');

        console.info('start collect Spu...');
        await crawlerProducts();

        console.info('start collect SpuDetails and ExportExcel');
        await exportExcel();

        console.info('end......');
    } catch (e) {
        console.error(e);
        return e;
    }
};


start();
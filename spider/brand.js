const path = require('path');
const fs = require('fs-extra');
const {brandDataPath} = require('../config').whsqd;

const getBrands = () => {
    return [
        {bid: '10000', name: '苹果', categoryId: '1'},
        {bid: '20000', name: 'OPPO', categoryId: '1'},
        {bid: '30000', name: '三星', categoryId: '1'},
        {bid: '40000', name: '华为', categoryId: '1'},
        {bid: '50000', name: '小米', categoryId: '1'},
        {bid: '60000', name: '魅族', categoryId: '1'},
        {bid: '70000', name: 'HTC', categoryId: '1'},
        {bid: '80000', name: 'VIVO', categoryId: '1'},
        {bid: '90000', name: '酷派', categoryId: '1'},
        {bid: '100000', name: '联想', categoryId: '1'},
        {bid: '110000', name: '摩托罗拉', categoryId: '1'},
        {bid: '120000', name: '诺基亚', categoryId: '1'},
        {bid: '130000', name: '中兴', categoryId: '1'},
        {bid: '140000', name: '努比亚', categoryId: '1'},
        {bid: '150000', name: '索尼', categoryId: '1'},
        {bid: '160000', name: '金立', categoryId: '1'},
        {bid: '170000', name: '乐视', categoryId: '1'},
        {bid: '180000', name: '锤子', categoryId: '1'},
        {bid: '190000', name: '奇酷', categoryId: '1'},
        {bid: '200000', name: '一加', categoryId: '1'},
        {bid: '210000', name: '荣耀', categoryId: '1'},
        {bid: '220000', name: '中国移动', categoryId: '1'},
        {bid: '230000', name: '微软', categoryId: '1'},
        {bid: '240000', name: '美图', categoryId: '1'},
        {bid: '250000', name: '环保回收', categoryId: '1'}
    ];
};

const crawlerBrands = async () => {
    const bids = getBrands();
    await fs.ensureDir(path.join(brandDataPath, '..'));
    fs.writeFileSync(brandDataPath, JSON.stringify(bids, null, 4));
    return bids;
};

crawlerBrands()
exports.crawlerBrands = crawlerBrands;
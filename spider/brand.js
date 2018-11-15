const path = require('path');
const fs = require('fs-extra');
const {brandDataPath} = require('../config').whsqd;

const getBrands = () => {
    return [
        // phone
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
        {bid: '250000', name: '环保回收', categoryId: '1'},
        {bid: '260000', name: 'LG', categoryId: '1'},
        {bid: '280000', name: '朵唯', categoryId: '1'},
        {bid: '290000', name: '黑莓', categoryId: '1'},
        // tablePC
        {bid: '400000', name: '苹果平板', categoryId: '3000'},
        {bid: '410000', name: '华为平板', categoryId: '3100'},
        {bid: '420000', name: '三星平板', categoryId: '3200'},
        {bid: '430000', name: '荣耀平板', categoryId: '3300'},
        {bid: '440000', name: '联想平板', categoryId: '3400'},
        {bid: '450000', name: '小米平板', categoryId: '3500'},
        {bid: '460000', name: '其他平板', categoryId: '3600'},
        // notebook
        {bid: "2210000", name: "苹果", categoryId: "100"},
        {bid: "2220000", name: "ThinkPad", categoryId: "200"},
        {bid: "2230000", name: "联想", categoryId: "300"},
        {bid: "2240000", name: "戴尔", categoryId: "400"},
        {bid: "2250000", name: "宏碁", categoryId: "500"},
        {bid: "2260000", name: "华硕", categoryId: "600"},
        {bid: "2270000", name: "惠普", categoryId: "700"},
        {bid: "2280000", name: "雷蛇", categoryId: "800"},
        {bid: "2290000", name: "雷神", categoryId: "900"},
        {bid: "22100000", name: "外星人", categoryId: "1000"},
        {bid: "22110000", name: "华为", categoryId: "1100"},
        {bid: "22120000", name: "明基", categoryId: "1200"},
        {bid: "22130000", name: "LG", categoryId: "1300"},
        {bid: "22140000", name: "得峰", categoryId: "1400"},
        {bid: "22150000", name: "格莱富", categoryId: "1500"},
        {bid: "22160000", name: "松下", categoryId: "1600"},
        {bid: "22170000", name: "微软", categoryId: "1700"},
        {bid: "22180000", name: "小米", categoryId: "1800"},
        {bid: "22190000", name: "机械革命", categoryId: "1900"},
        {bid: "22200000", name: "乐凡livefan", categoryId: "2000"}
    ];
};

const crawlerBrands = async () => {
    try {
        const bids = getBrands();
        await fs.ensureDir(path.join(brandDataPath, '..'));
        fs.writeFileSync(brandDataPath, JSON.stringify(bids, null, 4));
        return bids;
    } catch (e) {
        console.error(e);
        return e;
    }
};


exports.crawlerBrands = crawlerBrands;
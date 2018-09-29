const fs = require('fs-extra');
const config = require('../config');
const request = require('superagent');
const xlsx = require('node-xlsx').default;
const {getWhsCookie} = require('../util/whsCookie');
const {spuDataPath, downloadPath, productDetailURL} = config.whsqd;

const getDetails = async (spu, cookie) => {
    try {
        let result = await request.post(productDetailURL)
            .set('Cookie', cookie)
            .send({
                mid: spu.mid,
                pageindex: 0,
                pagesize: 30,
                time: new Date().getTime()
            });
        result = JSON.parse(result.text);
        const {questions, pageinfo} = result.data;
        const final = [];
        for(let question of questions){
            const {qgroup, qalise, answers} = question;
            for(let answer of answers){
                const {aid, aalise} = answer;
                final.push({
                    mid: spu.mid,
                    mname: spu.mname,
                    qid: qgroup,
                    qname: qalise,
                    aid: aid,
                    aname: aalise
                });
            }
        }
        return final;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const getAllPrdouctDetails = async () => {
    try {
        let final = [];
        const cookie = await getWhsCookie();
        const spus = JSON.parse(fs.readFileSync(spuDataPath));
        console.info('机型总数: %d', spus.length);
        for(let spu of spus){
            console.info(`${spu.mid}, 正在采集 [ ${spu.mname} ] 机型的详情数据.`);
            const spuDetail = await getDetails(spu, cookie);
            final = final.concat(spuDetail);
        }
        return final;
    } catch (e) {
        console.error(e);
        return [];
    }
};

const exportExcel = async () => {
    try {
        const allSpuDetails = await getAllPrdouctDetails();
        console.info(`${allSpuDetails.length} 条机型详情信息......`);
        const result = [['机型ID', '机型名称', '问题项ID', '问题项名称', '答案项ID', '答案选名称']];
        for(let spuDetail of allSpuDetails){
            const row = [];
            row.push(spuDetail.mid);
            row.push(spuDetail.mname);
            row.push(spuDetail.qid);
            row.push(spuDetail.qname);
            row.push(spuDetail.aid);
            row.push(spuDetail.aname);
            result.push(row);
        }
        const random = Math.ceil(Math.random() * 100);
        const filename = `${downloadPath}/微回收机型详情-${random}.xlsx`;
        fs.writeFileSync(filename, xlsx.build([
            {name: '微回收机型详情', data: result},
        ]));
        console.log(`成功导出文件: ${filename}`);
        return;
    } catch (e) {
        console.error(e);
        return e;
    }
};


exports.exportExcel = exportExcel;
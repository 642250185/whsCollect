const {start} = require('./index');
const schedule = require('node-schedule');

schedule.scheduleJob('10 20 3 * * *', async () => {
    try{
        const date = new Date().toLocaleDateString();
        const time = new Date().toLocaleTimeString();
        const now = `${date} ${time}`;
        console.info('now: ', now);
        start();
    } catch (e) {
        console.error(e);
    }
});



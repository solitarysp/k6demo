import http from 'k6/http';
// Run k6 run Runningk6/OutputExportToFileJson.js
export let options = {
    stages: [
        {duration: '10s', target: 100},
        {duration: '10s', target: 1000},
        {duration: '20s', target: 50},
    ],
    summaryTimeUnit: 'ms',
    summaryTrendStats: ['min','avg','med','p(10)','p(99)','p(99.9)','max','count'],
    summaryExport: 'Runningk6/exportFile/file.json',
};
export default function () {
    http.get('http://10.255.133.69:8088/');
}
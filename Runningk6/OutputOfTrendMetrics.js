import http from 'k6/http';
// RUn k6 run --summary-trend-stats="min,avg,med,p(99),p(99.9),max,count" --summary-time-unit=ms  Runningk6/OutputOfTrendMetrics.js
export let options = {
    stages: [
        {duration: '10s', target: 100},
        {duration: '10s', target: 1000},
        {duration: '20s', target: 50},
    ],
};
export default function () {
    http.get('http://10.255.133.69:8088/');
}
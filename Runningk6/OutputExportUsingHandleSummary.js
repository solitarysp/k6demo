import http from 'k6/http';
import { jUnit, textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/summary.js';

// Run k6 run Runningk6/OutputExportToFileJson.js
export let options = {
    stages: [
        {duration: '10s', target: 100},
    ],
    summaryTimeUnit: 'ms',
    summaryTrendStats: ['min','avg','med','p(10)','p(99)','p(99.9)','max','count'],
    summaryExport: 'Runningk6/exportFile/file.json',
};
export default function () {
    http.get('http://10.255.133.69:8088/');
}
export function handleSummary(data) {
    console.log('Preparing the end-of-test summary...');
    // Send the results to some remote server or trigger a hook
   console.log(JSON.stringify(data))
    return {
        'stdout': textSummary(data, { indent: ' ', enableColors: true}), // Show the text summary to stdout...
        '../path/to/junit.xml': jUnit(data), // but also transform it and save it as a JUnit XML...
        'other/path/to/summary.json': JSON.stringify(data), // and a JSON with all the details...
        // And any other JS transformation of the data you can think of,
        // you can write your own JS helpers to transform the summary data however you like!
    }
}
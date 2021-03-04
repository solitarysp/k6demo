import http from 'k6/http';

export let options = {
    stages: [
        {duration: '10s', target: 100},
        {duration: '40s', target: 1000},
        {duration: '20s', target: 50},
    ],
};
export default function () {
    http.get('http://10.255.133.69:8088/');
}
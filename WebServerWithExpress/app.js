// const http = require('http');
// const fs = require('fs');

// const route = (page, response) => {
//     const path = `./public/${page}.html`;
//     fs.readFile(path, (error, data) => {
//         if(error) {
//             response.writeHead(404);
//             response.write('Halaman yang dituju tidak tersedia!');
//         } else {
//             response.writeHead(200, { 'Content-Type': 'text/html' });
//             response.write(data);
//         }

//         response.end();
//     });
// };

// http.createServer((request, response) => {

//     switch (request.url) {
//         case '/about':
//             route('about', response);
//             break;
//         default:
//             route('index', response);
//     }
    
// }).listen(3000, (error) => {
//     if(error) {
//         console.log('Server tidak dapat berjalan');
//     } else {
//         console.log('Server berjalan di port 3000');
//     }
// });

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (request, response) => {
    response.sendFile('./public/index.html', {root: __dirname});
});

app.get('/about', (request, response) => {
    response.sendFile('./public/about.html', {root: __dirname});
});

app.use('/', (request, response) => {
    response.status(404);
    response.send('<h1>404</h1>');
});

app.listen(port, (error) => {
    if (error) {
        console.log('Gagal menjalankan server.');
    } else {
        console.log(`Server berjalan di ${port}`);
    }
});
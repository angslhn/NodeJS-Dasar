const fs = require('fs');

const exponent = (angka) => {
    return angka ** 2;
};

const hasil = exponent(5);

// Membuat Sebuah File 

// Synchronous
// try {
//     fs.writeFileSync('hasil.txt', `Hasilnya adalah ${hasil}`);
// } 
// catch (error) {
//     console.log("File gagal dibuat!");
// }

// Asynchronous
// fs.writeFile('hasil.txt', `HASILNYA ADALAH ${hasil}`, (e) => {
//     console.log(e);
// });

// Membaca Sebuah File

// Synchronous
// try {
//     const text = fs.readFileSync('hasil.txt', 'utf-8');
//     console.log(text);
// } 
// catch (error) {
//     console.log('Gagal membaca file!');
// }

// Asynchronous 
// fs.readFile('hasil.txt', 'utf-8', (err, data) => {
//     if(err) throw err;
//     if(!data) {
//         console.log('File kosong!');
//     }

//     const angka = data.match(/\d+/)
//     console.log(angka[0]);
// });
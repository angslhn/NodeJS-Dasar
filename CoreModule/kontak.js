const readline = require('readline');
const fs = require('fs');

const rl = readline.Interface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nama : ', (nama) => {
    rl.question('No HP : ', (noHp) => {

        const now = new Date().toLocaleString();

        const data = {
            Nama: nama,
            NoHp: noHp,
            Waktu: now
        }

        let semuaKontak = [];

        try {
            if(fs.existsSync('data/kontak.json')) {
                const file = fs.readFileSync('data/kontak.json', 'utf-8');
                semuaKontak = JSON.parse(file);
            }
        } catch (error) {
            console.log('File gagal untuk dibaca!');
        }

        semuaKontak.push(data);

        try {
            fs.writeFileSync('data/kontak.json', JSON.stringify(semuaKontak, null, 2));
            console.log('Data berhasil disimpan!');
        } catch (error) {
            console.log('Data gagal untuk disimpan!');
        }

        rl.close();
    })
});
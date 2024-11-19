const tampilkanNama = (nama) => {
    return `Hallo Selamat Pagi ${nama} Semoga Sehat Selalu!`;
}

const tambah = (angkaPertama, angkaKedua) => {
    return angkaPertama + angkaKedua;
}

// module.exports = tampilkanNama;
// module.exports.tampilkanNama = tampilkanNama;
// module.exports.tambah = tambah;
// module.exports = {
//     tampilkanNama: tampilkanNama,
//     tambah
// };
module.exports = {tampilkanNama, tambah};
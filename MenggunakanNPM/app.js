// Cek No HP Indonesia

import validator from 'validator';
import chalk from 'chalk';

const noHp = '085789065124';

if(validator.isMobilePhone(noHp, 'id-ID')) {
    console.log(chalk.bold.bgGreen.white("Ini adalah No HP Indonesia!"));
} else {
    console.log(chalk.bold.bgRed.white("Ini bukan No HP Indonesia!"));
}
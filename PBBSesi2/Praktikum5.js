const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  ouput: process.stdout,
});

rl.question("Masukkan angka: ", function (angka) {
  angka = parseInt(angka);

  if (angka % 2 === 0) {
    console.log(angka + " adalah bilangan GENAP");
  } else {
    console.log(angka + "adalah bilangan GANJIL");
  }
  rl.close();
});

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Bobot nilai (konstanta, tidak berubah)
const BOBOT_TUGAS = 0.3;
const BOBOT_UTS = 0.3;
const BOBOT_UAS = 0.4;

rl.question("Nama mahasiswa: ", function (nama) {
  rl.question("Nilai tugas: ", function (tugas) {
    rl.question("Nilai UTS: ", function (uts) {
      rl.question("Nilai UAS: ", function (uas) {
        // Ubah input teks menjadi angka
        tugas = parseFloat(tugas);
        uts = parseFloat(uts);
        uas = parseFloat(uas);

        // Hitung nilai akhir
        const nilaiAkhir =
          tugas * BOBOT_TUGAS + uts * BOBOT_UTS + uas * BOBOT_UAS;

        // Tampilkan hasil
        console.log("\n=== HASIL NILAI AKHIR ===");
        console.log(`Nama       : ${nama}`);
        console.log(`Nilai Tugas: ${tugas}`);
        console.log(`Nilai UTS  : ${uts}`);
        console.log(`Nilai UAS  : ${uas}`);
        console.log(`Nilai Akhir: ${nilaiAkhir.toFixed(2)}`);

        rl.close();
      });
    });
  });
});

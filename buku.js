class Buku {
  constructor(judul, penulis) {
    this.judul = judul;
    this.penulis = penulis;
    this.status = "Tersedia";
  }

  pinjam() {
    if (this.status === "Tersedia") {
      this.status = "Dipinjam";
      console.log("Kamu meminjam buku: " + this.judul);
    } else {
      console.log("Buku sedang tidak tersedia.");
    }
  }

  kembalikan() {
    if (this.status === "Dipinjam") {
      this.status = "Tersedia";
      console.log("Buku " + this.judul + " berhasil dikembalikan.");
    } else {
      console.log("Buku ini belum dipinjam.");
    }
  }
}

// Object buku
const buku1 = new Buku("Laskar Pelangi", "Andrea Hirata");
const buku2 = new Buku("Bumi", "Tere Liye");

// Method
buku1.pinjam();
buku1.kembalikan();

buku2.pinjam();

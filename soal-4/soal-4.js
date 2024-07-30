function printStars(n) {
    // Loop untuk setiap baris
    for (let i = 1; i <= n; i++) {
        // Hitung jumlah bintang pada baris ke-i
        let stars = '';
        for (let j = 1; j <= 2 * i - 1; j++) {
            stars += '*';
        }
        // Cetak baris bintang
        console.log(stars);
    }
}

printStars(4); // Output untuk input 4
printStars(3); // Output untuk input 3

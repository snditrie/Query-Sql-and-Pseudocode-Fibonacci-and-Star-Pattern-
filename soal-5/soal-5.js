function formatNumber(input1, input2) {
    // Ubah input1 menjadi string
    let numberString = input1.toString();
    
    // Hitung panjang string dari input1
    let length = numberString.length;
    
    // Hitung jumlah nol yang perlu ditambahkan di depan
    let zerosToAdd = input2 - length;
    
    // Jika jumlah nol yang perlu ditambahkan lebih besar dari 0
    if (zerosToAdd > 0) {
        // Tambahkan nol di depan input1 hingga mencapai panjang yang diinginkan
        numberString = '0'.repeat(zerosToAdd) + numberString;
    }
    
    // Kembalikan hasil yang sudah diformat
    return numberString;
}

console.log(formatNumber(5, 4));  // Output: 0005
console.log(formatNumber(87, 7)); // Output: 0000087

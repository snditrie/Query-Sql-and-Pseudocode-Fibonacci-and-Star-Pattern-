function generateFibonacci(n) {
    // Inisialisasi array hasil dan variabel a, b
    let result = [];
    let a = 1, b = 1;
    
    // Jika n lebih dari 0, masukkan angka pertama
    if (n > 0) {
        result.push(a);
    }
    
    // Jika n lebih dari 1, masukkan angka kedua
    if (n > 1) {
        result.push(b);
    }
    
    // Menghasilkan deret Fibonacci sampai n angka
    for (let i = 2; i < n; i++) {
        let next = a + b; // Hitung angka berikutnya
        result.push(next); // Tambahkan ke array hasil
        a = b; // Update a menjadi b
        b = next; // Update b menjadi angka berikutnya
    }
    
    // Tampilkan hasil
    console.log(result.join(' '));
}

generateFibonacci(3);  // Output: 1 1 2
generateFibonacci(5);  // Output: 1 1 2 3 5
generateFibonacci(12); // Output: 1 1 2 3 5 8 13 21 34 55 89 144
generateFibonacci(25); // Output: 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597 2584 4181 6765 10946 17711 28657 46368 75025

import { it, describe, expect } from 'bun:test';
 
describe('Fitur 1', () => {
  it('harus dapat A', () => {
    expect('A').toBe('A');
  });
 
  it('harus dapat B', () => {
    expect('B').not.toBe('A');
  });
});

//Mengikuti Pola AAA
// Ada satu pola atau konvensi yang bisa kita terapkan agar pembacaan kode testing makin mudah. Itu adalah pola AAA atau Arrange, Action & Assert. Ketiga A ini adalah sebuah section atau bagian untuk memisahkan kode dalam satu test case guna memudahkan pemahaman pembaca.

// A pertama - Arrange: persiapan kode untuk sebelum melakukan eksekusi pengujian fitur. Misalnya, menyiapkan angka yang akan digunakan untuk penjumlahan.
// A kedua - Action: eksekusi fitur terjadi dalam bagian ini.
// A ketiga - Assert: memastikan antara actual value dan expected value sudah sesuai.

// import { describe, it, expect } from 'bun:test';
 
// function add(numA, numB) {
//   return numA + numB;
// }
 
// describe('Calculator', () => {
//   it('should add correctly', () => {
//     // Arrange
//     const operandA = 1;
//     const operandB = 1;
 
//     // Action
//     const actualValue = add(operandA, operandB);
 
//     // Assert
//     const expectedValue = 2;
//     expect(actualValue).toBe(expectedValue);
//   });
// });

// Menentukan konteks, skenario, dan ekspektasi melalui parameter pertama dari describe, it, ataupun test.
// Menerapkan strategi arrange, action, dan assert dalam membangun proses validasi nilai. Strategi ini disingkat dengan AAA.
// Menguji hasil program berdasarkan daftar edge cases-nya. Caranya bisa dengan mendefinisikan skenario-skenario yang bersifat positif dan negatif dan menuangkannya dalam kode testing.
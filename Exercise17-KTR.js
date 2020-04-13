// Exercise 17 Kali Terus Rekursif
function kaliTerusRekursif(angka) {
    if(angka <= 9){
        return angka;
    } else {
        var sisa = angka%10 * kaliTerusRekursif(Math.floor(angka/10));
        if(sisa >9){
            return kaliTerusRekursif(sisa);
        } else {
            return sisa;
        }
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6
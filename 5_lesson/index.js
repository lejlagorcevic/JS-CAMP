//let rec = "dan";
//duzina = rec.length;
//console.log(duzina);

//let rec2 =rec.toUpperCase();
//console.log(rec2)




// FIZZ BUZZ CHALLENGE
// Iteracija se vrši od 1-100, uključujući 100.
// Ako je dati broj deljiv sa 3, u console se ispisuje FIZZ,
// Ako je dati broj deljiv sa 5, u console se ispisuje BUZZ i
// Ako je dati broj deljiv i sa 3 i sa 5, u console se ispisuje FIZZ BUZZ.

//for (let i = 1; i <= 100; i++){
 //   if (i % 3 === 0 ){
//        console.log("FIZZ");
//    } else if (i % 5 === 0){
//        console.log ("BUZZ");
//    } else {
//        console.log ("FIZZ BUZZ")
//    }
//}






/*let recenica = "Nakon svakog vezbanja je preporuuka postaviti promene na github"
let s = recenica[6]
console.log(s);
let rec3 = "treca"
console.log(rec3.length);
console.log(rec3[4]);
//Napraviti novu rečenicu gde će svaka reč počinjati velikim slovom.
let recenica2 = ""
for (let i = 0; i <= recenica.length -1; i++){
    if (i === 0){
        recenica2 += recenica [i].toUpperCase();
    } else if (recenica[i-1] === " ") {
        recenica2 += recenica[i].toUpperCase();
    } else {
        recenica2 += recenica[i]
    }
}*/

let brojRazmaka = 0;
for (let i = 0; i <= recenica.length -1; i++){
    if (recenica[i === " "]){
        brojRazmaka++
    }
}
console.log (brojRazmaka)
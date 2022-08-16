// WHILE PETLJA

//while () {
    // blok koda koji će se izvršiti dok važi odoređeni uslov
//}




//let i = 1;
//while ( i <= 10) {
  //  i++; // deo koji je neizostavan kako se ne bi dešavala beskonačna petlja
    //if (i === 7){
      //  continue;
    //}  else {
    //    console.log(i);
    //}


//}



// 2.zadatak "Uneti broj, console treba da prikaže svaki broj 
//koji je deljiv sa 3 do broja kojeg smo uneli"
//const broj = prompt("Unesite neki broj:")
//let i = 0;
//while (i < broj) {
//    i++;
//    if ( i % 3 === 0 ) {
//        console.log (i)
//    }
//}
    


// DO WHILE petlja je slična while petlji. S tim što ima jedna razlika.
//i = 1;
//do {
//    console.log(i);
//    i++;
//} while (i < 12); 



//console.log(recenica[4])
//ZADATAK
//let recenica = "Danas je nakon 20 dana padala kiša.";
//let recenica2 = "";
//console.log(recenica[4]); // indexiranje
//console.log(recenica.length)
// Koristeći for petlju izbrisati razmake date rečenice;
//duzina = recenica.length
//for (let i = 0; i < duzina; i++) {
//    if (recenica[i] === " "){
//        continue;
//    } else {
 //       recenica2= recenica2 + recenica[i];
//    }
//}
//console.log(recenica2)


//ZADATAK2
//Koristeći for petlju izbrisati "a" i "m" karaktere date rečenice
recenica = "IT Camp je kurs koji treba da traje 9 meseci";
recenica2 = "";
duzina = recenica.length
for (let i = 0; i < duzina; i++) {
    if (recenica[i] === "a" ||recenica[i] === "m") {
        continue;
    } else {
        recenica2= recenica2 + recenica[i]
    }
}
console.log(recenica2);
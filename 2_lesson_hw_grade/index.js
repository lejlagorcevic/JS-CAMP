//The marks obtained by a student in 3 different subjects are input by the user. 
//Your program should calculate the average of subjects and display the grade. 
//The student gets a grade as per the following rules:
//Average grade
//90-100 A
//80-89 B
//70-79 C
//60-69 D
//0-59 F
grade = prompt("Insert the amount of points you have:");
// Operacija upoređivanja
if (grade >= 0 && grade <= 59) {
    console.log ("Your grade is F.")
}
if (grade >= 60 && grade <= 69) {
   console.log ("Your grade is D.")
}
if (grade >= 70 && grade <= 79) {
   console.log ("Your grade is C.")
}
if (grade >= 80 && grade <= 89) {
    console.log ("Your grade is B.")
}
if (grade >= 90 && grade <= 100) {
    console.log ("Your grade is A.")
}
else{
    console.log ("Insert a valid amount of points you have!")
}

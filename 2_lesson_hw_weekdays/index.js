//Write a program that prompts the user to input a number. 
//Program should display the corresponding days to the number. 
//For example if user type 1 the output should be sunday. 
//If user type 7 the output should be saturday.
input = prompt('Insert a number 1-7:');
if (input > 0 && input < 2){
    console.log('The first day of the week is Monday.')
}
if (input > 1 && input < 3){
    console.log('The second day of the week is Tuesday.')
}
if (input > 2 && input < 4){
    console.log('The third day of the week is Wednesday.')
}
if (input > 3 && input < 5){
    console.log('The fourth day of the week is Thursday.')
}
if (input > 4 && input < 6){
    console.log('The fifth day of the week is Friday.')
}
if (input > 5 && input < 7){
    console.log('The sixth day of the week is Saturday.')
}
if (input > 6 && input < 8){
    console.log('The seventh day of the week is Sunday.')
}

//Napišite program koji ispisuje zbroj parnih brojeva od 1 do 20.
let sum = 0 
for ( i = 1; i <= 20; i++ )
{
  if ( i % 2 === 0 )
  {
    sum = sum + i
  }
}
console.log(sum)
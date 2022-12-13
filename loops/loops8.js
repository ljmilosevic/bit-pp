//Write a program that uses console.log to print all the numbers from 1 to 100, with two
//exceptions. For numbers divisible by 3, print &quot;Fizz&quot; instead of the number, and for numbers
//divisible by 5 (and not 3), print &quot;Buzz&quot; instead. When you have that working, modify your
//program to print &quot;FizzBuzz&quot;, for numbers that are divisible by both 3 and 5 (and still print
//&quot;Fizz&quot; or &quot;Buzz&quot; for numbers divisible by only one of those).


var a;
var a = 1;




for (a = 1; a <101; a++) 
{
    if (a % 3 == 0 && a % 5 == 0)
        {
            console.log("FizzBuzz");
        }
    else if (a % 3 == 0)
        {
            console.log("Fizz");
        }
    else if (a % 5 == 0)
        {
            console.log("Buzz");
        }
    else
        {
            console.log(a);
        }

}
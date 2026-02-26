let year=2000;
if((year%4==0) && ((year%100!=0) || (year%400==0)) )
{
console.log("passed " +year+ " is leap year")
}
else
{
    console.log("not a leap year")
}

var year = 2024;
if(year % 4==0 && year%100 !==0 || year%400 === 0){
    console.log("it is leap year")
}
else
    {
    console.log("it is not leap year")
}
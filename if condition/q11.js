var temp = 30; {
if(temp < 0){
   climate = "freezing";
}
else if (temp > 0 && temp < 20){
    climate = "cold";
}
else if ( temp > 20 && temp < 35){
    climate = "modearte";
}
else {
    climate= "hot";
}
console.log(climate)
}
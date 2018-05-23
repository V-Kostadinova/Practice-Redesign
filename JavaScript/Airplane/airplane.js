function time(){
    let hours=23*60;
    let minutes=50;
    let duration=75;
    let total= hours+minutes+duration;
    let h = Math.floor(total / 60);  
    let min = total % 60;
    if(h<23){
        return h + "h" + ' ' + min + "m";
   }
    else{
        return Math.floor((total-1440)/60) + "h" + ' ' + (total-1440)%60 + "m";
    }
}
console.log(time());

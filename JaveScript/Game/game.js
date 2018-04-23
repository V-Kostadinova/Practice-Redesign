let tedi=50;
let niki=100;
let radi=30;
let ivo=20;

let tediPoints=tedi-(tedi*10/100);
let nikiPoints=niki-(niki*5/100);

let girls=tediPoints+nikiPoints;
let boys=radi+ivo;

let boysPoints=Math.ceil((radi+ivo)/6);
let finishPointsBoys=boys-boysPoints;

if(girls>finishPointsBoys){
    console.log(Math.max(tediPoints,nikiPoints,radi,ivo));
    console.log('GIRLS POWER');
    console.log('Difference between points:'+ (girls-finishPointsBoys));
}
else if(finishPointsBoys>girls){
    console.log(Math.max(tediPoints,nikiPoints,radi,ivo));
    console.log('BOYS POWER');
    console.log('Difference between points:'+ Math.ceil(finishPointsBoys-girls));
}
else{
    console.log('EQUAL POINTS')
}

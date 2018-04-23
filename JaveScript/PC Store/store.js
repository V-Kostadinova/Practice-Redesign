    let processor= 500;
    let videoCard= 200;
    let ram=80;
    let numberRam=2;
    let reductionProcessor=processor*5/100;
    let reductionVideoCars=videoCard*5/100
    let totalResuction=reductionProcessor+reductionVideoCars;
    let oneDolar=1.57;
    let total=processor+videoCard+(ram*numberRam)-totalResuction;

function totalPrice(){
  
    return 'Money needed - ' + Number(total*oneDolar).toFixed(2) + ' ' + 'leva.';
}

console.log(totalPrice());

var diamondNum=0;
function change(name, value) {
    if(name==0)  document.getElementById('diamond').innerHTML = diamondNum+value;
    else document.getElementById('diamond').innerHTML = diamondNum-value;
}
function Not(value) {
    var y="You have got 2 diamonds! Good Job!";
    var f="Finished";
    if(this.innerHTML==f){
        this.innerHTML=y;
        change(0,2);
    }
    else{
        this.innerHTML=f;
        change(1,2);
    }
}
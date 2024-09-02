function buttonClick(val){
    var currentValue=document.getElementById('screen').value;
    document.getElementById('screen').value = currentValue + val;
}
function buttonclear(){
    document.getElementById('screen').value=''
}
function equalClick(){
    var text=document.getElementById('screen').value;
    var result=eval(text);
    document.getElementById('screen').value=result;
}
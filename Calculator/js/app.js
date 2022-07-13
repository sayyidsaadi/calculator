function button(data){
    let output = document.getElementById('output');
    output.value += data;
}
function calculation(calculation){
    let output = document.getElementById('output').value;
    let total = eval(output);
    document.getElementById('output').value=total;
}
function deleteD(){
    let output = document.getElementById('output').value='';
}
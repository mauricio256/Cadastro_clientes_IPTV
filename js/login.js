
const input = document.querySelectorAll('input');
const span = document.querySelectorAll('.span');

function validaLogin(){
    if(input[0].value === ""){
        input[0].style="border-bottom: 5px solid orange";
        span[0].style="color: orange";
        span[0].innerHTML ="Este campo não pode ser vazio";
        input[0].focus();
        return false;
    }else{
        span[0].innerHTML="";
    }

    if(input[1].value === ""){
        input[1].style="border-bottom: 5px solid orange";
        span[1].style="color: orange";
        span[1].innerHTML ="Este campo não pode ser vazio";
        input[1].focus();
        return false;
    }else{
        span[0].innerHTML="";
    }

}

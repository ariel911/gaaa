$(document).ready(inicio);

function inicio(){
    $(".div1").mouseenter(random);
    $(".div2").click(alerta);
}

function random(){
    let num = Math.floor(Math.random() * (250 - 50)) + 50;
    $(".div1").css("margin-left",num);
    let b = Math.floor(Math.random() * (250 - 50)) + 50;
    $(".div1").css("margin-right",b);
    let c = Math.floor(Math.random() * (300 - 50)) + 50;
    $(".div1").css("margin-top",c);
    let d = Math.floor(Math.random() * (300 - 50)) + 50;
    $(".div1").css("margin-bottom",d);
}
function alerta(){
$(".t").css("color","black");
}

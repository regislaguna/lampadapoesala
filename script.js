
function AcenderALampada () {
    if (!LampadaQuebrada())
    {
        document.getElementById('lampada').src = "./Images/LampadaAcesa.png";
    }
   
}

function ApagarALampada () {
    
    if (!LampadaQuebrada()){
        document.getElementById('lampada').src = "./Images/LampadaApagada.png";
    }
   
}

function QuebrarALampada () {
    document.getElementById('lampada').src = "./Images/LampadaQuebrada.png";
}

function LampadaQuebrada () {
    return document.getElementById('lampada').src.indexOf('Quebrada') > -1;
}

function RestaurarALampada () {
    document.getElementById('lampada').src = "./Images/LampadaApagada.png";
}
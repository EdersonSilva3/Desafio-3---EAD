function verificar(){
    var mes = document.getElementById('mes').value;

    if (mes == "dezembro" || mes == "janeiro" || mes == "fevereiro"){
        var estacao = "verão";
       
    document.getElementById('resultado').innerHTML="A estação correspondente ao mês de "+mes+" é "+estacao+"!";
    }

    if (mes == "março" || mes == "abril" || mes == "maio"){
        var estacao = "outono";
       
    document.getElementById('resultado').innerHTML="A estação correspondente ao mês de "+mes+" é "+estacao+"!";
    }

    if (mes == "junho" || mes == "julho" || mes == "agosto"){
        var estacao = "inverno";
       
    document.getElementById('resultado').innerHTML="A estação correspondente ao mês de "+mes+" é "+estacao+"!";
    }

    if (mes == "setembro" || mes == "outubro" || mes == "novembro"){
        var estacao = "primavera";
       
    document.getElementById('resultado').innerHTML="A estação correspondente ao mês de "+mes+" é "+estacao+"!";
    }
}
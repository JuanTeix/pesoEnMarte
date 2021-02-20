
let resultado = document.getElementById('h2');
const btn = document.getElementById('btn-peso').addEventListener("click", calcular)

function calcular(){
    const pesoUsuario = document.getElementById('input-peso').value 
    const peso = parseInt(pesoUsuario);
  
    if(!peso){
        alert("Tu peso no puede estar vacio");
    }
    else if (peso === 0){
        alert("Solo podemos calcular tu peso en vida. Lo sentimos");
    }
    else{
        const gravedadTierra = 9.8;
        const gravedadMartes = 3.7;
        const pesoMarte = dosDigitos(peso * gravedadMartes / gravedadTierra)
        resultado.innerHTML = `Tu peso en el planeta rojo es ${pesoMarte} Kg`
    }
}

function  dosDigitos(num){
    return Number.parseFloat(num).toFixed(2)
}
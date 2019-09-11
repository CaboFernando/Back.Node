const curso = {
    nome: 'NodeJs',
    ano: 2019,
    autor: 'Duda'
};
console.log(curso);

function sum(x, y){
    return x + y;
}

let sum = function(x, y){
    return x + y;
}

(function(){
    const x = 2;
    const y = 3;
    console.log(x + y);
})()

let sum = (x, y) => x + y;

function teste(nome, ...dados){
    console.log(dados.length);
}

teste("Duda", 1,2,3,4,5,6,7);



/*AGORA È IMPORTANTE*/

const esperaAlgoAsybc = () => {
    return new Promise(resolve =>{
        setTimeout(() => resolve('Diga Algo'), 3000)
    })
}

esperaAlgoAsybc()
.then(
    valor => {
        console.log(valor);
    }
);
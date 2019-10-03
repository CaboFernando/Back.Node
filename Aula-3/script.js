console.log("Avaliando o exemplo.js")

var invisivel = () => {
    console.log("invisivel");
};

exports.mensagem = "oi";

exports.falar = () => {
    console.log(exports.mensagem);
};
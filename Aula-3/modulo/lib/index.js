const fs = require("fs");
const createStream = fs.createWriteStream("Aula-03.txt");
createStream.write("Hey, hey vc que está lendo isso, tudo bem? Então meu nome é Carlão Jesus Latino da Cor do pegaco e meu alias é macaco supremo, saiba que este é o meu primerio móduo na npm, vlw, flws!!!");
createStream.end();
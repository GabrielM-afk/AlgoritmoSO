let nParticoes = prompt("Digite o numero de partições");
let tamanhoParticao = [];

let nProcesso = prompt("Digite o numero de processos");
let tamanhoProcesso = [];

function pegarDados(qtde,tamanho,tipo = nParticoes){
    for(i=0; i<qtde;i++){
        if(tipo == nParticoes){
            tamanho[i] = prompt("Digite o tamanho da partição "+i);
        }else{
            tamanho[i] = prompt("Digite o tamanho do processo "+i);
        }
    }

}

pegarDados(nParticoes,tamanhoParticao);
pegarDados(nProcesso,tamanhoProcesso, nProcesso);

function firt_fit(){
    
    const first = [{
            tamPart: "",
            processo: ""
        }];

    tamanhoParticao.forEach((el, i) => {
        if(el[i] > tamanhoProcesso[i]){
            first.push({
                tamPart: el[i],
                processo: tamanhoProcesso[i]
            });

            
        }
        console.log(el, "Posicçao" + el[i])
    });

}

firt_fit()
// for(i = 0; i < nParticoes; i++){
    //     if(tamanhoProcesso[i] < tamanhoParticao[i]){

    //         first.push({
    //             tamPart: tamanhoParticao[i],
    //             processo: tamanhoProcesso[i]
    //         });
            
    //         if(first.tamPart !== "" && first.processo !== ""){
    //             console.log("Entrou aqui")
    //         }
    //     }

    // }

    // console.log(first)
async function fnPegarFilmes() {  //async faz com que o restante do código seja executado enquanto a função aguarda o seu término                 
    let filmes = await fetch("dados-filmes.json") //método fetch acompanhado de uma função await, espera a resposta do fetch antes de seguir pra próxima linha dentro da função
    console.dir(filmes)     //console.dir, exibe arquivos 
    
    let filmesTratados = await filmes.json() 

    filmesTratados.slice(14,17).forEach(function (){
     filmesTratados.querySelector(FilmeAtual).innerHTML +=
     `
     <div>$(filmeAtual.sinopse)</div>
     `
    })


    console.dir(filmesTratados)
}



fnPegarFilmes()
console.log("oi")

  // dando fetch num arquivo json, contendo uma array contendo algumas variáveis, e trazendo-as para o index, numa div pré-existente
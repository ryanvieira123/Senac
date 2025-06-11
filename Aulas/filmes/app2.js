async function fnPegarFilmes() {  //async faz com que o restante do código seja executado enquanto a função aguarda o seu término                 
    let filmes = await fetch("dados-filmes.json") //método fetch acompanhado de uma função await, espera a resposta do fetch antes de seguir
    console.dir(filmes)     //console.dir, exibe arquivos 
    let filmesTratados = await filmes.json() 
    console.dir(filmesTratados)
}



fnPegarFilmes()
console.log("oi")

  
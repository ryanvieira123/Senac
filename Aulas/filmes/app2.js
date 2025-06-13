/*async function fnPegarFilmes() {  //async faz com que o restante do código seja executado enquanto a função aguarda o seu término                 
    let filmes = await fetch("dados-filmes.json") //método fetch acompanhado de uma função await, espera a resposta do fetch antes de seguir
    console.dir(filmes)     //console.dir, exibe arquivos 
    let filmesTratados = await filmes.json() 
    console.dir(filmesTratados)
}



fnPegarFilmes()
console.log("oi")
*/

async function fnPegarFilmes() {        //função async, pega dados de um arquivo externo e os retorna no console
  let filmes = await fetch("dados-filmes.json") //variável contendo um fetch await de um arquivo json
  let filmesTratados = await filmes.json()       //var contendo a variável filmes acompanhada da função await contendo o fetch da variável filmes
  filmesTratados.forEach((filmeAtual) => {    //método forEach (percorre cada elemento da array contida na variável filmesTratados), 

    //filmesAtual foi criado dentro do metodo forEach   //o método forEach executa uma função para cada elemento encontrado em uma variável, especialmente arrays, no caso um console.log de cada variável contida no arquivo JSON requisitado
    document.querySelector(".lista-filmes").innerHTML +=
      `
       <div class="card-filme">
          <img src=${filmeAtual.foto}>
          <h3>${filmeAtual.titulo}</h3>
          <span>${filmeAtual.ano}</span>
          <h4>${filmeAtual.genero}</h4>
          <p>${filmeAtual.sinopse}</p>
          <span>⭐${filmeAtual.avaliacao}</span>
       </div>`

    console.log(filmeAtual)
  })
}

fnPegarFilmes()
console.log("oi")




async function pegarFilmes() {
  const filmes = await fetch("dados-filmes.json")

  console.dir(filmes.json())
}


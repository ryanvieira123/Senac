// JSON - javascript object notation

{ 
    titulo: "Jurassic Park", 
    foto: "filme1.webp", 
    avaliacao: "10/10",
    duracao: "1h50m",
}

{
    titulo: "Karate Kid Lendas",
    foto: "filme2.jpg",
    avaliacao: "5/10",
    duracao: "1h30m"
}

{
    titulo: "Lilo e Stitch",
    foto: "filme3.jpg",
    avaliacao: "7/10",
    duracao: "2h00m"
}

{
    titulo: "Pecadores",
    foto: "filme4.jpg",
    avaliacao: "9/10",
    duracao: "2h03m"
}

{
    titulo: "Vingadores Guerra Infinita",
    foto: "avengers.png",
    avaliacao:"9/10",
    duracao: "2h20m"
}

//a partir desta das variáveis criadas, um banner  

//caso fosse um id, # seria utilizado, #lista-filmes, caso a string div fosse selecionada, a primeira do html seria selecionada, querySelectorAll seleciona todos os seletores correspondentes



 //   function fnMontarCartao(filmeAtual) {   
       /* document.querySelector(".lista-filmes").innerHTML +=  /* */
        
        
     // Usamos "=" para substituir todo o conteúdo da div .lista-filmes.
     // Se quisermos adicionar (acumular) vários filmes, usamos "+=".
       /* 
        `
            <div class="card-filme">
                <img src="img/${filmeAtual.foto}">
                <h3>${filmeAtual.titulo}</h3>
                <span>⭐ ${filmeAtual.avaliacao}</span>
            </div>
        `;
    }
    */
    
//DOM - Document Object Model





let todosOsFilmes = [filme1, filme2, filme3, filme4, filme5] //var contendo uma array com 5 variáveis 

todosOsFilmes.forEach((itemAtual)=> {        //método forEach, 
 
    console.log("alerta")

    document.querySelector(".lista-filmes").innerHTML += `
        <div class="card-filme">
         <img src="img/${itemAtual.foto}">
            <h3>${itemAtual.titulo}></h3>
            <span>⭐ ${itemAtual.avalicao}</span>
        </div>
        `
})

//PASSO 1 - precisamos criar uma varialvel no JS pra trabalhar com a listagem de pokedevs
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");
console.log(listaSelecaoPokedevs)

//PASSO 2 - Identificar o evento de clique no elemento da listagem
listaSelecaoPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click", () => {
        //PASSO 3 - remover a classe aberto só do cartão que tá aberto
        const cartaoPokedevAberto = document.querySelector(".aberto");
        cartaoPokedevAberto.classList.remove("aberto");
        
        //PASSO 4 - ao clicar em um pokedev da listagem pegamos o id desse pokedev pra saber qual cartão abrir
        const idPokedevSelecionado = pokedev.attributes.id.value;

        const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;

        const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
        cartaoPokedevParaAbrir.classList.add("aberto");

        //PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
        const pokedevAtivoNaListagem = document.querySelector(".ativo");
        pokedevAtivoNaListagem.classList.remove("ativo");

        //PASSO 6 - adicionar a classe ativo no pokedev selecionado na listagem
        const PokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
        PokedevSelecionadoNaListagem.classList.add("ativo");
        
    })
})
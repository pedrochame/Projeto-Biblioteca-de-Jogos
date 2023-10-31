//Variáveis
const jogos = document.querySelector("#jogos");
const nomeNovoJogo = document.querySelector("#nomeNovoJogo");
const plataformaNovoJogo = document.querySelector("#plataformaNovoJogo");
const capaNovoJogo = document.querySelector("#capaNovoJogo");
const botaoAdicionarJogo = document.querySelector("#botaoAdicionarJogo");

//Variáveis (Modal - Editar Jogo)
const modal = document.querySelector("#modal");
const nomeJogoEditar = document.querySelector("#nomeJogoEditar");
const plataformaJogoEditar = document.querySelector("#plataformaJogoEditar");
const capaJogoEditar = document.querySelector("#capaJogoEditar");
const botaoSalvarEditar = document.querySelector("#botaoSalvarEditar");
const botaoFecharEditar = document.querySelector("#botaoFecharEditar");

//Funções

function consultaRegistroAPI(id) {
  // URL da API que você deseja consultar

  const apiUrl = "https://api-bj.up.railway.app/jogos/" + id;
  // Fazendo a solicitação GET à API usando fetch
  fetch(apiUrl)
    .then((response) => {
      // Verifica se a resposta da API está OK (código 200)
      if (!response.ok) {
        throw new Error("Erro na solicitação à API");
      }
      // Converte a resposta em formato JSON
      return response.json();
    })
    .then((data) => {
      // Faça o que você quiser com os dados da API
      nomeJogoEditar.value = data.nome;
      plataformaJogoEditar.value = data.plataforma;
      capaJogoEditar.value = data.capa;
      botaoSalvarEditar.id += "_" + data.id;
    })
    .catch((error) => {
      // Trate erros, se houver algum
      console.error("Ocorreu um erro:", error);
    });
}

function pegaRegistrosAPI() {
  while (jogos.firstChild) {
    jogos.removeChild(jogos.firstChild);
  }

  // URL da API que você deseja consultar
  const apiUrl = "https://api-bj.up.railway.app/jogos";

  // Fazendo a solicitação GET à API usando fetch
  fetch(apiUrl)
    .then((response) => {
      // Verifica se a resposta da API está OK (código 200)
      if (!response.ok) {
        throw new Error("Erro na solicitação à API");
      }
      // Converte a resposta em formato JSON
      return response.json();
    })
    .then((data) => {
      // Faça o que você quiser com os dados da API
      for (let i = 0; i < data.length; i++) {
        //Linha do Jogo
        var jogo = document.createElement("div");
        jogo.id = "jogo";
        jogos.appendChild(jogo);

        //Dados do Jogo
        //var id = document.createElement("p");
        //id.textContent = "ID: " + data[i].id;
        //jogo.appendChild(id);

        //Nome
        var nome = document.createElement("p");
        nome.textContent = "Nome: " + data[i].nome;
        jogo.appendChild(nome);
        //Plataforma
        var pla = document.createElement("p");
        pla.textContent = "Plataforma: " + data[i].plataforma;
        jogo.appendChild(pla);
        //Capa
        var capa = document.createElement("img");
        capa.src = data[i].capa;
        capa.className = "capa";
        jogo.appendChild(capa);

        //Botão de Excluir
        var botaoExcluir = document.createElement("button");
        botaoExcluir.className = "botaoExcluir";
        botaoExcluir.id = "botaoExcluirJogo_" + data[i].id;
        botaoExcluir.textContent = "Excluir";
        jogo.appendChild(botaoExcluir);

        //Botão de Editar
        var botaoEditar = document.createElement("button");
        botaoEditar.className = "botaoEditar";
        botaoEditar.id = "botaoEditarJogo_" + data[i].id;
        botaoEditar.textContent = "Editar";
        jogo.appendChild(botaoEditar);
      }
    })
    .catch((error) => {
      // Trate erros, se houver algum
      console.error("Ocorreu um erro:", error);
    });
}

function incluiRegistroAPI() {
  const data = {
    nome: nomeNovoJogo.value,
    plataforma: plataformaNovoJogo.value,
    capa: capaNovoJogo.value,
  };

  // Crie um objeto de requisição com as opções necessárias
  const opcoes = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Especifique o tipo de conteúdo
    },
    body: JSON.stringify(data), // Converta os dados para o formato JSON
  };
  // URL da API que você deseja consultar
  const apiUrl = "https://api-bj.up.railway.app/jogos";

  // Fazendo a solicitação GET à API usando fetch
  fetch(apiUrl, opcoes)
    .then((response) => {
      // Verifica se a resposta da API está OK (código 200)
      if (!response.ok) {
        throw new Error("Erro na solicitação à API");
      }
      // Converte a resposta em formato JSON
      return response.json();
    })
    .then((data) => {
      // Faça o que você quiser com os dados da API
      alert(data);
    })
    .catch((error) => {
      // Trate erros, se houver algum
      console.error("Ocorreu um erro:", error);
    });
}

function editarRegistroAPI(id) {
  const data = {
    id: id,
    nome: nomeJogoEditar.value,
    plataforma: plataformaJogoEditar.value,
    capa: capaJogoEditar.value,
  };

  // Crie um objeto de requisição com as opções necessárias
  const opcoes = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json", // Especifique o tipo de conteúdo
    },
    body: JSON.stringify(data), // Converta os dados para o formato JSON
  };
  // URL da API que você deseja consultar
  const apiUrl = "https://api-bj.up.railway.app/jogos/" + id;

  // Fazendo a solicitação GET à API usando fetch
  fetch(apiUrl, opcoes)
    .then((response) => {
      // Verifica se a resposta da API está OK (código 200)
      if (!response.ok) {
        throw new Error("Erro na solicitação à API");
      }
      // Converte a resposta em formato JSON
      return response.json();
    })
    .then((data) => {
      // Faça o que você quiser com os dados da API
      alert(data);
    })
    .catch((error) => {
      // Trate erros, se houver algum
      console.error("Ocorreu um erro:", error);
    });
}

function excluiRegistroAPI(idJogo) {
  const data = idJogo;

  // Crie um objeto de requisição com as opções necessárias
  const opcoes = {
    method: "DELETE",
  };
  // URL da API que você deseja consultar
  const apiUrl = "https://api-bj.up.railway.app/jogos/" + idJogo;

  // Fazendo a solicitação GET à API usando fetch
  fetch(apiUrl, opcoes)
    .then((response) => {
      // Verifica se a resposta da API está OK (código 200)
      if (!response.ok) {
        throw new Error("Erro na solicitação à API");
      }
      // Converte a resposta em formato JSON
      return response.json();
    })
    .then((data) => {
      // Faça o que você quiser com os dados da API
      alert(data);
    })
    .catch((error) => {
      // Trate erros, se houver algum
      console.error("Ocorreu um erro:", error);
    });
}

//Eventos

//Adicionar Jogo
botaoAdicionarJogo.addEventListener("click", () => {
  if (nomeNovoJogo.value !== "" && plataformaNovoJogo.value !== "") {
    incluiRegistroAPI();
  } else {
    alert(
      "Preencha ao menos Nome e Plataforma. Lembrando que você pode inserir apenas jogos que ainda não estão na lista."
    );
  }
});

//Excluir ou Editar Jogo
jogos.addEventListener("click", (event) => {
  var elemento = event.target;
  if (elemento.className === "botaoExcluir") {
    excluiRegistroAPI(parseInt(elemento.id.split("_")[1]));
  } else if (elemento.className === "botaoEditar") {
    consultaRegistroAPI(parseInt(elemento.id.split("_")[1]));
    modal.style.display = "block";
  }
});

// Salvar edição de jogo dentro do modal
modal.addEventListener("click", (event) => {
  var elemento = event.target;
  if (elemento.className === "modalBotao") {
    editarRegistroAPI(parseInt(elemento.id.split("_")[1]));
  }
});

// Feche o modal se o usuário clicar fora dele
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

//Main
pegaRegistrosAPI();

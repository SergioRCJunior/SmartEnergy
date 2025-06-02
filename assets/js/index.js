document.addEventListener("DOMContentLoaded", function () {
  const verMaisMembrosButton = document.getElementById("avaliação");
  const feedbacksContainer = document.querySelector(
    "#testimonials_content > #feedbacks"
  );

  const novosMembros = [
    {
      nome: "Francisco Vinicius",
      imagem: "./assets/img/FVinicius.jpg",
      avaliacao:
        "Como back-end minha experiência nesta esmpresa foi impecável, nela aprendi varias coisas que não sabia.",
      estrelas: 2,
      cargo: "Dev Back-End",
    },
    {
      nome: "Vinicius Andrade",
      imagem: "./assets/img/ViniciusA.jpg",
      avaliacao:
        "Trabalhar na documentação foi uma experiência enriquecedora, que exigiu atenção aos detalhes, organização e clareza.",
      estrelas: 3,
      cargo: "Document",
    },
    {
      nome: "Gabriel",
      imagem: "./assets/img/Gabriel.jpg",
      avaliacao:
        "Atuar como Dev front-end na criação do site SmartEnergy foi uma experiência desafiadora e gratificante.",
      estrelas: 5,
      cargo: "IOT",
    },
    {
      nome: "Herick Montecino",
      imagem: "./assets/img/Herick.jpg",
      avaliacao:
        "Sou muito grato pela experiência que conquistei trabalhando no front-end desenvolvi e me desafie constantemente, empresa incrível.",
      estrelas: 4,
      cargo: "Dev Front-End",
    },
    {
      nome: "João Pedro",
      imagem: "./assets/img/João.jpg",
      avaliacao:
        "Como desenvolvedor do setor Arduino/IoT foi uma experiência desafiadora, complexa mas ao mesmo tempo gratificante e recompensadora.",
      estrelas: 5,
      cargo: "IOT",
    },
    {
      nome: "Eduardo Silva",
      imagem: "./assets/img/Eduardo.jpg",
      avaliacao:
        "A experiência com documentação foi positiva e produtiva. Aprimorei habilidades organizacionais e contribuí para a eficiência dos processos.",
      estrelas: 4,
      cargo: "Document",
    },
    {
      nome: "Ray de Souza",
      imagem: "./assets/img/Ray.jpg",
      avaliacao:
        " Trabalhar na documentação acredito que foi uma ótima experiência, tanto em termos de organização quanto de aprendizado.",
      estrelas: 4,
      cargo: "Document",
    },
    {
      nome: "Kauã Henrique",
      imagem: "./assets/img/Kaka.jpg", // Você usou a imagem do Eduardo antes, mantive assim
      avaliacao:
        "Como desenvolvedor back-end minha experiência foi gratificante, aprendi muito sobre códigos e comunicação entre equipe.",
      estrelas: 5,
      cargo: "Dev Back-End",
    },
    {
      nome: "Vinicius Gomes",
      imagem: "./assets/img/ViniciusG.jpg", // Adicione o caminho da imagem do Vinicius Gomes
      avaliacao:
        "A experiência em trabalhar com circuitos e códigos envolvendo o arduino foi algo que me gerou grandes desafios que se tornaram aprendizados.",
      estrelas: 3,
      cargo: "IOT",
    },
  ];

  let membrosAdicionados = 0;
  const membrosPorCarregamento = 4; // Carregar 4 membros por clique

  function adicionarMembros() {
    for (
      let i = 0;
      i < membrosPorCarregamento && membrosAdicionados < novosMembros.length;
      i++
    ) {
      const membro = novosMembros[membrosAdicionados];
      const feedbackDiv = document.createElement("div");
      feedbackDiv.classList.add("feedback");

      const avatarImg = document.createElement("img");
      avatarImg.src = membro.imagem || ""; // Use uma string vazia se não houver imagem
      avatarImg.classList.add("feedback-avatar");
      avatarImg.alt = membro.nome;

      const feedbackContentDiv = document.createElement("div");
      feedbackContentDiv.classList.add("feedback-content");

      const nomeEquipeP = document.createElement("p");
      nomeEquipeP.classList.add("equipe-smart");
      nomeEquipeP.textContent = membro.nome;

      const cargoEquipe = document.createElement("p");
      cargoEquipe.classList.add("funcao-equipe");
      cargoEquipe.textContent = membro.cargo;

      const estrelasSpan = document.createElement("span");
      for (let j = 0; j < membro.estrelas; j++) {
        const starIcon = document.createElement("i");
        starIcon.classList.add("fa", "fa-star");
        estrelasSpan.appendChild(starIcon);
      }
      nomeEquipeP.appendChild(estrelasSpan);

      const avaliacaoP = document.createElement("p");
      avaliacaoP.textContent = membro.avaliacao;

      feedbackContentDiv.appendChild(cargoEquipe);
      feedbackContentDiv.appendChild(nomeEquipeP);
      feedbackContentDiv.appendChild(avaliacaoP);

      feedbackDiv.appendChild(avatarImg);
      feedbackDiv.appendChild(feedbackContentDiv);

      cargoEquipe;

      feedbacksContainer.appendChild(feedbackDiv);
      membrosAdicionados++;
    }

    if (membrosAdicionados === novosMembros.length) {
      verMaisMembrosButton.style.display = "none"; // Ocultar o botão quando todos forem carregados
    }
  }

  // Adicionar evento de clique ao botão
  verMaisMembrosButton.addEventListener("click", adicionarMembros);
});

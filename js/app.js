function alterarStatus (jogo) {
    let jogoClicado = document.getElementById(`game-${jogo}`);
    let botao = jogoClicado.querySelector('.dashboard__item__button');
    let imagem = jogoClicado.querySelector('.dashboard__item__img');
    if (botao.classList.contains('dashboard__item__button--return')) {
      botao.classList.remove('dashboard__item__button--return');
      imagem.classList.remove('dashboard__item__img--rented');
      botao.textContent = 'Alugar';
    } else {
      botao.classList.add('dashboard__item__button--return');
      imagem.classList.add('dashboard__item__img--rented');
      botao.textContent = 'Devolver';

    }

    
}
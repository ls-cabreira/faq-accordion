const listaBotao = document.querySelectorAll('.item__btn');

listaBotao.forEach(btn => {
    btn.addEventListener('click', () => {
        accordion(btn);
    })
})

function accordion(botao) {
    const descricao = botao.nextElementSibling;
    const altura = descricao.scrollHeight;
    const plusIcon = botao.querySelector('.icons__plus');
    const minusIcon = botao.querySelector('.icons__minus');

    if (descricao.style.maxHeight) {
        descricao.style.maxHeight = null;
        plusIcon.style.display = 'initial';
        minusIcon.style.display = 'none';
    } else {
        descricao.style.maxHeight = altura + 'px';
        minusIcon.style.display = 'initial';
        plusIcon.style.display = 'none';
    }
}
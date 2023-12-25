function menuResponsivo(){
    let botao = document.querySelector('#botao')
    let mp = document.querySelector('#p')
    let mr = document.querySelector('#m-h')

    if (mr.style.display == 'block'){
        mr.style.display = 'none';
        document.querySelector('.botao').src = "imagens/menu.svg";
    }
    else{
        mr.style.display = 'block';
        document.querySelector('.botao').src = "imagens/close.svg";
    }
}
import GeraCPF from './modules/GeraCPF';

import './assets/css/style.css';

(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();


(function(){
    const botao = document.querySelector('.gerar-cpf');

    botao.addEventListener('click', ()=> {
       location.reload();
    });
})();
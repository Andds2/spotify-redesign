"use strict";
const cardIds = [
    'card-curtidas',
    'card-road',
    'card-rock',
    'card-emo',
    'card-indie',
    'card-lofi'
];
const musicIds = [
    'tbody-music-1',
    'tbody-music-2',
    'tbody-music-3',
    'tbody-music-4',
    'tbody-music-5'
];
const histIds = [
    'historico-1',
    'historico-2',
    'historico-3',
    'historico-4',
    'historico-5',
];
const lancamentosIds = [
    'lancamento-1',
    'lancamento-2',
    'lancamento-3',
    'lancamento-4',
    'lancamento-5',
];
const thisIsIds = [
    'thisis-1',
    'thisis-2',
    'thisis-3',
    'thisis-4',
    'thisis-5',
];
cardIds.forEach(id => {
    const card = document.getElementById(id);
    if (card) {
        card.addEventListener('mouseover', () => showPlay(id));
        card.addEventListener('mouseout', () => hidePlay(id));
    }
});
musicIds.forEach((id, index) => {
    const music = document.getElementById(id);
    if (music) {
        music.addEventListener('mouseover', () => musicOver(id));
        music.addEventListener('mouseleave', () => musicOut(id, index + 1));
    }
});
histIds.forEach(id => {
    const historico = document.getElementById(id);
    if (historico) {
        historico.addEventListener('mouseover', () => showDescricao(id));
        historico.addEventListener('mouseout', () => hideDescricao(id));
    }
});
lancamentosIds.forEach(id => {
    const lancamento = document.getElementById(id);
    if (lancamento) {
        lancamento.addEventListener('mouseover', () => showDescricao(id));
        lancamento.addEventListener('mouseout', () => hideDescricao(id));
    }
});
thisIsIds.forEach(id => {
    const thisis = document.getElementById(id);
    if (thisis) {
        thisis.addEventListener('mouseover', () => showDescricao(id));
        thisis.addEventListener('mouseout', () => hideDescricao(id));
    }
});
const showPlay = (div) => {
    const btn_play = document.querySelector(`#${div} #btn-play`);
    btn_play.classList.remove('opacity-0');
    btn_play.classList.add('opacity-100');
};
const hidePlay = (div) => {
    const btn_play = document.querySelector(`#${div} #btn-play`);
    btn_play.classList.remove('opacity-100');
    btn_play.classList.add('opacity-0');
};
const musicOver = (music) => {
    const music_number = document.querySelector(`#${music} #music_number`);
    music_number.innerHTML = '<button><i class="fa-solid fa-play"></i></button>';
};
const musicOut = (music, number) => {
    const music_number = document.querySelector(`#${music} #music_number`);
    music_number.innerHTML = `${number}`;
};
const showDescricao = (div) => {
    const descricao = document.querySelector(`#${div} #descricao`);
    descricao.classList.remove('w-0');
    descricao.classList.add('w-44');
};
const hideDescricao = (div) => {
    const descricao = document.querySelector(`#${div} #descricao`);
    descricao.classList.remove('w-44');
    descricao.classList.add('w-0');
};

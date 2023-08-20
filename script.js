const FOOTER = document.querySelector('.footer');
const SECTION_LIST = document.querySelectorAll('.section');
const HEADER_ITEM = document.querySelectorAll('.header__li');
const HEADER_ITEM_ICONS = document.querySelectorAll('.header__li--icons');
const HEADER_SVG = document.querySelector('.header__svg');
const colorNegro = 'var(--black-color)' ;
const colorBlanco = 'var(--white-color)' ;

SECTION_LIST.forEach((index) => {
    index.addEventListener('mouseover', mostrarNav);
});

SECTION_LIST.forEach((index) => {
    index.addEventListener('mouseout', mostrarNav);
});

function mostrarNav(e){
    let sectionHero = e.target.closest('.section__hero');
    let sectionAccesories = e.target.closest('.section__accessories');
    !sectionHero ?  recorrerNodo(HEADER_ITEM, colorNegro) : recorrerNodo(HEADER_ITEM, colorBlanco);
    !sectionHero ?  recorrerNodo(HEADER_ITEM_ICONS, colorNegro) : recorrerNodo(HEADER_ITEM_ICONS, colorBlanco);
    !sectionHero ?  HEADER_SVG.style.color = colorNegro : HEADER_SVG.style.color = colorBlanco;
    sectionAccesories ? FOOTER.style.opacity = '1' : FOOTER.style.opacity = '0'; 
} 

function recorrerNodo(nodo, color) {
    nodo.forEach((index) => {
        index.style.color = color;
    });
}


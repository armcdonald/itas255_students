let $ = sel => document.querySelector(sel);

addEventListener('load', () => {
    let pSel = document.querySelector('p');
    pSel.style.color = 'red';
    pSel.style.fontSize = '20px';
    pSel.style.fontFamily = 'Arial';
    pSel.style.backgroundColor = 'yellow';
    pSel.style.border = '1px solid black';
    pSel.style.padding = '10px';
    pSel.style.margin = '10px';
    pSel.style.borderRadius = '10px';
})

addEventListener('load', () => {
    let pSel = document.querySelectorAll('p');
    pSel.forEach(p => {
        p.style.fontSize = '20px';
        p.innerHTML = 'Change All Paragraphs';
    })
})

addEventListener('load', () => {
    let idSel = $('#hasId');
    idSel.style.color = 'red';
    idSel.style.fontSize = '3em';
});


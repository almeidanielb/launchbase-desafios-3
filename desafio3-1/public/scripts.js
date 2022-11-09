const   modalOverlay = document.querySelector(".modal-overlay")
const   cards = document.querySelectorAll(".card")

for (let card of cards) {
    card.addEventListener("click", function(){
        const videoId = card.getAttribute("id");
        modalOverlay.classList.add('active')
        modalOverlay.classList.add("windowed")
        modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${videoId}`
    })
}

document.querySelector(".close-modal").addEventListener("click", function() {
    //part 1
    //se conter fullscreen
        //remover fullscreen
    modalOverlay.classList.remove("active")
    if (modalOverlay.classList.contains("windowed")) {
        modalOverlay.classList.remove("windowed")
    } if (modalOverlay.classList.contains('fullscreen')) {
        modalOverlay.classList.remove("fullscreen")
    }
    modalOverlay.querySelector('iframe').src = ""
})

/* Além do botão de fechar o modal, é preciso implementar a funcionalidade de maximizar o modal 
(dica: utilize a mesma lógica implementada para fechar o modalOverlay, mas trabalhe com a classe modal e utilize o método contains
do classList para verificar se o elemento está ou não com a classe maximize). */

document.querySelector(".maximize-modal").addEventListener("click", function() {
    if (!modalOverlay.classList.contains("fullscreen")) { //no momento, está em modo janela
        modalOverlay.classList.remove("windowed")           
        modalOverlay.classList.add("fullscreen")
    }   else {
        modalOverlay.classList.remove("fullscreen")
        modalOverlay.classList.add("windowed")
    }
})

// element.classList.contains(className);


// .modal-overlay.active.windowed -> inicio com essa classe, e quando clicar no botão de maximizar, se contem windowed, remove e coloca fullscreen, e se não, remove
// fullscreen e coloca windowed (lógica).

// No fullscreen, largura e altura 100%, e no modo janela ~75%. 





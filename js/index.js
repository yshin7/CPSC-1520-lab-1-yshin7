 
const openModal = document.querySelector("#open-modal");
const modalWindow = document.querySelector("#modal-window");
const closeButton = document.querySelector("#close-button");

openModal.addEventListener("click", onModal);
closeButton.addEventListener("click", onClose);

function onModal (e) {
    modalWindow.showModal();
}

function onClose (e) {
    modalWindow.close();
}


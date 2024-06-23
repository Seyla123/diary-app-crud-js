import { createViewModal } from "../components/viewModal.js";

document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".content-entry");
    const viewModal = document.querySelector("#viewModal");
    const closeButtons = document.querySelectorAll(".closeView");
    const openViewModal = () => {
       document.body.style.overflow = "hidden";
    };

    const closeViewModal = () => {
        document.querySelector('#viewModalSelection').innerHTML = '';
        document.body.style.overflow = "auto";
    };
    closeButtons.forEach((closeButton) => {
        closeButton.addEventListener('click',closeViewModal)  
    })
    cards.forEach((card) => {
        card.addEventListener("click", (e) => {
            e.preventDefault();
            const id = card.getAttribute("id")
            let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
            const entry = entries.filter((item) => item.id == id)[0];
            document.querySelector('#viewModalSelection').innerHTML = createViewModal(entry.title,entry.content,entry.date);
            openViewModal();
        });
    });
    window.test = closeViewModal;
})

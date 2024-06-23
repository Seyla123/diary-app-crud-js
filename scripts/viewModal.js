document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".container-entry");
    const viewModal = document.querySelector("#viewModal");
    const closeButton = document.querySelector(".closeView");
    const openViewModal = () => {
        viewModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    };

    const closeViewModal = () => {
        viewModal.style.display = "none";
        document.body.style.overflow = "auto";
    };
    closeButton.addEventListener('click',closeViewModal)
    cards.forEach((card) => {
        card.addEventListener("click", () => {
            openViewModal();
        });
    });
})


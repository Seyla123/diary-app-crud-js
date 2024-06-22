document.addEventListener("DOMContentLoaded", () => {
    	const updateButton = document.getElementById("updateButton");
        const updateModal = document.getElementById("updateModal");
        const closeUpdate = document.querySelector(".closeUpdate");
        const cancelButtonUpdate = document.getElementById("cancelButtonUpdate");

        const openUpdateModal = () => {
            updateModal.style.display = "flex";
            document.body.style.overflow = "hidden";
        };
        const closeUpdateModal = () => {
            updateModal.style.display = "none";
            document.body.style.overflow = "auto";
        };
        updateButton?.addEventListener("click", openUpdateModal);
        closeUpdate?.addEventListener("click", closeUpdateModal);
        cancelButtonUpdate?.addEventListener("click", closeUpdateModal);

        window.addEventListener("click", (event) => {
            if (event.target == updateModal) {
              updateModal.style.display = "none";
            }
          });
    })

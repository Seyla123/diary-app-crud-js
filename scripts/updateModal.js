document.addEventListener("DOMContentLoaded", () => {
    	const updateButton = document.getElementById("updateButton");
        const updateModal = document.getElementById("updateModal");
        const closeUpdate = document.querySelector(".closeUpdate");
        const cancelButtonUpdate = document.getElementById("cancelButtonUpdate");
        let entryUpdate = null;
        const openUpdateModal = (entry) => {
            entryUpdate  = entry;
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
        const updateCancel = document.querySelector("#updateCancel");
        const confirmUpdate = () => {
            updateCancel.style.display = "none";
            if(entryUpdate != null) {
                updateModal.style.display = "none";
                document.body.style.overflow = "auto";
                confirmEdit(entryUpdate);  
            } 
        }
        window.addEventListener("click", (event) => {
            if (event.target == updateModal) {
              updateModal.style.display = "none";
            }
          });
          window.openUpdateModal = openUpdateModal;
          window.confirmUpdate = confirmUpdate;
    })

 
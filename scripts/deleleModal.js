import { createDeleteModal } from "../components/deleteModal.js";

document.addEventListener("DOMContentLoaded", () => {
  const deleteButton = document.getElementById("deleteButton");
  const deleteModal = document.getElementById("deleteModal");
  const closeButton = document.querySelector(".close");
  const cancelButton = document.getElementById("cancelButton");

  const openDeleteModal = () => {
    deleteModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  };
  const closeDeleteModal = () => {
    deleteModal.style.display = "none";
    document.body.style.overflow = "auto";
  };
  deleteButton?.addEventListener("click", openDeleteModal);
  closeButton?.addEventListener("click", closeDeleteModal);
  cancelButton?.addEventListener("click", closeDeleteModal);

  window.addEventListener("click", (event) => {
    if (event.target == deleteModal) {
      deleteModal.style.display = "none";
    }
  });
  let deleteId = null;
  const setDeleteId = (id) => {
    deleteId = id;
    openDeleteModal();
  };
  const confirmDelete = () => {
    if (deleteId != null) {
      deleteModal.style.display = "none";
      document.body.style.overflow = "auto";
      deleteEntry(deleteId);
      deleteId = null;
    } else {
      console.log("Please select an entry to delete");
    }
  };
  window.setDeleteId = setDeleteId;
  window.confirmDelete = confirmDelete;
});

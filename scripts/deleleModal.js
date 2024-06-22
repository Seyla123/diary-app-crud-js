
document.addEventListener('DOMContentLoaded', () => {
    const deleteButton = document.getElementById('deleteButton');
    const deleteModal = document.getElementById('deleteModal');
    const closeButton = document.querySelector('.close');
    const cancelButton = document.getElementById('cancelButton');
    const confirmButton = document.getElementById('confirmButton');
  
    const openDeleteModal = () => {
        deleteModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
    const closeDeleteModal = () => {
        deleteModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
    deleteButton.addEventListener('click', openDeleteModal);
    closeButton.addEventListener('click',closeDeleteModal);
    cancelButton.addEventListener('click', closeDeleteModal);
    confirmButton.addEventListener('click', () => {
        // Add your delete logic here
        alert('Entry deleted!');
        deleteModal.style.display = 'none';
    });
  
    window.addEventListener('click', (event) => {
        if (event.target == deleteModal) {
            deleteModal.style.display = 'none';
        }
    });
  });
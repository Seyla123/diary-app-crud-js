// function create delete modal
const createDeleteModal = () =>{
    return `
    <div id="deleteModal" class="modal">
        <div class="modal-content">
          <div class="modal-container">
            <span class="close">
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5001 0.916504C7.4355 0.916504 0.916748 7.43525 0.916748 15.4998C0.916748 23.5644 7.4355 30.0832 15.5001 30.0832C23.5647 30.0832 30.0834 23.5644 30.0834 15.4998C30.0834 7.43525 23.5647 0.916504 15.5001 0.916504ZM22.7917 20.7353L20.7355 22.7915L15.5001 17.5561L10.2647 22.7915L8.20841 20.7353L13.4438 15.4998L8.20841 10.2644L10.2647 8.20817L15.5001 13.4436L20.7355 8.20817L22.7917 10.2644L17.5563 15.4998L22.7917 20.7353Z" fill="#767AE3"/>
                </svg>
            </span>
          </div>
         <div class="modal-img-container">
          <img
          src="./assets/g8.svg"
          alt="Delete Icon"
          class="modal-img"
        />
        <p>Do you really want to delete this ?</p>
         </div>
          <div class="modal-container btn-modal-container">
            <my-button 
            btn-type="primary" 
            title="No" 
            id="cancelButton" 
            >No</my-button>
            
            <my-button 
            onClick="confirmDelete()"
            title="Yes, delete"
            ></my-button>
          </div>
        </div>
    </div>
    `
}

// This class defines a custom HTML element for the Delete modal.

class DeleteModel extends HTMLElement {
    constructor() {
        super();
    }
    // When the element is added to the DOM, set its innerHTML to the delete modal HTML
    connectedCallback() {
        const id = this.getAttribute('id') || null;
        this.innerHTML = createDeleteModal(id);
    }
}
// Define the custom element with the name 'delete-modal'
window.customElements.define('delete-modal', DeleteModel)

// Export the createDeleteModal function for use in other modules
export { createDeleteModal };

// function for create update modal
const createUpdateModal = (entry) => {

    return `
     <div id="updateModal" class="modal-update">
          <div class="modal-content">
            <div class="modal-container">
              <span class="closeUpdate">
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.5001 0.916504C7.4355 0.916504 0.916748 7.43525 0.916748 15.4998C0.916748 23.5644 7.4355 30.0832 15.5001 30.0832C23.5647 30.0832 30.0834 23.5644 30.0834 15.4998C30.0834 7.43525 23.5647 0.916504 15.5001 0.916504ZM22.7917 20.7353L20.7355 22.7915L15.5001 17.5561L10.2647 22.7915L8.20841 20.7353L13.4438 15.4998L8.20841 10.2644L10.2647 8.20817L15.5001 13.4436L20.7355 8.20817L22.7917 10.2644L17.5563 15.4998L22.7917 20.7353Z" fill="#767AE3"/>
                  </svg>
              </span>
            </div>
          <div class="modal-img-container">
            <img
            src="./assets/update.svg"
            alt="Update Icon"
            class="modal-img"
          />
          <p>Are sure you want to edit this ?</p>
          </div>
            <div class="modal-container btn-modal-container">
              <button id="cancelButtonUpdate" class="btn-primary-100">No</button>
              <my-button onClick="confirmUpdate()" 
              title="Yes, sure"
              ></my-button>
            </div>
          </div>
      </div>
    `
}

// This class defines a custom HTML element for the update modal.
class UpdateModal extends HTMLElement {
    constructor() {
        super();
    }
  connectedCallback() {
    // Set the innerHTML of the element to the update modal HTML
    this.innerHTML = createUpdateModal();
  }
}
// Define the custom element with the name 'update-modal'
window.customElements.define('update-modal', UpdateModal)

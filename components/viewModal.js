/**
 * Generates a view modal HTML string with the given title, content, and date.
 *
 * @param {string} title - The title of the entry.
 * @param {string} content - The content of the entry.
 * @param {string} date - The date of the entry.
 * @return {string} - The HTML string of the view modal.
 */
const createViewModal = (title, content, date) => {
  const closeIcon = `
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <!-- Path for Close Icon -->
                <path
                  d="M15.5001 0.916504C7.4355 0.916504 0.916748 7.43525 0.916748 15.4998C0.916748 23.5644 7.4355 30.0832 15.5001 30.0832C23.5647 30.0832 30.0834 23.5644 30.0834 15.4998C30.0834 7.43525 23.5647 0.916504 15.5001 0.916504ZM22.7917 20.7353L20.7355 22.7915L15.5001 17.5561L10.2647 22.7915L8.20841 20.7353L13.4438 15.4998L8.20841 10.2644L10.2647 8.20817L15.5001 13.4436L20.7355 8.20817L22.7917 10.2644L17.5563 15.4998L22.7917 20.7353Z"
                  fill="#767AE3"
                />
              </svg>`;
  return `
    <!-- View Modal -->
    <div id="viewModal" class="modal-view">
        <!-- Content -->
        <div class="modal-content-view">
          <!-- Close Button -->
          <div class="modal-container">
            <span class="closeView" onclick="window.close()">
              <!-- Close Icon -->
                ${closeIcon}
            </span>
          </div>
          <!-- Entry Details -->
          <div class="modal-view-container">
            <p class="modal-text-date">
             ${date}
            </p>
            <h1 class="modal-text-title">
             ${title}
            </h1>
            <p class="modal-text-content">
              ${content}
            </p>
          </div>
          <!-- Close Button at Bottom -->
          <div class="modal-container">
            <span class="closeViewButtom">
              <!-- Close Icon -->
              ${closeIcon}
            </span>
          </div>
        </div>
    </div>
    `;
};

// This class defines a custom HTML element for the view modal.
class ViewModal extends HTMLElement {
  constructor() {
    super();
  }

  // When the element is added to the DOM, set its innerHTML to the view modal HTML
  connectedCallback() {
    this.innerHTML = createViewModal();
  }
}

// Define the custom element with the name 'view-modal'
window.customElements.define("view-modal", ViewModal);

// Export the createViewModal function for use in other modules
export { createViewModal };

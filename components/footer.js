const info = ['Developed by : Seav Seyla', 'Email : Mrrseyla.758@gmail.com', 'Student ID : AB202410', 'Batch : 02'];
// This function creates the footer markup
const createFooter = ()=>{
    return `
    <!-- Container for the view modal selection -->
    <div id="viewModalSelection">
    </div>
    <!-- Container for all modals -->
    <div id="modal">
      <!-- Delete modal component -->
      <delete-modal></delete-modal>
      <!-- Update modal component -->
      <update-modal></update-modal>
    </div>
    <!-- Footer container -->
    <footer>
        <div class="footer-container">

        <!-- Footer left container -->
        <div class="footer-left-container">
            <!-- Footer title -->
            <h1 class="footer-title">SEAV SEYLA</h1>
            <ul>
                ${info.map((info)=>`<li>${info}</li>`).join('')}
            </ul>
        </div>
        <!-- Separator -->
        <span>|</span>
        <!-- Footer right container -->
        <div class="footer-right-container">
            <!-- Contact me title -->
            <h1 class="footer-title">Want to contact me ?</h1>
            <!-- Message input -->
            <input class="border input" type="text" placeholder="message here"></input>
            <!-- Send email button -->
            <my-button title="Send Email"></my-button>
        </div>
        </div>
    </footer>
    `
}
// Class for custom HTML element for the footer component.
class Footer extends HTMLElement{
    constructor(){
        super()
    }
    /**
     * This method sets the inner HTML of the element to the footer.
     */
    connectedCallback(){
        this.innerHTML = createFooter()
    }
}
// Define a custom HTML element for the footer component
customElements.define("footer-component",Footer)


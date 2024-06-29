import { addModalContainer } from "./modelContainer.js";
// data information
const info = ['Developed by : Seav Seyla', 'Email : Mrrseyla.758@gmail.com', 'Student ID : AB202410', 'Batch : 02'];
// add modal container  function

// This function creates the footer
const createFooter = ()=>{
    return `
    ${addModalContainer()}
    <!-- Footer container -->
    <footer>
        <!-- Footer left container -->
        <div class="footer-left-container">
            <!-- Footer title -->
            <h1 class="footer-title">SEAV SEYLA</h1>
            <ul>
                ${info.map((info)=>`<li>${info}</li>`).join('')}
            </ul>
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



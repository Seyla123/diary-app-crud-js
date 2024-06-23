//function to create footer
const createFooter = ()=>{
    return `
    <div id="viewModalSelection">
    </div>
    <div id="modal">
      <delete-modal></delete-modal>
      <update-modal></update-modal>
    </div>
    <footer>
        
        <div class="footer-left-container">
            <h1 class="footer-title">SEAV SEYLA</h1>
            <ul>
                <li>Developed by : Seav Seyla</li>
                <li>Email : Mrrseyla.758@gmail.com</li>
                <li>Student ID : AB202410</li>
                <li>Batch : 02</li>
            </ul>
        </div>
        <span>|</span>
        <div class="footer-right-container">
            <h1 class="footer-title">Want to contact me ?</h1>
            <input class="border input" type="text" placeholder="message here"></input>
            <my-button title="Send Email"></my-button>
        </div>
    </footer>
    `
}
//Class for custom HTML element for the footer component.
class Footer extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        //It sets the inner HTML of the element to the footer.
        this.innerHTML = createFooter()
    }
}
// Define a custom HTML element for the footer component
customElements.define("footer-component",Footer)

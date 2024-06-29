//function to create header
const createHeader = ()=>{
    return `
    <header class="text-header container">
        <p>Diary Application</p>
    </header>
    `
}

//Class for custom HTML element for the header component.
class Header extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        // Set the inner HTML of the element to the header
        this.innerHTML = createHeader()
    }
}
// Define a custom HTML element for the header component
customElements.define("header-component",Header)


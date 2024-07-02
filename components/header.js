//function to create header
const createHeader = ()=>{
    return `
    <header>
        <h1>Diary Application</h1>
        <p>"A painless lesson is also meaningless"</p>
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


//function to create footer
const createFooter = ()=>{
    return `
    <footer>Seav Seyla</footer>
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

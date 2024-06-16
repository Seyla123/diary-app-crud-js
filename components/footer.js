const createFooter = ()=>{
    return `
    <footer>Seav Seyla</footer>
    `
}
class Footer extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = createFooter()
    }
}
customElements.define("footer-component",Footer)
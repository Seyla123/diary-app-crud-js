const createHeader = ()=>{
    return `
    <header class="text-header container border">
        <p>Diary Application</p>
    </header>
    `
}
class Header extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        this.innerHTML = createHeader()
    }
}
customElements.define("header-component",Header)
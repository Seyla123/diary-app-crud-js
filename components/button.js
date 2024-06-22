const createButton = (title, type)=>{
    return `
    <button type="${type}" class="btn">${title}</button>
    `
}
class Button extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
    const title = this.getAttribute('title');
    const type = this.getAttribute('type') || "";
    this.innerHTML = createButton(title,type)
    }
}
window.customElements.define('my-button', Button)
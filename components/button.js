//This function creates a button element with the given title and type.

const createButton = (title, type)=>{
    return `
    <button type="${type}" class="btn">${title}</button>
    `
}

// This class defines a custom HTML element for a button.

class Button extends HTMLElement{
    // This method is called when the element is added to the DOM.
    connectedCallback(){
        const title = this.getAttribute('title');
        const type = this.getAttribute('type') || "";
        this.innerHTML = createButton(title,type)
    }
}

// Register the custom element with the browser.
window.customElements.define('my-button', Button)

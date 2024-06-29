// create 'not found data' section
const createNotFoundData = ()=>{
    return `
    <div class="container-no-data">
          <img src="../assets/Magnifying glass with files folder, searching for documents, data storage.png" alt="">
            <h1>No Data Found</h1>
            <p>maybe your data is empty.</p>
    </div>
    `
}
class NotFoundData extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = createNotFoundData();
  }
}
customElements.define('not-found-data', NotFoundData)
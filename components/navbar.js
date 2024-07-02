
const createNavbar = () => {
    return `
    <!-- navbar -->
     <nav>
      <div class="container-nav border">
        <button id="logout-btn">
          <img src="../assets/logout.png" alt="">
          <span>logout</span>
        </button>
        <div class="profile-container">
          <p id="profile-username"></p>
          <button>
            <img src="../assets/pf.png" alt="profile" />
          </button>
        </div>
      </div>
     </nav>
    `
}

class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = createNavbar()
    }
}
window.customElements.define('navbar-component', Navbar)
const createDashboardCard = (logoIcon, logoTitle, title, total) => {
    return `
            <div class="dashboard-card border">
              <div class="dashboard-card-imge-container">
                <img src="${logoIcon}" alt="${logoTitle}">
              </div>
              <div class="dashboard-card-content">
                <h3 class="dashboard-card-title">${title}</h3>
                <p class="dashboard-card-value" id="total-entries">${total}</p>
              </div>
            </div>
    `
}

class DashboardCard extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        // get value from attruibute
        const logoIcon = this.getAttribute('logo-icon') || "";
        const logoTitle = this.getAttribute('logo-title') || "";
        const title = this.getAttribute('title') || "";
        const total = this.getAttribute('total') || "";
        // set inner html
        this.innerHTML = createDashboardCard(logoIcon, logoTitle, title, total);
    }
}
customElements.define("dashboard-card", DashboardCard)
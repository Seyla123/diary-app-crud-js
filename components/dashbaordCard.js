const createDashboardCard = (logoIcon, logoTitle, title, countId,customImgContainter) => {
    return `
            <div class="dashboard-card border">
              <div class="dashboard-card-imge-container ${customImgContainter}">
                <img src="${logoIcon}" alt="${logoTitle}">
              </div>
              <div class="dashboard-card-content">
                <h3 class="dashboard-card-title">${title}</h3>
                <p class="dashboard-card-value" id="total-${countId}"></p>
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
        const countId = this.getAttribute('count-id') || "";
        const customImgContainter = this.getAttribute('custom-img-containter') || "";
        // set inner html
        this.innerHTML = createDashboardCard(logoIcon, logoTitle, title, countId,customImgContainter);
    }
}
customElements.define("dashboard-card", DashboardCard)
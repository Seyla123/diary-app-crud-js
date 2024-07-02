const createRecentEntry = (id,title,content,date) => {
    return `
    <div class="container">
              <div class="entry-card border">
                <div class="entry-card-content">
                  <h3 class="entry-card-title">${title}</h3>
                  <p class="entry-card-date">${date}</p>
                  <p class="entry-card-text">${content}</p>
                </div>
              </div>
    </div>
    `
}

export { createRecentEntry }
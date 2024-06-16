
const createCard = (id,title,content,date) => {
    // create action button 
    
    const createActionButton = (id) => {
        return `
                        <button onclick="updateEntry(1)" class="action-btn">
                             <svg class="edit-btn" width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <g clip-path="url(#clip0_10_5491)">
                                 <path d="M6.25 35.9374V43.7499H14.0625L37.1042 20.7083L29.2917 12.8958L6.25 35.9374Z" />
                                 <path d="M43.146 11.7292L38.271 6.85425C37.4585 6.04175 36.146 6.04175 35.3335 6.85425L31.521 10.6667L39.3335 18.4792L43.146 14.6667C43.9585 13.8542 43.9585 12.5417 43.146 11.7292Z" />
                                 </g>
                                 <defs>
                                 <clipPath id="clip0_10_5491">
                                 <rect width="50" height="50" fill="white"/>
                                 </clipPath>
                                 </defs>
                             </svg>
                         </button>
                         <div onclick="deleteEntry(${id})" class="action-btn">
                             <svg class="delete-btn" width="100%" height="100%"  viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <g clip-path="url(#clip0_10_5502)">
                                 <path d="M12.4998 39.5833C12.4998 41.875 14.3748 43.75 16.6665 43.75H33.3332C35.6248 43.75 37.4998 41.875 37.4998 39.5833V14.5833H12.4998V39.5833ZM17.6248 24.75L20.5623 21.8125L24.9998 26.2292L29.4165 21.8125L32.354 24.75L27.9373 29.1667L32.354 33.5833L29.4165 36.5208L24.9998 32.1042L20.5832 36.5208L17.6457 33.5833L22.0623 29.1667L17.6248 24.75ZM32.2915 8.33333L30.2082 6.25H19.7915L17.7082 8.33333H10.4165V12.5H39.5832V8.33333H32.2915Z" />
                                 </g>
                                 <defs>
                                 <clipPath id="clip0_10_5502">
                                 <rect width="50" height="50" fill="white"/>
                                 </clipPath>
                                 </defs>
                                 </svg>     
                         </div>
        `
    }

    return `
    <div class=" border card-container">
            <div class="border card-date">
                <h1>14</h1>
                <h2>FRI</h2>
                <div>
                    <p>${date}</p>
                </div>
                <div class="card-action-phone">
                    ${createActionButton(id)}
                </div>
            </div>
            <div class="border card-content ">
                <h1>S${title}</h1>
                <p class="card-text-content">${content}</p>
            </div>
            <div class="border card-action ">
               ${createActionButton(id)}
            </div>
        </div>
    `
}
export {createCard};
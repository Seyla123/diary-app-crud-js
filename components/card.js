//function to find day of the week
let dayNumber;
const findDayOfWeek=(dateString)=> {
    // Split the input date string into an array [day, month, year]
    const dateParts = dateString.split('-');
    
    // Parse the day, month, and year from the dateParts array
    const year = parseInt(dateParts[0], 10); // Converts the day part to an integer
    const month = parseInt(dateParts[1], 10) - 1; // Converts the month part to an integer and subtracts 1 because months are zero-based
    const day = parseInt(dateParts[2], 10); // Converts the year part to an integer
    dayNumber = day;
    // Create a new Date object with the parsed day, month, and year
    const date = new Date(day, month,year );
  
    // Array to map the day of the week number to the day name
    const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FR', 'SAT'];
   // getDay() returns a number from 0 to 6, where 0 is Sunday and 6 is Saturday
    return daysOfWeek[date.getDay()]; 
  }

// Creates a card element for a diary entry with the given id, title, content, and date.
const createCard = (id, title, content, date) => {
    const dayOfWeek = findDayOfWeek(date);
  // Function to create action button
  const createActionButton = (id) => {
    return `
            <button onclick="window.updateEntry(${id})" class="action-btn">
                <svg class="edit-icon" width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <button onclick="window.deleteEntry(${id})" class="action-btn" >
                <svg class="delete-icon" width="100%" height="100%"  viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_10_5502)">
                    <path d="M12.4998 39.5833C12.4998 41.875 14.3748 43.75 16.6665 43.75H33.3332C35.6248 43.75 37.4998 41.875 37.4998 39.5833V14.5833H12.4998V39.5833ZM17.6248 24.75L20.5623 21.8125L24.9998 26.2292L29.4165 21.8125L32.354 24.75L27.9373 29.1667L32.354 33.5833L29.4165 36.5208L24.9998 32.1042L20.5832 36.5208L17.6457 33.5833L22.0623 29.1667L17.6248 24.75ZM32.2915 8.33333L30.2082 6.25H19.7915L17.7082 8.33333H10.4165V12.5H39.5832V8.33333H32.2915Z" />
                    </g>
                    <defs>
                    <clipPath id="clip0_10_5502">
                    <rect width="50" height="50" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
            </button>
    `
  }

  return `
    <div class="card-container">
        <!-- Date and action buttons container -->
        <div class="card-date">
            <h1>${dayNumber}</h1>
            <h2>${dayOfWeek}</h2>
            <div>
                <p>${date}</p>
            </div>
            <div class="card-action-phone">
                ${createActionButton(id)}
            </div>
        </div>
        <!-- Content container -->
        <div class="card-content ">
            <h1>${title}</h1>
            <p class="card-text-content">${content}</p>
        </div>
        <!-- Action button container for big screens -->
        <div class=" card-action ">
           ${createActionButton(id)}
        </div>
    </div>
  `
}
export { createCard };

import { createCard } from "../components/card.js";

// function for delete data entry
const deleteEntry = (id) => {
    // Retrieve the array of entries from local storage, or create an empty array if no entries exist.
    let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    // Filter the array of entry without the specified ID.(like delete)
    const update = entries.filter((entry) => entry.id != id);
    // Update the array of entries in local storage with the filtered array.
    localStorage.setItem('diaryEntries', JSON.stringify(update));
    // Re-render the display of entries.
    displayEntry();
}

let editMode = false;
const btnSubmit = document.querySelector('.form button');
const containerListCard = document.querySelector('#list-card');
const form = document.querySelector('.form');

// function add entry
const addEntry = (entry) => {
    // Parse the entries from local storage, or create an empty array if no entries exist.
    let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    // Add the new entry to the array of entries.
    entries.push(entry);
    // Store the updated array of entries back to local storage.
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
}

// get data entry when form submit
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    // Retrieve the array of entries from local storage, or create an empty array if no entries exist.
    let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];

    // Get the value of the title, content, and date input fields.
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const date = document.querySelector('#date').value;

    // Get the id for the entry. If we are in edit mode, 
    //use the length of the entries array as the id (since each entry should have a unique id).
    const id = editMode ? document.querySelector('#id').value : entries.length;
    const entry = {id, title, content, date};
    
    // add or update data entry
    editMode ? updateEntry(entry) : addEntry(entry);
    // reset form and re-renderdisplay data entry
    displayEntry();
    form.reset();
})
// function for display data entry
const displayEntry = ()=>{
    // Retrieve the array of entries from local storage, or create an empty array if no entries exist.
    let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    containerListCard.innerHTML = entries.map((item) => {
        // Create a card element for the current entry and append it to the HTML for the container of card elements.
        return createCard(item.id, item.title, item.content, item.date);
    }).join('');
}
displayEntry()
const editEntry = (id)=>{
    let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    editMode = true;
    btnSubmit.innerHTML = 'Update';
    const index = entries.findIndex((item=>item.id==id));
    const entry = entries[index];
    document.querySelector('#id').value = entry.id;
    document.querySelector('#title').value = entry.title;
    document.querySelector('#content').value = entry.content;
    document.querySelector('#date').value = entry.date;
}
// function for update data entry
const updateEntry = (entry) => {
    let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    const index = entries.findIndex((item=>item.id==entry.id));
    entries[index] = entry;
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
    editMode = false;
    btnSubmit.innerHTML = 'Add Entry';
    displayEntry();
}
window.updateEntry = editEntry;
window.deleteEntry = deleteEntry;


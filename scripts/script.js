import { createCard } from "../components/card.js";

// function for delete data entry
const deleteEntry = (id) => {
    console.log('delete', id);
}
let editMode = false;
const btnSubmit = document.querySelector('.form button');
const containerListCard = document.querySelector('#list-card');
const form = document.querySelector('.form');

// function add entry
const addEntry = (entry) => {
    let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    entries.push(entry);
    localStorage.setItem('diaryEntries', JSON.stringify(entries));
}
// get data entry when form submit
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;
    const date = document.querySelector('#date').value;
    const id = entries.length + 1;
    const entry = {id, title, content, date};
    addEntry(entry);
    displayEntry();
    console.log("form Add");
    form.reset();
})
// function for display data entry
const displayEntry = ()=>{
    let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    let html = '';
    entries.map((item)=>{
        return html += createCard(item.id, item.title, item.content, item.date);
    })
    containerListCard.innerHTML = html;
}
displayEntry()
const editEntry = (id)=>{
    let entries = JSON.parse(localStorage.getItem('diaryEntries')) || [];
    const index = entries.findIndex((item=>item.id==id));
    const entry = entries[index];

    document.querySelector('#title').value = entry.title;
    document.querySelector('#content').value = entry.content;
    document.querySelector('#date').value = entry.date;
   
}
// function for update data entry
const updateEntry = (id) => {
    console.log('update', id);
}
window.updateEntry = editEntry;
window.deleteEntry = deleteEntry;

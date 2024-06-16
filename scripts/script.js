import { createCard } from "../components/card.js";

const updateEntry = (id) => {
    console.log('update', id);
}

const deleteEntry = (id) => {
    console.log('delete', id);
}
const arr = [{
    id: 1,
    title: 'sometjing',
    content: 'lorem ipsum dolor sit amet',
    date: '1/1/2021',
},
{
    id: 2,
    title: 'sometjing',
    content: 'lorem ipsum dolor sit amet',
    date: '1/1/2021',
},
{
    id: 3,
    title: 'sometjing',
    content: 'lorem ipsum dolor sit amet',
    date: '1/1/2021',
},
{
    id: 1,
    title: 'sometjing',
    content: 'lorem ipsum dolor sit amet',
    date: '1/1/2021',
},
{
    id: 2,
    title: 'sometjing',
    content: 'lorem ipsum dolor sit amet',
    date: '1/1/2021',
},
{
    id: 3,
    title: 'sometjing',
    content: 'lorem ipsum dolor sit amet',
    date: '1/1/2021',
},]

const containerListCard = document.querySelector('#list-card');
const displayEntry = ()=>{
    

    let html = '';

    arr.map((item)=>{
        return html += createCard(item.id, item.title, item.content, item.date);
    })
    containerListCard.innerHTML = html;
}
displayEntry()
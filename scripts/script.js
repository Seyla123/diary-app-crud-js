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
}]

const containerListCard = document.querySelector('#list-card');

console.log(createCard(arr[0].id, arr[0].title, arr[0].content, arr[0].date));
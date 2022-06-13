import See from './modules/See.js';
import showBookList from './modules/showBookList.js';
import showForm from './modules/showForm.js';
import showContact from './modules/showContact.js';
import { DateTime } from './modules/luxon.js';

document.addEventListener('DOMContentLoaded', See.displayAll);

// adding a book
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new See(title, author);

  See.display(book);
  See.add(book);
});

// removing a book
document.querySelector('.books').addEventListener('click', (e) => {
  See.removeBook(e.target.previousElementSibling);
  const writer = e.target.previousElementSibling.textContent;
  See.delete(writer);
});

// Adding the correct section
/* eslint-disable no-unused-vars */
document.getElementById('list').addEventListener('click', showBookList);

document.getElementById('add-new').addEventListener('click', showForm);

document.getElementById('contact').addEventListener('click', showContact);

document.addEventListener('DOMContentLoaded', showBookList);

// Show date and time
const dateTime = document.querySelector('#date');
const clock = () => {
  const currentDateTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  dateTime.innerHTML = currentDateTime;
};
setInterval(clock, 1000);

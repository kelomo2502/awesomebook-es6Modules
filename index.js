import Book from './modules/Book.js';
import showBookList from './modules/showBookList.js';
import showForm from './modules/showForm.js';
import showContact from './modules/showContact.js';
import { DateTime } from './modules/luxon.js';

document.addEventListener('DOMContentLoaded', Book.displayAll);

// adding a book
document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);

  Book.display(book);
  Book.add(book);
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
});

// removing a book
document.querySelector('.books').addEventListener('click', (e) => {
  Book.removeBook(e.target.previousElementSibling);
  const writer = e.target.previousElementSibling.textContent;
  Book.delete(writer);
});

// Adding the correct section
document.getElementById('list').addEventListener('click', showBookList);

document.getElementById('add-new').addEventListener('click', showForm);

document.getElementById('contact').addEventListener('click', showContact);

document.addEventListener('DOMContentLoaded', showBookList);

// Show date and time
const dateTime = document.querySelector('#date');
const clock = () => {
  const currentDateTime = DateTime.now().toLocaleString(
    DateTime.DATETIME_FULL_WITH_SECONDS,
  );
  dateTime.innerHTML = currentDateTime;
};
setInterval(clock, 1000);

class Book {
  constructor(inputTitle, inputAuthor) {
    this.title = inputTitle;
    this.author = inputAuthor;
  }

  static displayAll() {
    const list = Book.get();
    if (list) {
      list.forEach((book) => Book.display(book));
    }
  }

  static removeBook(book) {
    if (book) {
      book.parentElement.remove();
    }
  }

  static display(book) {
    const list = document.querySelector('.books');
    const row = document.createElement('tr');
    row.innerHTML = `
           <td>"${book.title}"</td>&nbspby &nbsp
           <td>${book.author}</td>
           <button class="cancel">Remove</button>`;
    list.appendChild(row);
  }

  static get() {
    let list;
    const data = localStorage.getItem('memory');
    if (!data) {
      list = [];
    } else {
      list = JSON.parse(data);
    }
    return list;
  }

  static add(book) {
    const list = Book.get();
    list.push(book);
    localStorage.setItem('memory', JSON.stringify(list));
  }

  static delete(writer) {
    const list = Book.get();

    list.forEach((book, index) => {
      if (book.author === writer) {
        list.splice(index, 1);
      }
    });
    localStorage.setItem('memory', JSON.stringify(list));
  }
}
export default Book;

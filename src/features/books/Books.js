import React from "react";
import { useSelector } from "react-redux";

function Books() {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <ul>
        {books ? books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.authorName}
          </li>
        )) : "none"}
      </ul>
    </div>
  );
}

export default Books;

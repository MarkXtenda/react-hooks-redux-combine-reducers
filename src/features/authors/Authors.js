import React from "react";
import { useSelector } from "react-redux";

function Authors() {
  const authors = useSelector((state) => state.authors);

  return (
    <div>
      <ul>
        {authors ? authors.map((author) => (
          <li key={author.id}>{author.authorName}</li>
        )) : "none"}
      </ul>
    </div>
  );
}

export default Authors;

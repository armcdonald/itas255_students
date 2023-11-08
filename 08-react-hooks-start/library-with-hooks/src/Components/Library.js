import React from 'react';
import Book from './Book';
import { Hiring } from "./Hiring";

export default function Library(b) {
    const { books } = b;

    return(
        <div>
            <h2>Your Local Library</h2>
            <Hiring />
            <section>
                <h4>Title</h4>
                <h4>Author</h4>
                <h4>Pages</h4>
            </section>

            {
                books.sort((a,b) => a.author.localeCompare(b.author))
                    .map((book, i) => (
                        <Book key={i} book={book} />
                    ))
            }

        </div>
    )
}
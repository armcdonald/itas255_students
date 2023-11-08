import React from 'react';

import '../styles/Book.css';

export default function Book({book}) {
	const { title, author, pages } = book;
	return (
		<section>
            <span>{title}</span>
			<span>{author}</span>
			<span>{pages}</span>
		</section>
	)
}

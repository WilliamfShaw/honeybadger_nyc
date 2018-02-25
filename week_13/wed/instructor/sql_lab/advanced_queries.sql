-- ADVANCED / JOIN QUERIES

-- Find all fields (book and author related) for all books written by George R.R. Martin.
SELECT * FROM authors a LEFT JOIN books b WHERE a.id = 8;

-- Find all fields (book and author related) for all books written by Milan Kundera.
SELECT * FROM authors a LEFT JOIN books b WHERE a.id = 6;

-- Find all books written by an author from China or the UK.
SELECT title, author_id, name FROM authors a INNER JOIN books b ON a.id = b.author_id WHERE a.nationality = 'China' OR a.nationality = 'United Kingdom';

-- Find out how many books Albert Camus wrote.
SELECT COUNT(title) FROM books b INNER JOIN authors a ON a.id = b.author_id WHERE b.author_id = 7;

-- Find out how many books were written by US authors.
SELECT COUNT(title) FROM books b INNER JOIN authors a ON a.id = b.author_id WHERE a.nationality = 'United States of America';

-- Find all books written after 1930 by authors from Argentina.
SELECT * FROM books b INNER JOIN authors a ON a.id = b.author_id WHERE b.publication_date > 1930 AND a.nationality = 'Argentina';

-- Find all books written before 1980 by authors not from the US.

-- Find all authors whose names start with 'J'.

-- Find all books whose titles contain 'the'.

-- Find all authors who have written books with that start with the letter 'N'.

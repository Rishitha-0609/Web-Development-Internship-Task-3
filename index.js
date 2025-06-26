const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { id: 3, title: '1984', author: 'George Orwell' }
];

let nextId = 4;

// Add this new route
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Book API</h1><p>Use the /books endpoint to manage books.</p>');
});
app.get('/books', (req, res) => {
    res.json(books);
});

app.post('/books', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: nextId++, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;
    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex === -1) {
        return res.status(404).send('Book not found');
    }

    const updatedBook = { id, title, author };
    books[bookIndex] = updatedBook;
    res.json(updatedBook);
});

app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex === -1) {
        return res.status(404).send('Book not found');
    }
    
    books.splice(bookIndex, 1);
    res.status(204).send();
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
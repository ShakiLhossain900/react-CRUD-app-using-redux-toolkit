import React from 'react';
import { useSelector } from 'react-redux';

const BooksView = () => {
    const books = useSelector((state)=> state.booksReducer.books)
    console.log(books);
    return (
        <div>
            <h2>list of books Books</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Action</th>
                    </tr>
                </thead>
            </table>
            <tbody>
                { books & books.map((book)=>{
                    const {id,title,author} = book;
                    return <tr>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td>{author}</td>
                    </tr>
                
                })}
            </tbody>
        </div>
    );
};

export default BooksView;
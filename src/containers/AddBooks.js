import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addBook, deleteBook, deleteAllBooks, updateBook } from '../redux/actions/actionAddBooks';
import FlipMove from 'react-flip-move';
import "./css/AddBook.css";
import BookCount from './BookCount';

const AddBooks = ({ libraryData, addBook, deleteBook, deleteAll, updateBook }) => {
    const initialState = {
        title: '',
        author: ''
    };

    const [newData, setNewData] = useState(initialState);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [editBookId, setEditBookId] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addBook(newData);
            setNewData(initialState);
        } catch (error) {
            setError(true);
            setErrorMessage('Error adding book. Please try again.');
        }
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredData = libraryData.filter((data) => {
        const title = data.title.toLowerCase();
        const author = typeof data.author === 'string' ? data.author.toLowerCase() : '';
        return title.includes(searchQuery.toLowerCase()) || author.includes(searchQuery.toLowerCase());
    });

    const displayData = filteredData.length > 0 ? (
        <FlipMove>
            {filteredData.map((data) => (
                <li
                    key={data.id}
                    className="list-group-item list-group-item-light d-flex justify-content-between"
                >
                    <span>
                        <strong>Title: </strong> {data.title}
                    </span>
                    <span>
                        <strong>Author: </strong> {data.author}
                    </span>
                    <span className="btn btn-primary mr-2"  data-toggle="modal" data-target="#editBookModal" onClick={() => setEditBookId(data.id)}>
                        Edit
                    </span>
                    <span className="btn btn-danger" onClick={() => deleteBook(data.id)}>
                       Delete
                    </span>
                </li>
            ))}
        </FlipMove>
    ) : (
        <p className="text-center">No data to display</p>
    );

    const saveEditedBook = (id) => {
        const updatedData = { ...newData, id };
        updateBook(id, updatedData);
        setNewData(initialState);
        setEditBookId(null);
    };

    const deleteAllBooksBtn =
        filteredData.length > 0 && (
            <div className="d-flex justify-content-center">
                <button className="btn btn-danger mt-4 mb-5" onClick={() => deleteAll()}>
                    Delete all books
                </button>
            </div>
        );

    return (
        <main role="main">
            <div className="jumbotron jumbotron-fluid">
                <div className="containerFirst text-center">
                    <h1 className="display-4 white-text">MY BOOKS</h1>
                    <h3 className="white-text">Add a book to your library</h3>

                    <form className="form-inline justify-content-center" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                value={newData.title}
                                type="text"
                                className="form-control"
                                placeholder="Title"
                                required
                                onChange={(e) => setNewData({ ...newData, title: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                value={newData.author}
                                type="text"
                                className="form-control ml-3"
                                placeholder="Author"
                                required
                                onChange={(e) => setNewData({ ...newData, author: e.target.value })}
                            />
                        </div>

                        <div className="form-group">
                            <button className="btn btn-outline-secondary ml-3">Add a book</button>
                        </div>
                    </form>
                </div>
            </div>

            {error && <p className="error-message">{errorMessage}</p>}

            <div className="container" style={{ minHeight: '200px' }}>
                <div className="row">
                    <div className="col-md-12">
                        <h3>Search by Title:</h3>
                        <div className="search-container">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search"
                                value={searchQuery}
                                onChange={handleSearch}
                            />
                        </div>
                        <br></br>
                        <BookCount />
                        <ul className="list-group">{displayData}</ul>
                        {deleteAllBooksBtn}
                    </div>
                </div>
            </div>


            {/* Edit Book Modal */}
            {editBookId && (
                <div className="modal fade" id="editBookModal" tabIndex="-1" role="dialog" aria-labelledby="editBookModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="editBookModalLabel">Edit Book</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="editTitle">Title:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="editTitle"
                                            value={newData.title}
                                            onChange={(e) => setNewData({ ...newData, title: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="editAuthor">Author:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="editAuthor"
                                            value={newData.author}
                                            onChange={(e) => setNewData({ ...newData, author: e.target.value })}
                                        />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={() => saveEditedBook(editBookId)}>Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
};

const addStateToProps = (state) => {
    return {
        libraryData: state.library,
    };
};

const addDispatchToProps = (dispatch) => {
    return {
        addBook: (param) => dispatch(addBook(param)),
        deleteBook: (id) => dispatch(deleteBook(id)),
        deleteAll: () => dispatch(deleteAllBooks()),
        updateBook: (id, updatedData) => dispatch(updateBook(id, updatedData)),
    };
};

export default connect(addStateToProps, addDispatchToProps)(AddBooks);

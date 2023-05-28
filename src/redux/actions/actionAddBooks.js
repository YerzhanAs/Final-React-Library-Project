import { ADD_BOOKS, DELETE_BOOK, DELETE_ALL_BOOKS, UPDATE_BOOK } from '../constants'

export const addBook = data => {
    return {
        type: ADD_BOOKS,
        payload: data
    }
}

export const deleteBook = id => {
    return {
        type: DELETE_BOOK,
        payload: id
    }
}

export const deleteAllBooks = () => {
    return {
        type: DELETE_ALL_BOOKS
    }
}

export const updateBook = (id, updatedData) => {
    return {
        type: UPDATE_BOOK,
        payload: { id, updatedData }
    };
};
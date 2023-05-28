import { ADD_BOOKS, DELETE_BOOK, DELETE_ALL_BOOKS, UPDATE_BOOK } from '../constants'
import { v4 as uuiv4 } from 'uuid'

const initialState = {
    books: []
}

const helperAdddata = action => {
    return {
        id: uuiv4(),
        title: action.payload.title,
        author: action.payload.author,
        link: action.payload.link
    }
}

const removeDataById = (state, id) => {
    const books = state.filter( book => book.id !== id)
    return books
}

// reducer
const reducerAddBooks = ( state = initialState.books, action ) => {

    if (localStorage.getItem('booksData')) {
        state = JSON.parse(localStorage.getItem('booksData'))
    }

    switch (action.type) {
        case ADD_BOOKS:
            state = [...state, helperAdddata(action)]
            localStorage.setItem('booksData', JSON.stringify(state))
            return state;

        case DELETE_BOOK:
            state = removeDataById(state, action.payload);
            localStorage.setItem('booksData', JSON.stringify(state))
            return state;

        case DELETE_ALL_BOOKS:
            state = [];
            localStorage.setItem('booksData', JSON.stringify(state))
            return state;

        case UPDATE_BOOK:
            const updatedState = state.map(book => {
                if (book.id === action.payload.id) {
                    return { ...book, ...action.payload.updatedData };
                }
                return book;
            });
            localStorage.setItem('booksData', JSON.stringify(updatedState));
            return updatedState;

        default: return state
    }

}

export default reducerAddBooks
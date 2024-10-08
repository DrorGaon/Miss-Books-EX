import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'
import { booksData } from './book.database.js'

const BOOK_KEY = 'book'
_createbooks()

export const bookservice = {
    query,
    get,
    remove,
    save,
    getEmptybook,
    getNextbookId,
    getFilterBy,
    setFilterBy,
    addReview,
    getFilterFromSearchParams,
}

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.minPrice) {
                books = books.filter(book => (book.listPrice.price >= filterBy.minPrice))
            }
            if (filterBy.title) {
                const regex = new RegExp(filterBy.title, 'i')
                books = books.filter(book => regex.test(book.title))
            }
            if (filterBy.author) {
                const regex = new RegExp(filterBy.author, 'i')
                books = books.filter(book => regex.test(book.author))
            }
            if (filterBy.genre) {
                const regex = new RegExp(filterBy.genre, 'i')
                books = books.filter(book => regex.test(book.genres))
            }
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
        .then(book => _setNextPrevBookId(book))
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptybook() {
    return { 
        id: '',
        title: '',
        authors: '',
        publishedDate: '',
        desc: '',
        pageCount: '',
        genres: [],
        cover: `./assets/img/${utilService.getRandomIntInclusive(1, 20)}.jpg` ,
        language: 'he',
        listPrice: {
            price: '',
            symbol: '₪',
            isOnSale: true
        }
    }
}

function getFilterBy() {
    return { minPrice: '', title: '', author: '', genre: ''}
}

function setFilterBy(filterBy = {}) {
    if (filterBy.title !== undefined) filterBy.title = filterBy.title
    if (filterBy.price !== undefined) filterBy.price = filterBy.price
    return filterBy
}

function getNextbookId(bookId) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            let nextbookIdx = books.findIndex(book => book.id === bookId) + 1
            if (nextbookIdx === books.length) nextbookIdx = 0
            return books[nextbookIdx].id
        })
}

function _createbooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = booksData
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _setNextPrevBookId(book) {
    return query().then((books) => {
        const bookIdx = books.findIndex((currBook) => currBook.id === book.id)
        const nextBook = books[bookIdx + 1] ? books[bookIdx + 1] : books[0]
        const prevBook = books[bookIdx - 1] ? books[bookIdx - 1] : books[books.length - 1]
        book.nextBookId = nextBook.id
        book.prevBookId = prevBook.id
        return book
    })
}

function addReview(bookId, review){
    return get(bookId)
        .then(book => {
            if(!book.reviews) book.reviews = [review]
            else book.reviews.push(review)
            save(book)
        })
}

function getFilterFromSearchParams(searchParams) {
    const title = searchParams.get('title') || ''
    const minPrice = searchParams.get('minPrice') || ''
    const author = searchParams.get('author') || ''
    const genre = searchParams.get('genre') || ''
    return {
        title,
        minPrice,
        author,
        genre,
    }
}
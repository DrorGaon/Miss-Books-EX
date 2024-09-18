import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

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
    setFilterBy
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
            return books
        })
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
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

function getEmptybook(title = '', price = 100, symbol = '₪') {
    return { 
        id: '',
        title, 
        listPrice: {
            price,
            symbol,
            isOnSale: false,
        },
        cover: `/assets/img/${utilService.getRandomIntInclusive(1, 20)}.jpg`,
        desc: utilService.makeLorem(35)
    }
}

function getFilterBy() {
    return { minPrice: '', title: ''}
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
        books = []
        books.push(_createbook('Harry Potter vol. 1', 150))
        books.push(_createbook('Harry Potter vol. 2', 84))
        books.push(_createbook('Harry Potter vol. 3', 60))
        books.push(_createbook('Harry Potter vol. 4'))
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createbook(title, price = 100) {
    const book = getEmptybook(title, price)
    book.id = utilService.makeId()
    return book
}
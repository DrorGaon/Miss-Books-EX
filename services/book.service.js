import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'book'
var gFilterBy = { listPrice: 0, title: '' }
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

function query() {
    return storageService.query(BOOK_KEY)
        .then(books => {
            // if (gFilterBy.listPrice) {
            //     const regex = new RegExp(gFilterBy.txt, 'i')
            //     books = books.filter()
            // }
            // if (gFilterBy.title) {
            //     books = books.filter()
            // }
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

function getEmptybook(title = '', listPrice = 0) {
    return { 
        id: '',
        title, 
        listPrice,
        cover: `/assets/img/${utilService.getRandomIntInclusive(1, 20)}.jpg`,
        desc: utilService.makeLorem(35)
    }
}

function getFilterBy() {
    return { ...gFilterBy }
}

function setFilterBy(filterBy = {}) {
    if (filterBy.title !== undefined) gFilterBy.title = filterBy.title
    if (filterBy.listPrice !== undefined) gFilterBy.listPrice = filterBy.listPrice
    return gFilterBy
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

function _createbook(title, listPrice = 100) {
    const book = getEmptybook(title, listPrice)
    book.id = utilService.makeId()
    return book
}
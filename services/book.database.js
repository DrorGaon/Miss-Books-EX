import { utilService } from "./util.service.js";


export const booksData = [
    {
        "id": "OXeMG8wNskc",
        "title": "The Dragon’s Quest",
        "author": "Barbara Cartland",
        "publishedDate": 1999,
        "desc": utilService.makeLorem(35),
        "pageCount": 713,
        "genres": [
            'Fantasy', 'Adventure'
        ],
        "cover": "./assets/img/20.jpg",
        "language": "en",
        "listPrice": {
            "price": 109,
            "symbol": "€",
            "isOnSale": false
        }
    },
    {
        "id": "JYOJa2NpSCq",
        "title": "The Silent Watcher",
        "author": "Barbara Cartland",
        "publishedDate": 1978,
        "desc": utilService.makeLorem(35),
        "pageCount": 129,
        "genres": [
            'Mystery', 'Thriller'
        ],
        "cover": "./assets/img/14.jpg",
        "language": "sp",
        "listPrice": {
            "price": 44,
            "symbol": "€",
            "isOnSale": true
        }
    },
    {
        "id": "1y0Oqts35DQ",
        "title": "Echoes of the Machine",
        "author": "Dr. Seuss",
        "publishedDate": 1999,
        "desc": utilService.makeLorem(35),
        "pageCount": 972,
        "genres": [
            'Science Fiction', 'Dystopian'
        ],
        "cover": "./assets/img/2.jpg",
        "language": "he",
        "listPrice": {
            "price": 108,
            "symbol": "₪",
            "isOnSale": false
        }
    },
    {
        "id": "kSnfIJyikTP",
        "title": "Hearts in the City",
        "author": "Danielle Steel",
        "publishedDate": 1978,
        "desc": utilService.makeLorem(35),
        "pageCount": 303,
        "genres": [
            'Romance', 'Contemporary'
        ],
        "cover": "./assets/img/16.jpg",
        "language": "en",
        "listPrice": {
            "price": 30,
            "symbol": "€",
            "isOnSale": true
        }
    },
    {
        "id": "f4iuVmbuKCC",
        "title": "Tales of the Starborn",
        "author": "Dr. Seuss",
        "publishedDate": 2011,
        "desc": utilService.makeLorem(35),
        "pageCount": 337,
        "genres": [
            'Fantasy', 'Young Adult'
        ],
        "cover": "./assets/img/12.jpg",
        "language": "sp",
        "listPrice": {
            "price": 19,
            "symbol": "$",
            "isOnSale": false
        }
    },
    {
        "id": "U2rfZO6oBZf",
        "title": "Shadows of the Dark Woods",
        "author": "Leo Tolstoy",
        "publishedDate": 1978,
        "desc": utilService.makeLorem(35),
        "pageCount": 748,
        "genres": [
            'Horror', 'Thriller'
        ],
        "cover": "./assets/img/1.jpg",
        "language": "en",
        "listPrice": {
            "price": 91,
            "symbol": "$",
            "isOnSale": true
        }
    },
    {
        "id": "xI0wrXaaAcq",
        "title": "The Lost Monarch",
        "author": "Leo Tolstoy",
        "publishedDate": 2011,
        "desc": utilService.makeLorem(35),
        "pageCount": 65,
        "genres": [
            'Historical Fiction', 'Drama'
        ],
        "cover": "./assets/img/14.jpg",
        "language": "he",
        "listPrice": {
            "price": 90,
            "symbol": "$",
            "isOnSale": false
        }
    },
    {
        "id": "9laHCEdSpFy",
        "title": "The Life of a Dreamer",
        "author": "Dr. Seuss",
        "publishedDate": 1999,
        "desc": utilService.makeLorem(35),
        "pageCount": 299,
        "genres": [
            'Non-fiction', 'Biography'
        ],
        "cover": "./assets/img/11.jpg",
        "language": "he",
        "listPrice": {
            "price": 176,
            "symbol": "€",
            "isOnSale": false
        }
    },
    {
        "id": "nGhVwZvGCGp",
        "title": "Voyage to the Unknown",
        "author": "Jin Yong",
        "publishedDate": 2011,
        "desc": utilService.makeLorem(35),
        "pageCount": 803,
        "genres": [
            'Science Fiction', 'Adventure'
        ],
        "cover": "./assets/img/10.jpg",
        "language": "sp",
        "listPrice": {
            "price": 116,
            "symbol": "$",
            "isOnSale": true
        }
    },
    {
        "id": "Q8Q9Lsd03BD",
        "title": "The Enchanted Key",
        "author": "Dr. Seuss",
        "publishedDate": 1978,
        "desc": utilService.makeLorem(35),
        "pageCount": 891,
        "genres": [
            'Fantasy', 'Mystery'
        ],
        "cover": "./assets/img/5.jpg",
        "language": "en",
        "listPrice": {
            "price": 145,
            "symbol": "€",
            "isOnSale": false
        }
    },
    {
        "id": "bd7a76kARao",
        "title": "Letters from the Past",
        "author": "Danielle Steel",
        "publishedDate": 2018,
        "desc": utilService.makeLorem(35),
        "pageCount": 86,
        "genres": [
            'Romance', 'Historical Fiction'
        ],
        "cover": "./assets/img/16.jpg",
        "language": "sp",
        "listPrice": {
            "price": 157,
            "symbol": "₪",
            "isOnSale": true
        }
    },
    {
        "id": "qKyG0vqeO3e",
        "title": "The Ashen Uprising",
        "author": "Danielle Steel",
        "publishedDate": 2018,
        "desc": utilService.makeLorem(35),
        "pageCount": 882,
        "genres": [
            'Dystopian', 'Young Adult'
        ],
        "cover": "./assets/img/17.jpg",
        "language": "sp",
        "listPrice": {
            "price": 57,
            "symbol": "$",
            "isOnSale": true
        }
    },
    {
        "id": "2RvT48ZNInj",
        "title": "Into the Abyss",
        "author": "Agatha Christie",
        "publishedDate": 2011,
        "desc": utilService.makeLorem(35),
        "pageCount": 598,
        "genres": [
            'Adventure', 'Thriller'
        ],
        "cover": "./assets/img/8.jpg",
        "language": "en",
        "listPrice": {
            "price": 167,
            "symbol": "₪",
            "isOnSale": false
        }
    },
    {
        "id": "5z2s9pDXAYj",
        "title": "Fires of Desire",
        "author": "Danielle Steel",
        "publishedDate": 1999,
        "desc": utilService.makeLorem(35),
        "pageCount": 608,
        "genres": [
            'Romance', 'Drama'
        ],
        "cover": "./assets/img/3.jpg",
        "language": "he",
        "listPrice": {
            "price": 150,
            "symbol": "₪",
            "isOnSale": false
        }
    },
    {
        "id": "zBZu5cDEWha",
        "title": "Footsteps Through Time",
        "author": "Jin Yong",
        "publishedDate": 2011,
        "desc": utilService.makeLorem(35),
        "pageCount": 583,
        "genres": [
            'Fantasy', 'Adventure'
        ],
        "cover": "./assets/img/6.jpg",
        "language": "en",
        "listPrice": {
            "price": 58,
            "symbol": "$",
            "isOnSale": true
        }
    },
    {
        "id": "aOI7tQuPZ2f",
        "title": "Days of Reckoning",
        "author": "Leo Tolstoy",
        "publishedDate": 2011,
        "desc": utilService.makeLorem(35),
        "pageCount": 497,
        "genres": [
            'Historical Fiction', 'Drama'
        ],
        "cover": "./assets/img/7.jpg",
        "language": "en",
        "listPrice": {
            "price": 78,
            "symbol": "$",
            "isOnSale": false
        }
    },
    {
        "id": "WBooB82Uvwu",
        "title": "The Cursed Forest",
        "author": "Danielle Steel",
        "publishedDate": 1999,
        "desc": utilService.makeLorem(35),
        "pageCount": 804,
        "genres": [
            'Romance', 'Contemporary'
        ],
        "cover": "./assets/img/10.jpg",
        "language": "sp",
        "listPrice": {
            "price": 118,
            "symbol": "$",
            "isOnSale": false
        }
    },
    {
        "id": "xm1z5bbZjlS",
        "title": "The Last Exodus",
        "author": "Leo Tolstoy",
        "publishedDate": 1999,
        "desc": utilService.makeLorem(35),
        "pageCount": 231,
        "genres": [
            'Historical Fiction', 'Non-fiction'
        ],
        "cover": "./assets/img/12.jpg",
        "language": "he",
        "listPrice": {
            "price": 60,
            "symbol": "₪",
            "isOnSale": false
        }
    },
    {
        "id": "u3j6QIKLlJb",
        "title": "The Summer of Us",
        "author": "Agatha Christie",
        "publishedDate": 1978,
        "desc": utilService.makeLorem(35),
        "pageCount": 652,
        "genres": [
            'Mystery', 'Thriller'
        ],
        "cover": "./assets/img/20.jpg",
        "language": "he",
        "listPrice": {
            "price": 110,
            "symbol": "$",
            "isOnSale": true
        }
    },
    {
        "id": "vxYYYdVlEH3",
        "title": "The Forgotten Realm",
        "author": "Dr. Seuss",
        "publishedDate": 2011,
        "desc": utilService.makeLorem(35),
        "pageCount": 904,
        "genres": [
            'Fantasy', 'Young Adult'
        ],
        "cover": "./assets/img/15.jpg",
        "language": "sp",
        "listPrice": {
            "price": 186,
            "symbol": "€",
            "isOnSale": true
        }
    }
]

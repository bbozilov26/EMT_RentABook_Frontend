// export {};
//
// declare global {
//     interface Book {
//         id: number;
//         name: string;
//         category: string;
//         author: Author;
//         availableCopies: number;
//     }
//
//     interface Author {
//         id: number;
//         name: string;
//         surname: string;
//         country: Country;
//     }
//
//     interface Country {
//         id: number;
//         name: string;
//         continent: string;
//     }
// }

export interface Book {
    id: number;
    name: string;
    category: string;
    author: Author;
    availableCopies: number;
}

export interface Author {
    id: number;
    name: string;
    surname: string;
    country: Country;
}

export interface Country {
    id: number;
    name: string;
    continent: string;
}
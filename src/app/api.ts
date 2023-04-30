import {Author, Book} from "./global";

const backendUrl = "http://localhost:9091";

export async function getBooks(): Promise<Book[]> {
    const url = `${backendUrl}/api/books/getAll`;
    return await (await fetch(url)).json();
}

export async function getCategories(): Promise<string[]> {
    const url = `${backendUrl}/api/categories/getAll`;
    return await (await fetch(url)).json();
}

export async function getAuthors(): Promise<Author[]> {
    const url = `${backendUrl}/api/authors/getAll`;
    return await (await fetch(url)).json();
}

export async function getBooksByPage(page: number): Promise<Book[]> {
    const url = `${backendUrl}/api/books/getPaged/${page}/10`;
    return await (await fetch(url)).json();
}

export async function getBookById(id: number): Promise<Book> {
    const url = `${backendUrl}/api/books/${id}`;
    return await (await fetch(url)).json();
}

export function addBook(
    book: { authorId: number | undefined; availableCopies: number; name: string; category: string }
): Promise<Book> {
    const url = `${backendUrl}/api/books/add`;
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
    })
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function editBook(
    book: { authorId: number | undefined; availableCopies: number; name: string; id: number; category: string }
): Promise<Book> {
    const url = `${backendUrl}/api/books/edit/${book.id}`;
    return fetch(url, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
    })
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function deleteBook(id: number): Promise<Book> {
    const url = `${backendUrl}/api/books/delete/${id}`;
    return fetch(url, {
        method: "DELETE",
    })
        .then((response) => response.json())
        .catch((error) => console.error(error));
}

export function markBook(id: number): Promise<Book> {
    const url = `${backendUrl}/api/books/mark/${id}`;
    return fetch(url, {
        method: "PUT",
    })
        .then((response) => response.json())
        .catch((error) => console.error(error));
}
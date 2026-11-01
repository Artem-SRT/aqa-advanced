export default class Book { constructor(title, author, year) { this.title = title; this.author = author; this.year = year; }
get title() {
    return this._title;
}

set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
        throw new Error('Помилка: Назва книги повинна бути непорожнім рядком!');
    }
    this._title = value;
}

get author() {
    return this._author;
}

set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
        throw new Error('Помилка: Автор повинен бути непорожнім рядком!');
    }
    this._author = value;
}

get year() {
    return this._year;
}

set year(value) {
    const currentYear = new Date().getFullYear();
    if (typeof value !== 'number' || value <= 0 || value > currentYear) {
        throw new Error(`Помилка: Рік видання повинен бути числом від 1 до ${currentYear}!`);
    }
    this._year = value;
}

printInfo() {
    console.log(`Книга: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}`);
}

static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
        return null;
    }
    return books.reduce((oldest, current) => current.year < oldest.year ? current : oldest, books);
}
}

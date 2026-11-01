import Book from './Book.js';
export default class EBook extends Book { constructor(title, author, year, fileFormat) { super(title, author, year); this.fileFormat = fileFormat; }
get fileFormat() {
    return this._fileFormat;
}

set fileFormat(value) {
    if (typeof value !== 'string' || value.trim() === '') {
        throw new Error('Помилка: Формат файлу повинен бути непорожнім рядком (наприклад: "PDF", "EPUB")!');
    }
    this._fileFormat = value;
}

printInfo() {
    console.log(`Електронна книга: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat}`);
}

static fromBook(bookInstance, fileFormat) {
    if (!(bookInstance instanceof Book)) {
        throw new Error('Помилка: Перший аргумент має бути екземпляром класу Book!');
    }
    return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
}
}

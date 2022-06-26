class Book {
    title: string;
    price: number;
    dateOfParution: string;
    author: string;
    theme?: string[];

    constructor(t: string, p: number, d: string, a: string, th?: string[]) {
        this.title = t;
        this.price = p;
        this.dateOfParution = d;
        this.author = a;
        this.theme = th;
    }

    promo() {
        return this.price * 0.5;
    }
}

const book1 = new Book("Le seigneur des anneaux", 25, "01/01/2001", "Tolkien");
console.log(book1.promo())

const addToShelter = (obj: Book) => {
    console.log("ADDED", obj);
}

addToShelter(book1);

let onlyBook : Book[] = []
onlyBook.push(book1);
// onlyBook.push('TEST');

console.log(onlyBook);

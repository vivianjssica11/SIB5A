// ini adlh class
class Book {
    // ini adlh properties / attribute
    title: string;

    //ini adlh encapsulation, yg dmna hanya bisa diakses oleh class ini saja
    private stock: number;

    //ini adlh constructor method, digunakan utk parameter dri class (init)
    constructor(title: string, stock: number) {
        this.title = title;
        this.stock = stock;
    }
    
    // ini adlh method (di dlm class) & function (diluar class)
     borrow(): void {
        if(this.stock === 0) {
            throw new Error("Buku tidak tersedia");
        }
        this.stock--;
        console.log(
            `Buku ${this.title} berhasil dipinjam, sisa stock: ${this.stock}`,
        );
    }
    // method untuk mengembalikan buku
    return(): void {
        this.stock++;
        console.log(
            `Buku ${this.title} berhasil dikembalikan, sisa stok: ${this.stock}`,
        );
    
    }
}
 
// new Book adlh object
const book: Book = new Book("Laskar Pelangi", 6);

// memanggil method pada object yaitu borrow (object method)
book.borrow();
book.return();

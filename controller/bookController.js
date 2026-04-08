const books = require('../model/bookModel')

// addBookController

exports.addBookController = async (req, res) => {
    console.log("Inside add book controller");
    const { title, author, pages, imageUrl, price, discountPrice,
        abstract, publisher, language, isbn, category } = req.body;
    const uploadImg = req.files.map(item => item.filename)
    const sellerMail = req.payload
    // console.log(title, author, pages, imageUrl, price, discountPrice,
    //     abstract, publisher, language, isbn, category, uploadImg, sellerMail);
    try {
        const existingBook = await books.findOne({ title, sellerMail })
        if (existingBook) {
            res.status(409).json("Book already exist... Add another one")
        }
        else {
            const newBook = await books.create({
                title, author, pages, imageUrl, price, discountPrice,
                abstract, publisher, language, isbn, category, uploadImg, sellerMail
            })
            res.status(200).json(newBook)
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}
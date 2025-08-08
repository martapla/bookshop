import { Request, Response } from 'express';

import BookModel from '../models/book.models';
// GET all books
export const getBooks = async (req: Request, res: Response) => {
    try {
        const books = await BookModel.find();
        res.status(200).json({ message: 'List of books', data: books });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving books', error });
    }
}
// POST create a new book
export const createBook = async (req: Request, res: Response) => {
    try {
        const { titulo, autor, ISBN, fechaPublicacion, copiasDisponibles } = req.body;

        const newBook = new BookModel({ titulo, autor, ISBN, fechaPublicacion, copiasDisponibles });
        await newBook.save();

        res.status(201).json({ message: 'Book created', data: newBook });
    } catch (error) {
        res.status(500).json({ message: 'Error creating book', error });
    }
};


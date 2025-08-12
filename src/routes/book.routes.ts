import { Router } from "express";
import { getBooks, createBook, getBookById } from "../controllers/book.controller";

const router = Router();
// Define the route for getting all books
router.get("/", getBooks);
// Define the route for creating a new book
router.post("/", createBook);

router.get('/:id', getBookById);


// Export the router
export default router;

import { Router } from "express";
import { getUsers, createUser } from "../controllers/user.controller";

const router = Router();
   
// Define the route for getting all users
router.get("/", getUsers);
// Define the route for creating a new user
router.post('/', createUser);



// Export the router
export default router;



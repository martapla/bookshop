import { Router } from "express";
import { getUsers } from "../controllers/user.controller";

const router = Router();
   
// Define the route for getting a user by ID
router.get("/", getUsers);

// Export the router
export default router;



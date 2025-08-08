import { Request, Response } from 'express';
import UserModel from '../models/user.models';


// GET all users
export const getUsers = async (req: Request, res: Response) => {
    try {
      // Aquí iría la lógica para obtener los usuarios de la base de datos
      const users = await UserModel.find()
      res.status(200).json({ message: 'List of users', data: users });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving users', error });
    }
  }

  // POST create a new user
export const createUser = async (req: Request, res: Response) => {
    try {
      const { username, email, password } = req.body;
  
      const newUser = new UserModel({ username, email, password });
      await newUser.save();
  
      res.status(201).json({ message: 'User created', data: newUser });
    } catch (error) {
      res.status(500).json({ message: 'Error creating user', error });
    }
  };
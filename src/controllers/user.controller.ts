import { Request, Response } from 'express';
import UserModel from '../models/user.models';

export const getUsers = async (req: Request, res: Response) => {
    try {
      // Aquí iría la lógica para obtener los usuarios de la base de datos
      const users = await UserModel.find()
      res.status(200).json({ message: 'List of users', data: users });
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving users', error });
    }
  }
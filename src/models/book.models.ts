import { Schema, model, Document } from 'mongoose';

export interface Book extends Document {
  titulo: string;
  autor: string;
  ISBN?: string;
  fechaPublicacion?: Date;
  copiasDisponibles?: number;
}

const bookSchema = new Schema<Book>({
  titulo: { type: String, required: true },
  autor: { type: String, required: true },
  ISBN: { type: String, unique: true },
  fechaPublicacion: { type: Date },
  copiasDisponibles: { type: Number },
});

const BookModel = model<Book>('Book', bookSchema);

export default BookModel;
import mongoose from "mongoose";
import dontev from "dotenv";

dontev.config();

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("DB is connected");
    } catch (error) {
        console.error("Error al conectar con la base de datos:", error);
        // Lanza una excepción para indicar que ha ocurrido un error durante la conexión
        throw new Error("Error al conectar con la base de datos");
    }
};





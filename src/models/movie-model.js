import db from "../config/db.js";
import bcrypt from "bcrypt";

const movieSchema = new db.Schema({
    nome: {
        type: String,
        required: true,
    },
    data_lancamento: {
        type: Date,
        required: true,
    },
    diretor: {
        type: String,
        required: true,
    },
    classificacao: {
        type: String,
        enum: ["Livre", "Maior16", "Maior18"],
        required: true,
        default: "Livre",
    },
});

const Movie = db.model("Movie", movieSchema);

export default Movie;

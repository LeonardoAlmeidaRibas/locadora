import db from "../config/db.js";
import bcrypt from "bcrypt";

const rentedSchema = new db.Schema({
  alugador: {
    type: String,
    required: true,
  },
  filme_alugado: {
    type: String,
    required: true,
  },
  data_alugada: {
    type: Date,
    required: true,
  },
  data_devolver: {
    type: Date,
    required: true
  }
});

const Rented = db.model("Rented", rentedSchema);

export default Rented;

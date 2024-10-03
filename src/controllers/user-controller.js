import User from "../models/user-model.js";
import jwtService from "../services/jwt-service.js";

export const store = async (req, res) => {
  try {
    const content = await User.create(req.body);
    res.status(201).json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const index = async (req, res) => {
  try {
    const content = await User.find(req.query).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const show = async (req, res) => {
  try {
    const content = await User.findById(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const update = async (req, res) => {
  try {
    const content = await User.findByIdAndUpdate(
      req.params.id,
      req.body
    ).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const destroy = async (req, res) => {
  try {
    const content = await User.findByIdAndDelete(req.params.id).exec();
    res.json(content);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const signup = async (req, res) => {
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
    });

    const token = jwtService.generateAccessToken({
      tipo: user.tipo,
      email: user.email,
      _id: user._id,
    });

    const idade = moment(user.data_nasc);

    res.status(201).json({
      token,
    });

  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    }).exec();

    if (user && (await user.senhaCorreta(req.body.password))) {
      const token = jwtService.generateAccessToken({
        tipo: user.tipo,
        email: user.email,
        _id: user._id,
      });

      res.json({
        token,
      });
    } else {

      res.status(404).json("Email ou senha inválidos");
    }

  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
};

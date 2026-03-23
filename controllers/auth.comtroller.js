import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createToken = (user) => {
  const tokern = jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    },
  );
  return tokern;
};

export const profile = async (req, res) => {
try {
    const user = await User.findById(req.user.id).select("-password");

  res.json({
    message: "Perfil del usuario",
    user: user,
  });
} catch (error) {
  res.status(500).json({ error: "Error interno del servidor" });
}
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Credenciales inválidas" });
    }
    const ismatch = await bcrypt.compare(password, user.password);
    if (!ismatch) {
      return res.status(400).json({ mensaje: "Credenciales inválidas" });
    }
    const token = createToken(user);

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email y contraseña son requeridos" });
    }

    if (!email.includes("@")) {
      return res.status(400).json({ message: "Email no es válido" });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "La contraseña debe tener al menos 6 caracteres" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "El email ya está registrado" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      email,
      password: hash,
    });

    res.status(201).json({
      id: user.id,
      email: user.email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

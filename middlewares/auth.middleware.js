import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }
  if (!authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Token no válido" });
  }

  console.log(authHeader.split(" ")[1]);

  const [portador, token] = authHeader.split(" ");

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log(decoded);
  req.user = decoded;

  next();
  } catch (error) {
    console.log(error.name, error.message);
    res.status(401).json({ error: "Token no válido" });
  }
};

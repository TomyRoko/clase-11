import bcrypt from "bcryptjs";

const password = "12345678";

const hash = await bcrypt.hash(password, 200);

console.log(hash);
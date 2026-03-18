import bcrypt from "bcryptjs";

const password = "12345678";

const hash1 = await bcrypt.hash(password, 10);
console.log(hash1);

const hash2 = await bcrypt.hash(password, 10);
console.log(hash2);

const ok = await bcrypt.compare(password, hash1);
const fail = await bcrypt.compare("wrongpassword", hash1);
console.log(ok);
console.log(fail);

// import bcrypt from "bcryptjs";

// const password = "12345678";

// const hash1 = await bcrypt.hash(password, 10);
// console.log(hash1);

// const hash2 = await bcrypt.hash(password, 10);
// console.log(hash2);

// const ok = await bcrypt.compare(password, hash1);
// const fail = await bcrypt.compare("wrongpassword", hash1);
// console.log(ok);
// console.log(fail);

// import dotenv from "dotenv";
// dotenv.config();

import { config } from "dotenv";
config({ path: ".env" });

import jwt from "jsonwebtoken";

// const token = jwt.sign({ userId: 1 }, process.env.JWT_SECRET, {
//   expiresIn: process.env.JWT_EXPIRES_IN,
// });

// console.log(token);


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5YmM0NTllMTU4ZmMzYThkNzBkMjNjYiIsImVtYWlsIjoidGVzdEBleGFtcGxlNC5jb20iLCJpYXQiOjE3NzM5NTA3ODEsImV4cCI6MTc3Mzk1NDM4MX0.z5Qlbu-_1atHYuO4_Ggtucq6-RyRxDJWCVDyACIjh7w"

try {
    const isVerify = jwt.verify(token, process.env.JWT_SECRET);
console.log(isVerify);
} catch (error) {
    console.log(error);
}

// const decoded = jwt.decode(token);
// console.log(decoded);

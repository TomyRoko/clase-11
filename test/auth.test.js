import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

import bcrypt from "bcryptjs";

import User from "../models/User.js";

describe("Auth User", function () {
  this.beforeEach(async () => {
    await User.deleteMany({});
    const hash = await bcrypt.hash("1782345", 10);
    await User.create({
      email: "test@example7.com",
      password: hash,
    });
  });
  it("Deve registrar un nuevo usuario", async function () {
    const res = await request(app).post("/auth/register").send({
      email: "test@example7.com",
      password: "1782345",
    });

    expect(res.status).to.equal(201);
  });

  it("deberia poder obtener un token al iniciar sesion", async function () {
    const res = await request(app).post("/auth/login").send({
      email: "test@example7.com",
      password: "1782345",
    });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("token");
  });
});

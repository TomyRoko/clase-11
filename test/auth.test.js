import { expect } from "chai";
import request from "supertest";
import app from "../app.js";

import User from "../models/User.js";

describe("Auth User", function () {
    this.beforeEach(async () => {
        await User.deleteMany({});
    });
  it("Deve registrar un nuevo usuario", async function () {
    const res = await request(app).post("/auth/register").send({
      email: "test@example7.com",
      password: "1782345",
    });

    expect(res.status).to.equal(201);
  });
});

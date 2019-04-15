"use strict";

var request = require("supertest"),
    expect = require("chai").expect,
    joiAssert = require("joi-assert");


const {
    schemaLogin,  
  } = require("../schemas/schema_journey.js");

const request_timeout = 10000;
const user = {
    name: "darling",
    password: 12345
};
let token = ''; 
const URL = process.env.NODE_ENV;
const PATH_LOGIN = '/login';

describe("Testes de Contrato", function() {
    it("Realizar Login",function(done) {
    this.timeout(request_timeout);
    request(URL)
    .post(PATH_LOGIN)
    .send(user)
    .expect("Content-Type", /json/)
    .end(function(err, res) {
        expect(res.status).to.be.eql(201);
        joiAssert(res.body, schemaLogin);
        done(err);
        });
    });
})

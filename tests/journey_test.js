"use strict";

var request = require("supertest"),
    expect = require("chai").expect,
    joiAssert = require("joi-assert");


const {
    schemaLogin,
    schemaClients, 
    schemaDetails, 
  } = require("../schemas/schema_journey.js");

const request_timeout = 10000;
const user = {
    name: "darling",
    password: 12345
};

let id = '';
let token = ''; 
const URL = process.env.NODE_ENV;
const PATH_LOGIN = '/login';
const PATH_CLIENTS = '/clients';

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

    it("Listar clientes", function(done) {
        this.timeout(request_timeout);
        request(URL)
        .get(PATH_CLIENTS)
        .expect("Content-type", /json/)
        .end(function(err, res) {
            expect(res.status).to.be.eql(200);
            joiAssert(res.body, schemaClients);
            id = res.body.clients[0].id
            done(err);
        });
    });

    it("Detalhes do cliente", function (done) {
        this.timeout(request_timeout);
        request(URL)
            .get(PATH_CLIENTS + '/' + id)
            .expect("Content-type", /json/)
            .end(function (err, res) {
                expect(res.status).to.be.eql(200);
                joiAssert(res.body, schemaDetails);
                done(err);
            });
    });
})
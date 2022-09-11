import chai from "chai";
import chaiHttp from "chai-http";
import server from "../src/index";
import "mocha";

const should = chai.should();
chai.use(chaiHttp);

describe("Test", () => {
    it("It should GET {'message': 'Hello World', 'code': 200}", (done) => {
        chai.request(server)
            .get("/")
            .end((_, res) => {
                should.exist(res.body)
                res.should.have.status(200);
                res.body.should.be.a("object");
                res.body.should.have.property("message").eq("Hello World");
                res.body.should.have.property("code").eq(200);
                done();
            });
    });
})

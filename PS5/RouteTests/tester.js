const chai = require('chai');
const app = require('../app');
const mocha = require('mocha');
const chaiHttp = require('chai-http');
const {expect} = chai;
const {describe} = mocha;

chai.use(chaiHttp);

describe('routeTests', () => {
    it('should return 200 success code', function (done) {
        chai.request(app)
            .get('/ps4')
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    });
    it('should return 200 success code when posting to generate questions', function (done) {
        chai.request(app)
            .post('/ps4')
            .end((err, response) => {
                expect(response).to.have.status(200);
                done();
            })
    });
    it('resulat should contain a non empty field called quest.', function (done) {
        chai.request(app)
            .post('/ps4')
            .end((err, response) => {
                expect(response.req.agent.protocol).equals("http:");
                done();
            })
    });
})


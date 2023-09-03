const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app'); 
const expect = chai.expect;

chai.use(chaiHttp);

describe('Authentication Routes', () => {
  it('should register a new user', (done) => {
    chai
      .request(app)
      .post('/api/auth/register')
      .send({
        username: 'John',
        password: 'secretpassword',
        email: 'john.doe@example.com',
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('token');
        done();
      });
  });

  it('should log in an existing user', (done) => {
    chai
      .request(app)
      .post('/api/auth/login')
      .send({
        email: 'john.doe@example.com',
        password: 'secretpassword',
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('token');
        done();
      });
  });
  
});

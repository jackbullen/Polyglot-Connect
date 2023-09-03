const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app'); 
const expect = chai.expect;

chai.use(chaiHttp);

describe('User Routes', () => {
  let authToken;

  before((done) => {
   
    chai
      .request(app)
      .post('/api/auth/login')
      .send({
        email: 'john.doe@example.com',
        password: 'secretpassword',
      })
      .end((err, res) => {
        authToken = res.body.token;
        userId = res.body.userId;
        done();
      });
  });

  it('should get user profile', (done) => {
    chai
      .request(app)
      .get(`/api/users/profile/${userId}`)
      .set('Authorization', `Bearer ${authToken}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('_id');
        expect(res.body).to.have.property('username');
        expect(res.body).to.have.property('email');
        
        done();
      });
  });

  it('should update user profile', (done) => {
    chai
      .request(app)
      .put(`/api/users/profile/${userId}`)
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        username: 'Updated Name',
        email: 'updated.email@example.com',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('_id');
        expect(res.body).to.have.property('username').to.equal('Updated Name');
        expect(res.body).to.have.property('email').to.equal('updated.email@example.com');
        
        done();
      });
  });

  it('should delete user profile', (done) => {
    chai
      .request(app)
      .delete(`/api/users/profile/${userId}`)
      .set('Authorization', `Bearer ${authToken}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('_id');
        expect(res.body).to.have.property('username').to.equal('Updated Name');
        expect(res.body).to.have.property('email').to.equal('updated.email@example.com');

        done();
      });
    });

});

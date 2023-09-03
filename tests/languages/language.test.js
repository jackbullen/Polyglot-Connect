const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Language and Resource Routes', () => {
  let languageId;
  let resourceId;

  it('should create a new language', (done) => {
    chai
      .request(app)
      .post('/api/languages')
      .send({ name: 'Spanish' })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('_id');
        expect(res.body.name).to.equal('Spanish');
        languageId = res.body._id; 
        done();
      });
  });


  it('should create a new resource', (done) => {
    chai
      .request(app)
      .post('/api/resources')
      .send({
        name: 'Spanish Tutorial',
        url: 'https://example.com/spanish-tutorial',
        languageId: languageId,
      })
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('_id');
        expect(res.body.name).to.equal('Spanish Tutorial');
        resourceId = res.body._id;
        done();
      });
  });

  it('should retrieve the created language', (done) => {
    chai
      .request(app)
      .get(`/api/languages/${languageId}`)
      .end((err, res) => {
        console.log(res.body);
        console.log(languageId);
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('_id');
        expect(res.body.name).to.equal('Spanish');
        done();
      });
  });


  it('should retrieve the created resource', (done) => {
    chai
      .request(app)
      .get(`/api/resources/${resourceId}`)
      .end((err, res) => {
        console.log(res.body);
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('_id');
        expect(res.body.name).to.equal('Spanish Tutorial');
        done();
      });
  });

 
});

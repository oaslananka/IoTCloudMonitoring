/**
 * @file data.test.js
 * @description Tests for data routes
 * @github oaslananka
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../backend/server');
const should = chai.should();

chai.use(chaiHttp);

describe('Data', () => {
    describe('/POST data', () => {
        it('it should add data to a device', (done) => {
            let data = {
                deviceId: '6103f4b50f9b9c2338d4f7ef',
                data: {
                    temperature: '22',
                    humidity: '45'
                }
            }
            chai.request(server)
                .post('/api/data')
                .send(data)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('msg').eql('Data added successfully');
                    done();
                });
        });
    });

    describe('/GET data/:deviceId', () => {
        it('it should GET all data for a device', (done) => {
            let deviceId = '6103f4b50f9b9c2338d4f7ef';
            chai.request(server)
                .get(`/api/data/${deviceId}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});

/**
 * @file device.test.js
 * @description Tests for device routes
 * @github oaslananka
 */

const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../backend/server');
const should = chai.should();

chai.use(chaiHttp);

describe('Devices', () => {
    describe('/POST device', () => {
        it('it should register a new device', (done) => {
            let device = {
                name: 'Test Device',
                type: 'Sensor',
                location: 'Warehouse 1'
            }
            chai.request(server)
                .post('/api/devices')
                .send(device)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('msg').eql('Device registered successfully');
                    done();
                });
        });
    });

    describe('/GET devices', () => {
        it('it should GET all the devices', (done) => {
            chai.request(server)
                .get('/api/devices')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
});

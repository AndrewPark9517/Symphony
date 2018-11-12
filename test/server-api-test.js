'use strict'

const chai = require('chai');
const chaiHTTP = require('chai-http');
const {app, runServer, closeServer} = require('../server');
const {TEST_DATABASE_URL} = require('../config');

const expect = chai.expect;
chai.use(chaiHTTP);



describe('Forum API Resource', function() {

    // make sure server is running before tests begin
    before(function() {
        return runServer(TEST_DATABASE_URL);
    })
    
    // close server once all tests have finished
    after(function() {
        return closeServer();
    })

    it('static files', function() {
        return chai.request(app)
        .get('/')
        .then(function(res) {
            expect(res).to.have.status(200);
            expect(res).to.be.be.html;
        })

    });
});
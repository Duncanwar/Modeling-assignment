import { use, request } from 'chai';
import chaiHttp from 'chai-http';
import { expect } from 'chai';
import server from '../index';

use(chaiHttp)

describe("Welcome Test", ()=>{
    it("should give a welcome message",(done)=>{
        request(server)
        .get('/')
        .end((err, res)=>{
            if(err) done(err);
            const {message} = res.body
            expect(res.status).to.equal(200);
            expect(message)
            expect(message).to.be.a('string');
            expect(message).to.equal('Welcome')
            done();
        })
    })
})

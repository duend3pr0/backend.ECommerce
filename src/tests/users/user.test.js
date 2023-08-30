import { faker } from '@faker-js/faker';
import { expect, jest } from '@jest/globals';
import supertest from 'supertest';

import initServer from '../index.js'

const expect = expect;

describe('Testing User Endpoints',()=>{
    before(async function(){
        const { app, db } = await initServer();
        const application = app.callback();
        this.requester = supertest.agent(application);
        this.db = db;
    });
    after(function(){
        this.db.drop();
        this.db.close();
        this.application.close();
    })
    beforeEach(function(){
        this.timeout(5000)
    });
    it('El rep')
})

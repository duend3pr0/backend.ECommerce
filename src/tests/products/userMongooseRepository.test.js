import dotenv from 'dotenv';
dotenv.config();

import faker from '@faker-js/faker';
import dbFactory from '../../data/factories/dBFactory.js';
import jest from '@jest/globals'
import DbFactory from '../../data/factories/dBFactory.js';

const expect = jest.expect();

const db = DbFactory.create(process.env.DB);

import ProductMongooseRepository from '../../data/repositories/mongoose/productsMongooseRepository.js';

describe("Testing Product Mongoose Repository", () => {
    before(function () {
        db.init(process.env.DB_TEST_URI);
        this.productMongooseRepository = new ProductMongooseRepository();
    });
    after(function () {
        db.drop();
        db.close();
    });
    beforeEach(async function () {
        this.timeout(2000);
        await new Promise(resolve => setTimeout(resolve, 500));
    });
    it('El repositorio debe ser una instancia de ProductMongooseRepository',function(){
        expect(this.productMongooseRepository instanceof ProductMongooseRepository).to.be.ok;
    })

});



import express from 'express';
import cookieParser from 'cookie-parser';

import productsRouter from '../routes/productsRouter.js';

import errorHandler from '../middlewares/errorHandler.js'


class AppExpress
{
    init()
    {
        this.app = express();
        this.app.use(express.urlencoded({extended: true }));
        this.app.use(express.json());
        this.app.use(cookieParser());

    }

    build()
    {
        this.app.use('/api/products', productsRouter);
        this.app.use(errorHandler)
    }

    callback()
    {
        return this.app()
    }

    close()
    {
        this.server.close();
    }

    listen()
    {
        this.server = this.app.listen(process.env.NODE_PORT,()=>
        {
            console.log(`Server listening on port ${process.env.NODE_PORT}`);
        });

        return this.server;
    }

}

export default AppExpress;


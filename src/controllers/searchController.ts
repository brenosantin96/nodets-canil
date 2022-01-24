import {Request, Response} from 'express';

export const search = (req: Request, res:Response)=>{
    res.send('rota da busca');
    //res.render('/pages/search');
};
import express,{Request, Response , NextFunction, json} from 'express'
import {router} from './rotas'

const app = express();

app.use(json());
//trabalhando com rotas
app.use(router);

app.listen(3000, () => console.log('funcionou'));
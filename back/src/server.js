//Module installed
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {PORT, url} from './config';

import { anonymeRouteUser } from './Routes/UserRoute';

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', anonymeRouteUser)

app.listen(PORT, () => console.log(`SERVER IS RUNNING ON PORT ${PORT}`));
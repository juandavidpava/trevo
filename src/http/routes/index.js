
import express from 'express';
const app = express();

import { draw } from './draw.js';
import { login } from './login.js';
import { ping } from './ping.js';
import { raffle } from './raffle.js';
import { serie } from './serie.js';
import { user } from './user.js';


/* ALL ROUTES WITH FILENAME */
app.use('/draw', draw)
app.use('/login', login)
app.use('/ping', ping)
app.use('/raffle', raffle)
app.use('/serie', serie)
app.use('/user', user)


export { app as routes}

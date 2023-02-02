import Draw from './draw.js';
import Raffle from './raffle.js';
import Ticket from './ticket.js';

Draw.hasMany(Raffle)
Draw.hasMany(Ticket)
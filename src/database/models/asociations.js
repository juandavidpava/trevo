const Draw = require('./draw')
const Raffle = require('./raffle')
const Ticket = require('./ticket')

Draw.hasMany(Raffle)
Draw.hasMany(Ticket)
import app from './config/app.js';

const main = () => {
    app.listen(app.get('port'));
    console.log(`Server on port`, app.get('port'));
};

main();

/* const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>Hola!</h1>')
})

app.listen(3000)
console.log('server on port ',3000) */
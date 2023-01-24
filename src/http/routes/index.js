
const epxress = require('express')
const router = epxress.Router()
const fileSystem = require('fs')

// Lee el directorio actual
const pathRouter = `${__dirname}`;

const removeExtension = fileName => fileName.split('.').shift();

// Crear rutas dinamicas
fileSystem.readdirSync(pathRouter).filter((file) => {
    const fileWithOutExt = removeExtension(file)
    
    // Para no incluir el index, que es el de config
    const skip = ['index'].includes(fileWithOutExt)

    // Se crea las rutas anteponiendo el nombre del archivo
    if (!skip)
        router.use(`/${fileWithOutExt}`, require(`./${fileWithOutExt}`));

})

router.get('*', (req, res) => {
    res.status(404)
    res.send({ error: 'Not found' })
})

module.exports = router
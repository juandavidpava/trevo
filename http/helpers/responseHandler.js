const httpInternalServerError = (res, err = 'backend error') => {
    console.log(err)
    res.status(500)
    res.send({ error: `Internal Server Error, ${err}`, status:500 })
}

const httpBadRequestError = (res, err = 'client error') => {
    console.log(err)
    res.status(400)
    res.send({ error: `Bad Request Error, ${err}`, status:400 })
}

const httpNotFoundError = (res, err = 'client error') => {
    console.log(err)
    res.status(404)
    res.send({ error: `Not Found Error, ${err}`, status:404 })
}

const httpSuccess= (res, data = {}) => {
    res.status(200)
    res.json({ data, status:200 })
}

const httpUnauthorizedError = (res, err = 'client error') => {
    console.log(err)
    res.status(401)
    res.send({ error: `Unauthorized Error, ${err}`, status:401 })
}

export {
    httpInternalServerError,
    httpBadRequestError,
    httpSuccess,
    httpNotFoundError,
    httpUnauthorizedError
}
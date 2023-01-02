import config from "../../config/config";

const checkAuthorization = (req, res, next) => {
   const header = req?.headers?.authorization
   if(!header){
      res.status(409);
      res.send({error:'header error'})
   }
   // TODO DO: Hacer vallidacion con token dinamico jwt
   if(header !== 'Bearer aabbcc11226633' ){
      res.status(409);
      res.send({error:'without permission'})
   }

   next()
}

export const middleware = { checkAuthorization }

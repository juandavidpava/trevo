import { repository } from '../database/repositories/serie.js';

const getSeriesByRaffle = async (id) => {
    const serie = await repository.getSeriesByRaffle(id)
    const serieGroup = []
    let page = []
    let document = []
    let i = 0  
    serie.forEach(s => {       
        if(i%9===0 && i!==0){
            document.push(page)
            page = []
        }
        if(i%1000===0 && i!==0){
            serieGroup.push(document)
            document = []
        }       
        page.push(s)
        i++
    })
    if((i-1)%1000!==0 && i!==0){
        serieGroup.push(document)
    }
    return serieGroup;
};

export const service = {
    getSeriesByRaffle     
}

import knex from '../database/connection';
import { Request, Response } from 'express'

class ItemController {
    async index( request: Request, response: Response ){
        const items = await knex('item').select('*');
    
    
        const serialisedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://localhost:3333/uploads/${item.image}`,
            }
        })
        return response.json(serialisedItems);
    }
}
export default ItemController;
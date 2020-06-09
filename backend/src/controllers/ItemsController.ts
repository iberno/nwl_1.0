import { Request,  Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async getItems(req: Request, res: Response) {
        const items = await knex('items').select('*');
        
        const serializedItems = items.map(item => {        
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.28:3333/uploads/${item.image}`
            }
        })
    
        return res.json(serializedItems);
    }
}

export default new ItemsController();
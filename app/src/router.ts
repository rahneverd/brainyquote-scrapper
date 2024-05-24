import { Request, Response, Router } from 'express'
import Scrapper from './scrapper'

const apiRouter = Router()
const port: number= 3000

apiRouter.get('/', (req: Request, res: Response) => {
  res.send(`Server is running on port ${port}`)
})

apiRouter.get('/getAuthors', (req: Request, res: Response) => {
  let scrapper = new (Scrapper as any)(req)
})

export default apiRouter
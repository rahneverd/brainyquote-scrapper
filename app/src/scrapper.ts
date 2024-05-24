import { Request } from "express";

let Scrapper = function (this: any, req: Request): any {
  this.req = req;
}



export default Scrapper
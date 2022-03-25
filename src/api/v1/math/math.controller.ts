import express from 'express';
import MathBusiness from './math.business';

type Request = express.Request<{ num1: string, num2: string }>;
type Response = express.Response;

export default class MathController {
  private mathBusiness: MathBusiness;

  constructor(mathBusiness: MathBusiness) {
    this.mathBusiness = mathBusiness;
  }

  private invokeMethodBusiness(req: Request, res: Response, method: keyof MathBusiness) {
    const { num1, num2 } = req.params;
    const result = this.mathBusiness[method](parseInt(num1), parseInt(num2));

    return res.json({ result });
  } 

  add(req: Request, res: Response) {
    return this.invokeMethodBusiness(req, res, 'add');
  }

  subtract(req: Request, res: Response) {
    return this.invokeMethodBusiness(req, res, 'subtract');
  }

  multiply(req: Request, res: Response) {
    return this.invokeMethodBusiness(req, res, 'multiply');
  }

  divide(req: Request, res: Response) {
    return this.invokeMethodBusiness(req, res, 'divide');
  }
}
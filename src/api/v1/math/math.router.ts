import express from 'express';
import MathBusiness from './math.business';
import MathController from './math.controller';

const router = express.Router();
const baseURL = '/math';
const mathBusiness = new MathBusiness();
const mathController = new MathController(mathBusiness);

router.get(`${baseURL}/add/:num1/:num2`, mathController.add.bind(mathController));
router.get(`${baseURL}/subtract/:num1/:num2`, mathController.subtract.bind(mathController));
router.get(`${baseURL}/multiply/:num1/:num2`, mathController.multiply.bind(mathController));
router.get(`${baseURL}/divide/:num1/:num2`, mathController.divide.bind(mathController));

export default router;
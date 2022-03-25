import MathBusiness from '../../../src/api/v1/math/math.business';

describe('Unit / Math Busines', () => {
  const mathBusiness = new MathBusiness();

  it('should add 2 and 2 and the result must be 4', () => {
    expect(mathBusiness.add(2, 2)).toBe(4);
  });

  it('should subtract 3 less 2 and the result must be 1', () => {
    expect(mathBusiness.subtract(3, 2)).toBe(1);
  });

  it('should multiply 3 times 3 and the result must be 1', () => {
    expect(mathBusiness.multiply(3, 3)).toBe(9);
  });

  it('should divide 30 by 3 and the result must be 10', () => {
    expect(mathBusiness.divide(30, 3)).toBe(10);
  });
});
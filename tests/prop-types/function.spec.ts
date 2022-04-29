import { functionProp } from '../../src/prop-types/function';

describe('functionProp().optional', () => {
  it('creates the correct prop options', () => {
    expect(functionProp().optional).toStrictEqual({
      type: Function,
      required: false,
      default: undefined,
      validator: undefined,
    });
  });
});

describe('functionProp().required', () => {
  it('creates the correct prop options', () => {
    expect(functionProp().required).toStrictEqual({
      type: Function,
      required: true,
      validator: undefined,
    });
  });
});
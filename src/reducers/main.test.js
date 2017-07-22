import main from './main.js';

describe('spec for Reducer', function() {
  const initialState = { url: '' };
  it('DEFAULT', () => {
    expect(main(initialState, { type: 'DEFAULT' })).toEqual({ url: '' });
  });
});

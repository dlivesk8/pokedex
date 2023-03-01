describe('when axios is called', () => {
  test('axios instance window', () => {
    const axios = require('./axios')
    expect(axios.REACT_APP_SWAP_MENU).not.toBeNull()
  })
})

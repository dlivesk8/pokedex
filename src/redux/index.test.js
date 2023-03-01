import {compose} from 'redux'

function createDevToolsMock() {
  window.__REDUX_DEVTOOLS_EXTENSION__ = function () {
    return compose.apply(null, null)
  }
}

describe('when idedex redux is called', () => {
  it('index', () => {
    createDevToolsMock()
    const storeTestNow = require('./index')
    expect(storeTestNow).not.toBe(null)
  })
})

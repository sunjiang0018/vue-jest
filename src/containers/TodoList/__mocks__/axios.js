export default {
  get (url) {
    if (url === '/getUndoList.json') {
      return new Promise(resolve => {
        const result = {
          success: true,
          data: [
            { value: 123, status: 'div' },
            { value: 1223, status: 'div' }
          ]
        }
        setTimeout(() => {
          resolve(result)
        }, 3000)
      })
    }
  }
}

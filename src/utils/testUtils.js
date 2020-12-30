
export function findTestWrapper (wrapper, name) {
  return wrapper.findAll(`[data-test='${name}']`)
}

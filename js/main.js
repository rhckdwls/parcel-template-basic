console.log('hi hi hi')

async function test() {
  const promise = Promise.resolve(123)
  console.log(await promise)
}
test()

// npm i -D @babel/plugin-transform-runtime
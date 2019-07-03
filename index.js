function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase)
}

const spy = expect.spyOn(console.log).andCallThrough(logShout)
logShout('hello')
expect(spy).toHaveBeenCalledWith('HELLO')
    
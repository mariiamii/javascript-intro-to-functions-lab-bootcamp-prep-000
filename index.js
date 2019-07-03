function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  
}


describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
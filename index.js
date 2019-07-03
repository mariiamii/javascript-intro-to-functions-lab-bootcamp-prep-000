function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(hello) {
  console.log(hello.toUpperCase())
}

function logWhisper(HELLO) {
  console.log(HELLO.toLowerCase())
}

function sayHiToGrandma(hello) {
  var lowercase = "I can't hear you!";
  var uppercase = "YES INDEED!";
  var mixedcase = "I love you, too!";
  
  if (hello.toLowerCase(hello) === hello) {
    return lowercase;
  }
  else if (hello.toUpperCase(hello) === hello) {
    return uppercase;
  }
  else if ("I love you, Grandma." === hello) {
    return mixedcase
  }
}

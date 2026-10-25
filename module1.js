var text = "Hello, world!";

var embedding = text.split("").map(function(char) {
  return char.charCodeAt(0) / 255;
});

console.log("Original text:", text);
console.log("Embedding:", embedding);
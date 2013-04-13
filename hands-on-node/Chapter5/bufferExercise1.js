var buffer = new Buffer(100),
    i = 0, max;

for (i = 0, max = buffer.length; i < max; i++) {
  buffer[i] = i;
}

console.log(buffer);

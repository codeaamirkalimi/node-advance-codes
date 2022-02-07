const buf = new Buffer(256);
const len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);

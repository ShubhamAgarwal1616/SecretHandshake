const one = (array) => array.push("wink");
const two = (array) => array.push("double blink");
const three = (array) => array.push("close your eyes");
const four = (array) => array.push("jump");
const five = (array) => array.reverse();

let array_of_operations = [one, two, three, four, five];

export const secretHandshake = (number) => {
  if(isNaN(number)) {
    throw "Handshake must be a number";
  }
  let handshake = [];
  let bit_checker = 1;
  [...Array(5).keys()].forEach((index) => {
    if (number & (bit_checker << index))
      array_of_operations[index](handshake);
  });
  return handshake;
};
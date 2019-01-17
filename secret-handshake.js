export const secretHandshake = (number) => {
  if (isNaN(number)) {
    throw "Handshake must be a number";
  }
  if(number == [1]) {
    return ['wink'];
  }
  return ['double blink'];
};
export const secretHandshake = (number) => {
  if (isNaN(number)) {
    throw "Handshake must be a number";
  }
  if(number == [1]) {
    return ['wink'];
  }
  if(number == [2]) {
    return ['double blink'];
  }
  return ['wink', 'double blink'];
};
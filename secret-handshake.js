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
  if(number == [3]) {
    return ['wink', 'double blink'];
  }
  return ['close your eyes'];
};
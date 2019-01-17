export const secretHandshake = (number) => {
  if (isNaN(number)) {
    throw "Handshake must be a number";
  }
  return ['wink'];
};
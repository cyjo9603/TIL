function solution(phone_number) {
  const blindNumber = phone_number.slice(0, phone_number.length - 4);
  return phone_number.replace(blindNumber, getStars(blindNumber));
}

function getStars(inputString) {
  let stars = '';
  for (let i = 0; i < inputString.length; i++) {
    stars += '*';
  }
  return stars;
}

console.log(solution('027778888'));

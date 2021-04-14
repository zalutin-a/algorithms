function sum(num) {
  const arrayFromNum = [...String(num)]
  return arrayFromNum.reduce((a,b) => +a + Number(b))
}
module.exports = sum;
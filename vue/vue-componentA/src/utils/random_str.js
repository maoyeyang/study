export default function (len = 32) {
  const $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
  let res = ''
  while (len > res.length) {
    res += $chars[parseInt(Math.random() * $chars.length)]
  }
  return res
}

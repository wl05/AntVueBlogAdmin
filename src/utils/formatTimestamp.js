<<<<<<< HEAD
const add0 = m => {
  return m < 10 ? '0' + m : m
}
const format = timestamps => {
  var time = new Date(parseInt(timestamps) * 1000)
  var y = time.getFullYear()
  var m = time.getMonth() + 1
  var d = time.getDate()
  var h = time.getHours()
  var mm = time.getMinutes()
  var s = time.getSeconds()
  return (
    y +
    '/' +
    add0(m) +
    '/' +
    add0(d) +
    ' ' +
    add0(h) +
    ':' +
    add0(mm) +
    ':' +
    add0(s)
  )
=======
const add0 = (m) => {
    return m < 10 ? '0' + m : m
}
const format = (timestamps) => {
    
    var time = new Date(parseInt(timestamps) * 1000);
    var y = time.getFullYear();
    var m = time.getMonth() + 1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y + '/' + add0(m) + '/' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s);
>>>>>>> 9e926002056326cce2bd476a6c8b23e9592204b7
}
export default format

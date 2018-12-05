// https://www.google.com.hk/search?q=test&oq=test&aqs=chrome..69i57j0l5.5644j0j8&sourceid=chrome&ie=UTF-8

let str = `q=test&oq=test&aqs=chrome..69i57j0l5.5644j0j8&sourceid=chrome&ie=UTF-8`

const querystring = require('querystring');

let obj = querystring.parse(str)

console.log(obj)

// { q: 'test',
//   oq: 'test',
//   aqs: 'chrome..69i57j0l5.5644j0j8',
//   sourceid: 'chrome',
//   ie: 'UTF-8' 
// }
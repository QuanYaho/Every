const str = `https://www.google.com.hk/search?q=test&oq=test&aqs=chrome..69i57j0l5.5644j0j8&sourceid=chrome&ie=UTF-8`

const url = require('url', true)   // true 也解析query

let obj = url.parse(str)

console.log(obj)

/*

Url {
    protocol: 'https:',
    slashes: true,
    auth: null,
    host: 'www.google.com.hk',
    port: null,
    hostname: 'www.google.com.hk',
    hash: null,
    search:
     '?q=test&oq=test&aqs=chrome..69i57j0l5.5644j0j8&sourceid=chrome&ie=UTF-8',
    query:
     'q=test&oq=test&aqs=chrome..69i57j0l5.5644j0j8&sourceid=chrome&ie=UTF-8',
    pathname: '/search',
    path:
     '/search?q=test&oq=test&aqs=chrome..69i57j0l5.5644j0j8&sourceid=chrome&ie=UTF-8',
    href:
     'https://www.google.com.hk/search?q=test&oq=test&aqs=chrome..69i57j0l5.5644j0j8&sourceid=chrome&ie=UTF-8' 
    }
    */
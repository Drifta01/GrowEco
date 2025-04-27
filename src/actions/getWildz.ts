export default async function getWildz(){
    const response = await fetch("https://www.wildz.com/nz/games/gamecategories.json?v=226180", {
        "headers": {
          "accept": "application/json",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "if-modified-since": "Fri, 25 Apr 2025 15:03:12 GMT",
          "if-none-match": "W/\"5da711585346ff6ce8a0303274a9b9c8\"",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDU4MTIwODcsImlkIjoiYzdlZTQ4YTYtZTc0MS00ODBiLWE0ZWYtODk5MzU4MDdlYzA1IiwiaXNzIjoid2lsZHoiLCJqZCI6Ik1HQSIsInRva2VuIjoiMmNmNzlhNWUtZGU1Ny00YzQyLWJmYmEtODc2YjRlMTdmNTg4IiwidWMiOiJOWiJ9.fcDWjubPWGoEc8t6GxHwVPhtvNJl1sSGsTtSdJDW83Y",
          "x-domain": "www.wildz.com",
          "x-requested-with": "fetch",
          "x-sitejurisdiction": "MGA",
          "x-tenant": "wildz",
          "cookie": "_vwo_uuid_v2=D6192049149A1A107E4CE61B4BA4320DB|ee984c252eb76f2d307e03597423b6f6; CookieConsent={stamp:%276cM/oZqcGG9XwjaY233NxjKQb+Q5stoA2O6VFtUdMLKxhbXtCgp0xQ==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:2%2Cutc:1745622155764%2Cregion:%27nz%27}; _gcl_au=1.1.1242563782.1745622153; _gid=GA1.2.498193198.1745622153; adformfrpid=9204505900636172000; __qca=P1-b273a183-7040-4a40-b8e1-07e0a21b118f; CF_AppSession=nb11a68a7e87e8f0b; sessionStart=1745725687103; _fs_dwell_passed=734ad3b3-c127-43eb-9d79-198a4900e2ca; _ga=GA1.2.743643945.1745622150; _gat_UA-133943796-1=1; _ga_Y51Q7PN98X=GS1.1.1745725684.14.1.1745725793.0.0.0; rootz_ujd=eyJhbGciOiJIUzI1NiJ9.eyJqdXJpc2RpY3Rpb24iOiJNR0EiLCJ1c2VyQ291bnRyeSI6Ik5aIiwidXNlcklkIjoiYzdlZTQ4YTYtZTc0MS00ODBiLWE0ZWYtODk5MzU4MDdlYzA1IiwiZG9tYWluIjoid3d3LndpbGR6LmNvbSIsImlhdCI6MTc0NTcyNTc5M30.KyGxk1WcgmTCtyZcnlLEtpZ5Ug-9KtRTi8oInBZe9wY; fs_lua=1.1745725793222; fs_uid=#o-57H8-eu1#bf01b3c4-868a-4b15-aa9d-c765d7d131e1:734ad3b3-c127-43eb-9d79-198a4900e2ca:1745725683549::3#ca574db7#/1777158226",
          "Referer": "https://www.wildz.com/nz/casino/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
} 
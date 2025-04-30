export default async function getStreamLive() {

const response = await fetch("https://www.wildz.com/api/stream-events", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9",
    "content-type": "application/json",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDYwNjk4MTksImlkIjoiYzdlZTQ4YTYtZTc0MS00ODBiLWE0ZWYtODk5MzU4MDdlYzA1IiwiaXNzIjoid2lsZHoiLCJqZCI6Ik1HQSIsInRva2VuIjoiYTAwODc5NzgtZWEyZi00Zjk3LWE3NjYtNGE5ZWUzNWZjZDMyIiwidWMiOiJOWiJ9.tMLdgVdeh02q-4kXdMfUo4XhJ9pEPMwiiXcP1REa08I",
    "x-domain": "www.wildz.com",
    "x-requested-with": "fetch",
    "x-sitejurisdiction": "MGA",
    "x-tenant": "wildz",
    "cookie": "Auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NDYwNjk4MTksImlkIjoiYzdlZTQ4YTYtZTc0MS00ODBiLWE0ZWYtODk5MzU4MDdlYzA1IiwiaXNzIjoid2lsZHoiLCJqZCI6Ik1HQSIsInRva2VuIjoiYTAwODc5NzgtZWEyZi00Zjk3LWE3NjYtNGE5ZWUzNWZjZDMyIiwidWMiOiJOWiJ9.tMLdgVdeh02q-4kXdMfUo4XhJ9pEPMwiiXcP1REa08I; _vwo_uuid_v2=D6192049149A1A107E4CE61B4BA4320DB|ee984c252eb76f2d307e03597423b6f6; CookieConsent={stamp:%276cM/oZqcGG9XwjaY233NxjKQb+Q5stoA2O6VFtUdMLKxhbXtCgp0xQ==%27%2Cnecessary:true%2Cpreferences:true%2Cstatistics:true%2Cmarketing:true%2Cmethod:%27explicit%27%2Cver:2%2Cutc:1745622155764%2Cregion:%27nz%27}; _gcl_au=1.1.1242563782.1745622153; _gid=GA1.2.498193198.1745622153; adformfrpid=9204505900636172000; __qca=P1-b273a183-7040-4a40-b8e1-07e0a21b118f; CF_AppSession=n3dc6df2c1b3eab5b; _fbp=fb.1.1745948971180.125717705177342123; _fs_dwell_passed=24ac14fe-fea4-48b7-8ac9-3e22ab3ac5db; fs_uid=#o-57H8-eu1#bf01b3c4-868a-4b15-aa9d-c765d7d131e1:24ac14fe-fea4-48b7-8ac9-3e22ab3ac5db:1745976484521::13#ca574db7#/1777158402; sessionStart=1745983421468; _gat_UA-133943796-1=1; _ga_Y51Q7PN98X=GS1.1.1745983420.44.1.1745983446.0.0.0; _ga=GA1.1.743643945.1745622150; rootz_ujd=eyJhbGciOiJIUzI1NiJ9.eyJqdXJpc2RpY3Rpb24iOiJNR0EiLCJ1c2VyQ291bnRyeSI6Ik5aIiwidXNlcklkIjoiYzdlZTQ4YTYtZTc0MS00ODBiLWE0ZWYtODk5MzU4MDdlYzA1IiwiZG9tYWluIjoid3d3LndpbGR6LmNvbSIsImlhdCI6MTc0NTk4MzQ0NX0.dmW58jPhjAViWMybdYNxRlsB-HCQMKFWq2yK2Sw0IR0",
    "Referer": "https://www.wildz.com/nz/live/wildz-channel/",
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

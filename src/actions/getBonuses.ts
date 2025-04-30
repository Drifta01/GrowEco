export default async function getBonuses() {
    const response = await fetch("https://sb2bonus-altenar2.biahosted.com/api/WidgetBonus/GetMultipleBonuses", {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          "priority": "u=1, i",
          "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "Referer": "https://www.wildz.com/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": "{\"culture\":\"en-GB\",\"timezoneOffset\":-720,\"integration\":\"wildz.nz\",\"deviceType\":1,\"numFormat\":\"en-GB\"}",
        "method": "POST"
      });
    
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    return data;
}
// fetch("https://sb2bethistory-altenar2.biahosted.com/api/WidgetReports/GetOpenBetsCount", {
//   "headers": {
//     "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJDb25maWd1cmF0aW9uSWQiOiIxMiIsIlBlcnNvblR5cGUiOiIzIiwiUGVyc29uSWQiOiIzOTk2MzQzMSIsIlVzZXJOYW1lIjoiYzdlZTQ4YTYtZTc0MS00ODBiLWE0ZWYtODk5MzU4MDdlYzA1IiwiTG9naW5JZCI6IjQ3OTM2NTA2IiwiQ3VycmVuY3lTaWduIjoiTlpEIiwiTWluQm9udXNQcmljZSI6IjEuMiIsIkJvbnVzVGVtcGxhdGVJZCI6IjI3MyIsIkN1cnJlbmN5SWQiOiI1NTQiLCJDdXJyZW5jeUNvZGUiOiJOWkQiLCJDb3VudHJ5Q29kZSI6Ik5aIiwiQnJhbmRJZCI6IjU0NyIsIkNsaWVudElQIjoiMTI1LjIzNy4xNTcuMjE0IiwiZXhwIjoxNzQ1OTQ5OTAwLCJpc3MiOiJTQjIiLCJhdWQiOiJTQjIifQ.ySx2dEzc7YtTMdDuUDHZ2xV-MLqge6FGN7jxTng-ymM",
//     "content-type": "application/json",
//     "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
//     "sec-ch-ua-mobile": "?0",
//     "sec-ch-ua-platform": "\"Windows\"",
//     "Referer": "https://www.wildz.com/",
//     "Referrer-Policy": "strict-origin-when-cross-origin"
//   },
//   "body": "{\"culture\":\"en-GB\",\"timezoneOffset\":-720,\"integration\":\"wildz.nz\",\"deviceType\":1,\"numFormat\":\"en-GB\",\"countryCode\":\"NZ\"}",
//   "method": "POST"
// });
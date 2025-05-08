// export default async function getCasinos() {
//   const response = await fetch("https://www.askgamblers.com/api/online-casinos/countries-section/5357b61a70a0f8370d8b4d95", {
//       "headers": {
//         "accept": "*/*",
//         "content-type": "application/json; charset=UTF-8",
//         "sec-ch-ua": "\"Google Chrome\";v=\"135\", \"Not-A.Brand\";v=\"8\", \"Chromium\";v=\"135\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": "\"Windows\"",
//         "x-requested-with": "XMLHttpRequest",
//         "Referer": "https://www.askgamblers.com/online-casinos",
//         "Referrer-Policy": "strict-origin-when-cross-origin"
//       },
//       "body": null,
//       "method": "GET"
//     });
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   const data = await response.json();
//   return data;
// }

export default async function getSportBet() {
  const response = await fetch(
    'https://sb2frontend-altenar2.biahosted.com/api/Widget/GetSportInfo?culture=en-GB&timezoneOffset=-720&integration=wildz.nz&deviceType=1&numFormat=en-GB&typeIds=317%2C2%2C3',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.9',
        priority: 'u=1, i',
        'sec-ch-ua':
          '"Google Chrome";v="135", "Not-A.Brand";v="8", "Chromium";v="135"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'cross-site',
        Referer: 'https://www.wildz.com/',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
      body: null,
      method: 'GET',
    },
  );

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}

export default async function getCasinos() {
  const response = await fetch(
    'https://sb2bonus-altenar2.biahosted.com/api/WidgetBonus/GetMultipleBonuses',
    {
      headers: {
        accept: '*/*',
        'accept-language': 'en-US,en;q=0.9',
        'content-type': 'application/json',
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
      body: '{"culture":"en-GB","timezoneOffset":-720,"integration":"wildz.nz","deviceType":1,"numFormat":"en-GB"}',
      method: 'POST',
    },
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
}
  // return data.map((casino: any) => 
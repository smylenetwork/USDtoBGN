window.function = async function(amount) {
  // Extracting the value and setting a default value if it's undefined
  amount = amount.value ?? 0;

  // Using the provided API to fetch the exchange rate
  var myHeaders = new Headers();
  myHeaders.append("apikey", "xkSPIqtCKYGyypmZT7nUnSAPGAhC5XqM");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };

  try {
    const response = await fetch("https://api.apilayer.com/exchangerates_data/latest?symbols=BGN&base=USD", requestOptions);
    const data = await response.json();

    // Check if the fetch was successful
    if (data.success) {
      const rate = data.rates.BGN;
      return amount * rate;
    }
  } catch (error) {
    console.log('error', error);
  }

  // Return undefined in case of an error or if the fetch was not successful
  return undefined;
}

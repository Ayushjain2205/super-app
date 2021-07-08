export const checkout = (amount) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("access_key", "EB43BB1BA30144280EFE");
  myHeaders.append("salt", "4b84051446b4052e8f062989");
  myHeaders.append("timestamp", "1625742164");
  myHeaders.append(
    "signature",
    "ODNjNjMxMThmYjgzMDFmYjNmYjA2ODNjY2I1N2RkMDM5OWRlNzMyYzkxNDg1ZjA0ZTU5MDI2NjA4YTQ3MWU0OA=="
  );

  var raw = JSON.stringify({
    amount: amount,
    complete_payment_url: "https://cuebe-super-app.herokuapp.com/home",
    country: "IN",
    currency: "INR",
    customer: "Cus_5cfe0adf7e85a1b8dc70961b335f2366",
    error_payment_url: "https://cuebe-super-app.herokuapp.com/home",
    merchant_reference_id: "950ae8c6-78",
    cardholder_preferred_currency: true,
    language: "en",
    metadata: {
      merchant_defined: true,
    },
    payment_method_types_include: [
      "in_bharatpay_cash",
      "in_visa_credit_card",
      "in_maestro_debit_card",
      "in_airtelmoney_ewallet",
    ],
    expiration: 1611384431,
    payment_method_types_exclude: [],
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
    mode: "no-cors",
  };

  var data;

  fetch("https://sandboxapi.rapyd.net/v1/checkout", requestOptions)
    .then((response) => response.text())
    .then((result) => (data = result))
    .catch((error) => console.log("error", error));

  return data;
};

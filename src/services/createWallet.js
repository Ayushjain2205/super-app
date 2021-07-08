export const createWallet = (user) => {
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
    first_name: user.first_name,
    last_name: user.last_name,
    email: "",
    ewallet_reference_id: "John-Doe-02152020",
    metadata: {
      merchant_defined: true,
    },
    phone_number: "",
    type: "person",
    contact: {
      phone_number: `${user.country_code}${user.phone}`,
      email: user.email,
      first_name: user.first_name,
      last_name: user.last_name,
      mothers_name: user.last_name,
      contact_type: "personal",
      address: {
        name: `${user.first_name}${user.last_name}`,
        line_1: user.address,
        line_2: "",
        line_3: "",
        city: user.city,
        state: user.state,
        country: user.country_code,
        zip: user.zipcode,
        phone_number: user.phone,
        metadata: {},
        canton: "",
        district: "",
      },
      identification_type: "PA",
      identification_number: "1234567890",
      date_of_birth: user.dob,
      country: user.country_code,
      nationality: user.country_code,
      metadata: {
        merchant_defined: true,
      },
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  var data;

  fetch("https://sandboxapi.rapyd.net/v1/user", requestOptions)
    .then((response) => response.text())
    .then((result) => (data = result))
    .catch((error) => console.log("error", error));

  return data;
};

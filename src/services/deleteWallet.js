export const deleteWallet = (walletID) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("access_key", "EB43BB1BA30144280EFE");
  myHeaders.append("salt", "4b84051446b4052e8f062989");
  myHeaders.append("timestamp", "1625742164");
  myHeaders.append(
    "signature",
    "ODNjNjMxMThmYjgzMDFmYjNmYjA2ODNjY2I1N2RkMDM5OWRlNzMyYzkxNDg1ZjA0ZTU5MDI2NjA4YTQ3MWU0OA=="
  );

  var raw = "";

  var requestOptions = {
    method: "DELETE",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  var data;

  fetch(
    `https://sandboxapi.rapyd.net/v1/user/ewallet_${walletID}`,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => (data = result))
    .catch((error) => console.log("error", error));

  return data;
};

async function connect() {
  // Check if MetaMask is installed, if it is, try connecting to an account
  if (typeof window.ethereum !== "undefined") {
    try {
      console.log("connecting");
      // Requests that the user provides an Ethereum address to be identified by. The request causes a MetaMask popup to appear. Read more: https://docs.metamask.io/guide/rpc-api.html#eth-requestaccounts
      await ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    // If connected, change button to "Connected"
    document.getElementById("login_button").innerHTML = "Connected";
    // If connected, enable "Swap" button
    document.getElementById("swap_button").disabled = false;
  } else {// Ask user to install MetaMask if it's not detected
    console.log("no MetaMask");
    document.getElementById("login_button").innerHTML =
      "Please install MetaMask";
  }
}

// Call the connect function when the login_button is clicked
document.getElementById("login_button").onclick = connect;
function submitForm(event) {
  console.log("event" + JSON.stringify(event));
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form element
  const form = event.target;

  console.log("form" + JSON.stringify(form));

  // Get the form data
  const formData = new FormData(form);

  console.log("form data" + JSON.stringify(formData));

  // Send a POST request to the server, with the form data as the request body
  fetch("https://localhost:7283/api/Auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      // Do something with the response from the server (e.g. check the status code)
      if (response.status === 200) {
        // The request was successful, do something (e.g. redirect the user to a new page)
      } else {
        // There was an error, do something (e.g. display an error message to the user)
      }
    })
    .catch((error) => {
      // Do something with the error (e.g. log it to the console)
      console.error(error);
    });
}

// function submitForm(data) {
//   console.log(data.email);
//   const headers = new HttpHeaders()
//     .set("Content-Type", "application/x-www-form-urlencoded")
//     .set("email", data.email)
//     .set("password", data.password);
//   console.warn(data);
//   this.http
//     .post("https://localhost:7283/api/Auth/register", null, {
//       headers: headers,
//     })
//     .subscribe((response) => {
//       console.log(response);
//     });
//   this.formdata.reset();
// }

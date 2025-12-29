async function getDetails() {
  const data = await fetch(`http://localhost:8080/customer/api/get-details`);
  const customer = await data.json();
  console.log(customer);

  let body = "";
  customer.forEach((customer) => {
    body += `<tr>
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>${customer.address}</td>
        <td>${customer.number}</td>
        <td>${customer.salary}</td>
    </tr>`;
  });

  document.getElementById("tblCustomerDetails").innerHTML = body;
}
function saveCustomer() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const id = document.getElementById("txtCustomerId").value;
  const name = document.getElementById("txtCustomerName").value;
  const address = document.getElementById("txtCustomerAddress").value;
  const number = document.getElementById("txtCustomerNumber").value;
  const salary = document.getElementById("txtCustomerSalary").value;

  const raw = JSON.stringify({
    id: id,
    name: name,
    address: address,
    number: number,
    salary: salary,
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("http://localhost:8080/customer/api/add-details", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

  document.getElementById("txtCustomerId").value = "";
  document.getElementById("txtCustomerName").value = "";
  document.getElementById("txtCustomerAddress").value = "";
  document.getElementById("txtCustomerNumber").value = "";
  document.getElementById("txtCustomerSalary").value = "";
}

// Initialize background animations on page load
document.addEventListener("DOMContentLoaded", function () {
  anime({
    targets: ".blob-1",
    translateX: [
      { value: 80, duration: 4000 },
      { value: 0, duration: 4000 },
    ],
    translateY: [
      { value: -60, duration: 4000 },
      { value: 0, duration: 4000 },
    ],
    scale: [
      { value: 1.1, duration: 2000 },
      { value: 1, duration: 2000 },
    ],
    loop: true,
    easing: "easeInOutQuad",
  });

  anime({
    targets: ".blob-2",
    translateX: [
      { value: -80, duration: 5000 },
      { value: 0, duration: 5000 },
    ],
    translateY: [
      { value: 80, duration: 5000 },
      { value: 0, duration: 5000 },
    ],
    scale: [
      { value: 0.9, duration: 2500 },
      { value: 1, duration: 2500 },
    ],
    loop: true,
    easing: "easeInOutQuad",
  });

  anime({
    targets: ".blob-3",
    translateX: [
      { value: 50, duration: 6000 },
      { value: 0, duration: 6000 },
    ],
    translateY: [
      { value: -80, duration: 6000 },
      { value: 0, duration: 6000 },
    ],
    scale: [
      { value: 1.05, duration: 3000 },
      { value: 1, duration: 3000 },
    ],
    loop: true,
    easing: "easeInOutQuad",
  });
});

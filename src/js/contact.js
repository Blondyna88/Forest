const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const items = document.querySelectorAll(".item");


function sendEmail() {
	const bodyMessage = `Imię i nazwisko: ${fullName.value} <br> E-mail: ${email.value}<br> Telefon: ${phone.value} <br> Wiadomość: ${message.value}`;

	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "myprogramtest3@gmail.com",
		Password: "D2181D49CCDE3F0E82A43E98691E79704087",
		To: "myprogramtest3@gmail.com",
		From: "myprogramtest3@gmail.com",
		Subject: "Forest kontakt",
		Body: bodyMessage,
	}).then(message => {
		if (message == "OK") {
			Swal.fire({
				title: "Dobra robota!",
				text: "Wiadomość przesłana poprawnie!",
				icon: "success",
			});
		}
	});
}

function checkInputs() {
	for (const item of items) {
		if (item.value == "") {
			item.classList.add("error-field");
			item.nextElementSibling.classList.add("error");
		}

      if (items[0].value != "") {
			checkName();
		}

		items[0].addEventListener("keyup", () => {
			checkName();
		});

		if (items[1].value != "") {
			checkEmail();
		}

		items[1].addEventListener("keyup", () => {
			checkEmail();
		});

		if (items[2].value != "") {
			checkPhone();
		}

		items[2].addEventListener("keyup", () => {
			checkPhone();
		});

		item.addEventListener("keyup", () => {
			if (item.value != "") {
				item.classList.remove("error-field");
				item.nextElementSibling.classList.remove("error");
			} else {
				item.classList.add("error-field");
				item.nextElementSibling.classList.add("error");
			}
		});
	}
}

const checkName = () => {
	const fullNameRegex =/^([a-zA-Z]+) ([a-zA-Z-'\. ])+$/;

	if (!fullName.value.match(fullNameRegex)) {
		fullName.classList.add("error-field");
		fullName.nextElementSibling.classList.add("error");

		if (fullName.value != "") {
			fullName.nextElementSibling.innerText = "Nieprawidłowe dane";
		} else {
			fullName.nextElementSibling.innerText = "To pole jest puste!";
		}
	} else {
		fullName.classList.remove("error-field");
		fullName.nextElementSibling.classList.remove("error");
	}
};

const checkEmail = () => {
	const emailRegex =  /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

	if (!email.value.match(emailRegex)) {
		email.classList.add("error-field");
		email.nextElementSibling.classList.add("error");

		if (email.value != "") {
			email.nextElementSibling.innerText = "Nieprawidłowy adres e-mail!";
		} else {
			email.nextElementSibling.innerText = "To pole jest puste!";
		}
	} else {
		email.classList.remove("error-field");
		email.nextElementSibling.classList.remove("error");
	}
};

function checkPhone() {
	const phoneRegex = /^([0-9]{8,13})?$/;

	if (!phone.value.match(phoneRegex)) {
		phone.classList.add("error-field");
		phone.nextElementSibling.classList.add("error");

		if (phone.value != "") {
			phone.nextElementSibling.innerText = "Nieprawidłowy numer!";
		} else {
			phone.nextElementSibling.innerText = "To pole jest puste!";
		}
	} else {
		phone.classList.remove("error-field");
		phone.nextElementSibling.classList.remove("error");
	}
}

const resetForm = () => {
	for (const item of items) {
		item.value = "";
	}
};

form.addEventListener("submit", e => {
	e.preventDefault();
	checkInputs();

	if (
		!fullName.classList.contains("error-field") &&
		!email.classList.contains("error-field") &&
		!phone.classList.contains("error-field") &&
		!message.classList.contains("error-field")
	) {
		sendEmail();
      resetForm();
	}
});

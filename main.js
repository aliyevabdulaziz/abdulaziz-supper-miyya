function openModal() {
	document.getElementById('myModal').style.display = 'flex';
	document.querySelector('body').style.overflow = 'hidden';
	clearErrors();
}

function closeModal() {
	document.querySelector('body').style.overflow = 'auto';
	document.getElementById('myModal').style.display = 'none';
	clearErrors();
}

window.onclick = function (event) {
	let modal = document.getElementById('myModal');
	if (event.target == modal) {
		modal.style.display = 'none';
	document.querySelector('body').style.overflow = 'scroll';

		clearErrors();
	}
};

function validateForm() {
	let name = document.getElementById('name');
	let phone = document.getElementById('phone');
	let nameError = document.getElementById('nameError');
	let phoneError = document.getElementById('phoneError');
	let formAlert = document.getElementById('formAlert');

	let valid = true;

	if (name.value.trim() === '') {
		name.classList.add('error');
		nameError.style.display = 'block';
		valid = false;
	} else {
		name.classList.remove('error');
		nameError.style.display = 'none';
	}

	if (phone.value.trim() === '') {
		phone.classList.add('error');
		phoneError.style.display = 'block';
		valid = false;
	} else {
		phone.classList.remove('error');
		phoneError.style.display = 'none';
	}

	if (!valid) {
		formAlert.style.display = 'block';
	} else {
		formAlert.style.display = 'none';
		document.querySelector('a').setAttribute("href", "a.html")
		closeModal();
	}
}

function clearErrors() {
	document.getElementById('name').classList.remove('error');
	document.getElementById('phone').classList.remove('error');
	document.getElementById('nameError').style.display = 'none';
	document.getElementById('phoneError').style.display = 'none';
	document.getElementById('formAlert').style.display = 'none';
}

// Tashqariga bosilganda yopish
// window.onclick = function (event) {
// 	let modal = document.getElementById('myModal');
// 	if (event.target == modal) {
// 		modal.style.display = 'none';
// 	}
// };
//  const input = document.querySelector('#phone');
//  window.intlTelInput(input, {
// 		initialCountry: 'uz', // Dastlabki davlat
// 		utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@18.1.1/build/js/utils.js', // Formatlash uchun
//  });

import { registrationForm } from "./jwt-form-reg-login.js"


function getPageContainer() {
	const page = document.createElement("container")
	page.classList.add("container-reg")
	return page
}

export async function registration() {

	let pageContainer = getPageContainer()
	const reg = await registrationForm()
	// let authModal = headerSection.querySelector(".modal")
	reg.classList.add("open")
	// authModal.classList.add("open")
	
	pageContainer.append(reg)

	let regForm = pageContainer.querySelector(".jwt-modal form")


	regForm.addEventListener("submit", async function (elem) {
		elem.preventDefault();
		// let modalRegBtn = document.querySelector("#reg-Btn")


		let modalBox = document.querySelector(".jwt-modal__box")
		// let modalh5 = document.querySelector(".jwt-modal__box h5")
		
		// modalRegBtn.setAttribute("style", "height: 70px; margin-top: -50px;")
		// modalRegBtn.textContent = "обновить JWT"

		// modalRegBtn.classList.remove("reg-Btn")
		// modalRegBtn.classList.add("reg-Btn-click")
		
		// modalh5.textContent = "лк"
		// let regInputs = document.querySelector(".modal__box form")
		regForm.classList.remove("on-dis-l")
		regForm.classList.add("dis-l")

		let regNewBtn = document.querySelector(".jwt-modal__box #Btn-click")
		// regNewBtn.setAttribute("style", "background-color: #e60f1d;")

		regNewBtn.classList.remove("dis-l")
		regNewBtn.textContent = "обновить JWT"
		regNewBtn.classList.add("on-dis-l")

		modalBox.classList.remove("jwt-modal__box")
		modalBox.classList.add("jwt-modal__box-click")

		
		let regUsername = document.querySelectorAll(".jwt-modal #reg-username")
		let regPassword = document.querySelectorAll(".jwt-modal #reg-password")

		//  one@mail.ru1
		//  qwerty

		// Array.from(regForm).forEach(async function (e) {

		// console.log(regUsername[0].value, regPassword[0].value)

		let formData = new FormData()
		
		
		formData.append('username', regUsername[0].value);
		formData.append('password', regPassword[0].value)
		// formData.append('is_active', true)
		// console.log(formData, "+----")


	const response = await fetch('https://jwt.tesseractmaks.tech/api/v1/users/',
		{
			method: 'POST',
			body: JSON.stringify(
				{
				'email': regUsername[0].value,
				'password': regPassword[0].value,
				'is_active': true
			}
			),
			headers: {
				'Content-Type': 'application/json',
				// 'Access-Control-Allow-Origin': "https://portfolio.tesseractmaks.tech/"
			},
			credentials: 'include'
            })

	const data = await response.json();
	console.log(data, "----")

	// let formData = new FormData()
	// 	formData.append('username', loginUsername[0].value);
	// 	formData.append('password', loginPassword[0].value)
	const currentDate = new Date().toISOString();
	

	if (data.is_active) {
		const response = await fetch('https://jwt.tesseractmaks.tech/token/',
		{
			method: 'POST',
			body: formData,
			// body: JSON.stringify(
			// 	{
			// 	'email': regUsername[0].value,
			// 	'password': regPassword[0].value,
			// }),
			headers: {
				"Authorization": "Bearer ",
				// 'Content-Type': 'application/json'
			},
			credentials: 'include'
			})

		// const token = await response.json();
		// console.log(" -- ", token)
		// console.log(" +-- ", document.cookie)
		// let exp = token.access_token.split(" ")
		// let expToken = `${exp[0]}T${exp[1]}Z`
		// let decodedString = atob(document.cookie.split(".")[1]);
        // let exp = Object.values(JSON.parse(decodedString))[1]
        // let date = new Date(exp * 1000);
        // let expToken = date.toISOString()
		// window.localStorage.setItem("expToken", expToken)
	}
});
	return pageContainer
}




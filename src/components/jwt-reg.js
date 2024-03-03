import { registrationForm } from "./jwt-form-reg-login.js"


function getPageContainer() {
	const page = document.createElement("container")
	page.classList.add("container-reg")
	return page
}

export async function registration() {

	// let pageContainer = getPageContainer()
	const reg = await registrationForm()
	// let authModal = headerSection.querySelector(".modal")
	reg.classList.add("open")
	// authModal.classList.add("open")
	
	// pageContainer.append(reg)
	
	// return pageContainer
	return reg
}




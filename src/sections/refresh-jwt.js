import { aIelements, aElements, anyElement, buttonElement } from "../components/elements.js"
import { registration } from "../components/jwt-reg.js"
import { designBlock } from "../components/design-block.js"
import { jwtText } from "./description.js"


export async function refreshSection() {
    const refresh = document.createElement("section")
    refresh.classList.add("section-refr")
    refresh.id = "refresh"


    const sectionHead = document.createElement("div")
    sectionHead.classList.add("section-head")
    const h1 = document.createElement("h1")
    h1.textContent = "REFRESH-JWT"
    h1.classList.add("titleH")
    h1.id = "h-jwt"
    h1.style = "color: #4af305;"
    
    sectionHead.append(h1)

	let leftDiv = anyElement("div", ["left-jwt"])
	leftDiv.append(jwtText)
    
    // let contanerDiv = anyElement("div", ["refr-cont-div-txt"])
    const reg = await registration()

 
    // sectionHead.append(reg)
    
	let bottomDiv = await designBlock(
		"jwt-modal",
		 "bgd-jwt",
		 "syst-design",
		 "bottom-refr-main"
		 )
		 bottomDiv.id = "design-b"

    refresh.append(leftDiv, reg,
        // contanerDiv,
        bottomDiv
    )
    
    sectionHead.append(refresh)

	bottomDiv.querySelector("#jwt-modal").addEventListener('click', async function (e) {
        e.preventDefault()
		
        bottomDiv.querySelector("#bgd-jwt").classList.add("open")
    })
    return sectionHead
}


export async function runJwt(){
let refreshBtn = document.querySelector("#Btn-click")

if (refreshBtn){
	console.log(refreshBtn,"1---refreshBtn----")
	
    let cnt = 1
    
    refreshBtn.addEventListener("click", async function (elem) {
        // elem.preventDefault()
		if(cnt == 5){
			cnt = 1
		}
        cnt++
		console.log(cnt,"2---cnt----")
        
        if(cnt<5 && 1<cnt){
            
            console.log(cnt,"---cnt----")
            let response = await fetch(`https://jwt.tesseractmaks.tech/token/refresh?num=${cnt}`,
        { 
            // headers: {
                // 'Content-Type': 'multipart/form-data',
            // 'Access-Control-Allow-Origin': "*"
        // },
            
            headers: {
                "Authorization": "Bearer ", 
                // 'Access-Control-Allow-Origin': "*"
        },
            credentials: 'include'

        }
        )
        // const refreshToken = await response.json();
        
        const refreshToken = await response.blob();
        console.log(refreshToken)
        let img = URL.createObjectURL(refreshToken)
        refresh.style.backgroundImage = `url(${img})`
		// URL.revokeObjectURL(img)
    }
    
    if(cnt==4){
        refreshBtn.textContent = "выйти"
    }
    if(cnt==5){
        const url = 'https://jwt.tesseractmaks.tech/token/auth/logout'
	    const response = await fetch(url, {
		method: 'POST',
		credentials: 'include',
	})
    console.log(cnt,"cnt==5")
	
	let bottomDesign = document.querySelector("#design-b")
		bottomDesign.classList.add("bottom-refr-main")
		bottomDesign.classList.remove("bottom-refr")

    refresh.style.backgroundImage = "url('../img/refresh/jwt.jpg')"
	let textJwt = document.querySelector(".left-jwt")
	textJwt.classList.remove("dis-l")

    let modalBox = document.querySelector("#jwt-modal-box")
		modalBox.classList.remove("jwt-modal__box-click")
		modalBox.classList.add("jwt-modal__box")

        let regInputs = document.querySelector("#jwt-modal-box form")
        console.log(regInputs,"=-=")
        regInputs.classList.remove("dis-l")
        regInputs.classList.add("on-dis-l")

        let modalRegBtn = document.querySelector("#reg-Btn")
        modalRegBtn.classList.remove("dis-l")
		modalRegBtn.classList.add("on-dis-l")

		let regNewBtn = document.querySelector("#jwt-modal-box #Btn-click")
		regNewBtn.classList.remove("on-dis-l")
		regNewBtn.classList.add("dis-l")
        // return
    }

    // if(cnt==5){
    //     cnt = 0
    // }
    })
}
};


export async function smtReg() {
	// console.log("smtReg")
    
    let regForm = document.querySelector("#reg-Btn")
	console.log(regForm)
   if (regForm){
		// console.log("regForm", regForm)

	regForm.addEventListener("click", async function (elem) {
		elem.preventDefault()
		let bottomDesign = document.querySelector("#design-b")
		bottomDesign.classList.remove("bottom-refr-main")
		bottomDesign.classList.add("bottom-refr")

		let textJwt = document.querySelector(".left-jwt")
		textJwt.classList.add("dis-l")

		console.log("regForm")

		let img;

		// elem.preventDefault();
		
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

		let regFormR = document.querySelector(".jwt-modal form")
		regFormR.classList.remove("on-dis-l")
		regFormR.classList.add("dis-l")

		

		//  one@mail.ru1
		//  qwerty

		// Array.from(regForm).forEach(async function (e) {

		// console.log(regUsername[0].value, regPassword[0].value)

		let formData = new FormData()
		
		formData.append('username', regUsername[0].value);
		formData.append('password', regPassword[0].value)
		// formData.append('is_active', true)
	
	
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
				'Access-Control-Allow-Origin': "https://portfolio.tesseractmaks.tech"
			},
			credentials: 'include',
            })

	const data = await response.json();
	// console.log(data, "----")

	// let formData = new FormData()
	// 	formData.append('username', loginUsername[0].value);
	// 	formData.append('password', loginPassword[0].value)
	// const currentDate = new Date().toISOString();

	
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
				// 'Access-Control-Allow-Origin': "/"
				// 'Content-Type': 'application/json'
			},
			credentials: 'include',
			})
			console.log("--1--")
		
		const refreshToken = await response.blob();
		img = URL.createObjectURL(refreshToken)
		// img = `"data:image/jpeg;base64,${refreshToken}`
		
		let refresh = document.querySelector("#refresh")

		// if(refresh){
		refresh.style.backgroundImage = `url(${img})`
		
		// URL.revokeObjectURL(img)
		
			console.log("--3--")
		// }

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

	
	// console.log("img", img)
	// return {"reg": pageContainer, "img":img}
});
}
}
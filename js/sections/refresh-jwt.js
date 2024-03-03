import { aIelements, aElements, anyElement, buttonElement } from "../components/elements.js"
import { registration } from "../components/jwt-reg.js"
import { designBlock } from "../components/design-block.js"


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
    
    // let contanerDiv = anyElement("div", ["refr-cont-div-txt"])
    const reg = await registration()
    sectionHead.append(reg)

    let bottomDiv = await designBlock()

    refresh.append(
        // contanerDiv,
        bottomDiv
    )
    sectionHead.append(refresh)
    await runJwt(refresh)
    return sectionHead
}


async function runJwt(refresh){
let refreshBtn = refresh.querySelector("#Btn-click")
if (refreshBtn){
    let cnt = 0
    refreshBtn.addEventListener("click", async function (elem) {
        cnt++
        console.log(cnt,"-------")
        let response = await fetch(`https://jwt.tesseractmaks.tech/token/refresh`,
    { 
        // headers: {
            // 'Content-Type': 'multipart/form-data',
        // 'Access-Control-Allow-Origin': "*"
    // },
        
        headers: {
            "Authorization": "Bearer ", 
            'Access-Control-Allow-Origin': "*"
    },
        credentials: 'include'

    }
    )
    // const refreshToken = await response.json();
    
    const refreshToken = await response.blob();
    console.log(refreshToken)
    let img = URL.createObjectURL(refreshToken)
    refresh.style.backgroundImage = `url(${img})`

    if(cnt==3){
        refreshBtn.textContent = "выйти"
    }
    if(cnt==4){
        const url = 'https://jwt.tesseractmaks.tech/token/auth/logout'
	    const response = await fetch(url, {
		method: 'POST',
		credentials: 'include',
	})

    let modalBox = document.querySelector("#jwt-modal-box")
		modalBox.classList.remove("modal__box-click")
		modalBox.classList.add("modal__box")

        let regInputs = document.querySelector("#jwt-modal-box form")
        console.log(regInputs,"=-=")
        regInputs.classList.remove("dis-l")
        regInputs.classList.add("on-dis-l")

        // let modalRegBtn = document.querySelector("#reg-Btn")
        // modalRegBtn.classList.remove("dis-l")
		// modalRegBtn.classList.add("on-dis-l")

		let regNewBtn = document.querySelector("#jwt-modal-box #Btn-click")
		regNewBtn.classList.remove("on-dis-l")
		regNewBtn.classList.add("dis-l")
        cnt = 0
    }
    })
}
};
import { aIelements, aElements, anyElement, buttonElement } from "../components/elements.js"
import { designBlock } from "../components/design-block.js"

import { mainMenu } from "../components/chat-left.js";
import { mainMenu2 } from "../components/chat-right.js";


export async function chatSection() {
    const chatMain = document.createElement("section")
    chatMain.classList.add("section-chat")
    chatMain.id = "chat"

    const sectionHead = document.createElement("div")
    sectionHead.classList.add("section-head")
    const h1 = document.createElement("h1")
    h1.textContent = "ЧАТ"
    h1.classList.add("titleH")
    h1.id = "h-chat"
    h1.style = "color: yellow;"
    
    sectionHead.append(h1)
    
    let contanerDiv = anyElement("div", ["refr-cont-div-txt"])
    
    let img2Div = anyElement("div", ["img2-chat"])
    // img2Div.style.backgroundImage = "url('../img/chat-2.png')"
    
    let bottomDiv = await designBlock("chat-modal", "bgd-chat")
    
    const chatLeft = await mainMenu()
    const chatRight = await mainMenu2()

    contanerDiv.append(
        chatLeft, 
        chatRight
        )
    chatMain.append(
        contanerDiv,
        bottomDiv,
        img2Div
    )

    contanerDiv.querySelector("#cht-form textarea").addEventListener("focus", async function (elem) {
        chatMain.style.backgroundImage = "url('../img/chat-2.png')"
    })

    contanerDiv.querySelector("#cht-form-2 textarea").addEventListener("focus", async function (elem) {
        chatMain.style.backgroundImage = "url('../img/chat-2.png')"
    })

    sectionHead.append(chatMain)

    bottomDiv.querySelector("#chat-modal").addEventListener('click', async function (e) {
        e.preventDefault()
        bottomDiv.querySelector("#bgd-chat").classList.add("open")
    })

    return sectionHead
}
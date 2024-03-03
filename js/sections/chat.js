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
    h1.style = "color: yellow;"
    
    sectionHead.append(h1)
    
    let contanerDiv = anyElement("div", ["refr-cont-div-txt"])


    const chatLeft = await mainMenu()
    const chatRight = await mainMenu2()

    let bottomDiv = await designBlock()

    chatMain.append(
        contanerDiv,
        chatLeft, 
        chatRight,
        bottomDiv
    )
    sectionHead.append(chatMain)

    return sectionHead
}
import { aIelements, aElements, anyElement, buttonElement } from "../components/elements.js"
import { formInputElement,  formElement, cleanForm } from "../components/form.js"
import { designBlock } from "../components/design-block.js"


export async function notificationSection() {
    const notif = document.createElement("section")
    notif.classList.add("section-notif")
    notif.id = "notif"
   

    const sectionHead = document.createElement("div")
    sectionHead.classList.add("section-head")
    const h1 = document.createElement("h1")
    h1.textContent = "УВЕДОМЛЕНИЯ"
    h1.id = "h-notif"
    h1.classList.add("titleH")
    h1.style = "color: #858383;"
    
    sectionHead.append(h1)
    
    let contanerDiv = anyElement("div", ["refr-cont-div-not"])

    let resNotDiv = anyElement("div", ["res-not", "res-close"])
    resNotDiv.textContent = "уведомление отправлено".toUpperCase()

    let imgResDiv = anyElement("div", ["img-res-notif"])
    // imgResDiv.style.backgroundImage = "url('../img/res_notif.png')"
    resNotDiv.append(imgResDiv)
    contanerDiv.append(resNotDiv)

    let btn = await buttonElement("создать событие".toUpperCase(), ["btn-not"], "bt-n")

    let formArea = cleanForm(
        ["form-notific"],
        ["input-form-not"],
        btn,
        "form-not",
        "input-not",
        "",
        "inpNot",
        "введите email",
        ""
        )


    let bottomDiv = await designBlock("not-modal", "bgd-not", "syst-design-not")    
    contanerDiv.append(formArea)

    notif.append(
        contanerDiv,
        bottomDiv
    )
    sectionHead.append(notif)

    bottomDiv.querySelector("#not-modal").addEventListener('click', async function (e) {
        e.preventDefault()
        bottomDiv.querySelector("#bgd-not").classList.add("open")

    })

    return sectionHead
}
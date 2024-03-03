import { aIelements, aElements, anyElement, buttonElement } from "../components/elements.js"
import { slDetailFeatures } from "../components/slider.js"
import { orderConfirm } from "../components/order-confirm.js"
import { modalWindow } from "../components/modal-window.js"
import { designBlock } from "../components/design-block.js"


let detailData = {
    "photo": [
            "../img/notif.jpg",
            "../img/intro.jpg",
            "../img/estate.jpg"
            ]
};

export async function cosmeticSection() {
    const cosmetic = document.createElement("section")
    cosmetic.classList.add("section-cosmetic")
    cosmetic.id = "cosmetic"

    const sectionHead = document.createElement("div")
    sectionHead.classList.add("section-head")
    const h1 = document.createElement("h1")
    h1.textContent = "COSMETIC"
    h1.classList.add("titleH")
    h1.id = "h-cosm"
    h1.style = "color: #c13bb9;"
    
    sectionHead.append(h1)
    
    let contanerDiv = anyElement("div", ["est-cont-div-txt"])

    let contanerTopDiv = anyElement("div", ["cont-div-top-txt"])

    let slider = await slDetailFeatures(detailData, "id-cosmetic")
    let aSlider = document.createElement("a")
    aSlider.href = "https://cosmetic.tesseractmaks.tech/"
    aSlider.target = "_blank";
    aSlider.append(slider)

    contanerTopDiv.append(aSlider)
    aSlider.addEventListener('click', async function (e) {
        e.preventDefault()
        window.open("https://cosmetic.tesseractmaks.tech/", '_blank');
        })
    

    let leftDiv = anyElement("span", ["left-cosmetic"], "text")

    let rightDiv = anyElement("span", ["right-cosmetic"], "text")
    
    let adminPan = document.createElement("div")
    
    adminPan.id = "dle-content"
    let panel = await orderConfirm()
    adminPan.append(panel)

    rightDiv.append(adminPan)

    contanerDiv.append(leftDiv, rightDiv)

    

    let bottomDiv = await designBlock("cosm-modal","bgd-cosm")

    cosmetic.append(
        contanerTopDiv,
        contanerDiv,
        bottomDiv
    )
    sectionHead.append(cosmetic)
    aModal.addEventListener('click', async function (e) {
        e.preventDefault()
        modalDesign.classList.add("open")
    })
    
    return sectionHead
}
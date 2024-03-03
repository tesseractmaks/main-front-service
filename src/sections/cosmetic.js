import { aIelements, aElements, anyElement, buttonElement } from "../components/elements.js"
import { slDetailFeatures } from "../components/slider.js"
import { orderConfirm } from "../components/order-confirm.js"
import { designBlock } from "../components/design-block.js"
import { cosmoText } from "./description.js"


let detailData = {
    "photo": [
            "../img/cosm/1.jpg",
            "../img/cosm/2.jpg",
            "../img/cosm/3.jpg"
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
    
    let contanerDiv = anyElement("div", ["cosm-cont-div-txt"])

    let contanerTopDiv = anyElement("div", ["est-div-top-txt"])

    let leftDiv = anyElement("span", ["left-cosmetic"])
    leftDiv.append(cosmoText)

    let slider = await slDetailFeatures(detailData, "id-cosmetic", "block-slider-cosm")
    let aSlider = document.createElement("a")
    aSlider.href = "https://cosmetic.tesseractmaks.tech/"
    aSlider.target = "_blank";
    aSlider.append(slider)

    contanerTopDiv.append(aSlider)
    aSlider.addEventListener('click', async function (e) {
        e.preventDefault()
        window.open("https://cosmetic.tesseractmaks.tech/", '_blank');
        })
    

    let rightDiv = anyElement("span", ["right-cosmetic"])
    
    let adminPan = document.createElement("div")
    
    adminPan.id = "dle-content"
    let panel = await orderConfirm()
    adminPan.append(panel)

    rightDiv.append(adminPan)

    contanerDiv.append(leftDiv, rightDiv)


    let bottomDiv = await designBlock("cosm-modal", "bgd-cosm")

    cosmetic.append(
        contanerTopDiv,
        contanerDiv,
        bottomDiv
    )
    sectionHead.append(cosmetic)

    bottomDiv.querySelector("#cosm-modal").addEventListener('click', async function (e) {
        e.preventDefault()
        bottomDiv.querySelector("#bgd-cosm").classList.add("open")
    })
    
    return sectionHead
}
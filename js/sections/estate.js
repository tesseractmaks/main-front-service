import { aIelements, aElements, anyElement, buttonElement } from "../components/elements.js"
import { slDetailFeatures } from "../components/slider.js"
import { designBlock } from "../components/design-block.js"


let detailData = {
    "photo": [
            "../img/notif.jpg",
            "../img/intro.jpg",
            "../img/estate.jpg"
            ]
};

export async function estateSection() {
    const estate = document.createElement("section")
    estate.classList.add("section-estate")
    estate.id = "estate"

    const sectionHead = document.createElement("div")
    sectionHead.classList.add("section-head")
    const h1 = document.createElement("h1")
    h1.classList.add("titleH")
    h1.id = "h-est"
    h1.textContent = "REAL-ESTATE"
    
    sectionHead.append(h1)

    let contanerDiv = anyElement("div", ["est-cont-div-txt"])

    let contanerTopDiv = anyElement("div", ["cont-div-top-txt"])

    let slider = await slDetailFeatures(detailData, "id-estate")
    let aSlider = document.createElement("a")
    aSlider.href = "https://estate.tesseractmaks.tech/"
    aSlider.target = "_blank";
    aSlider.append(slider)
    
    contanerTopDiv.append(aSlider)
    
    aSlider.addEventListener('click', async function (e) {
        e.preventDefault()
        window.open("https://estate.tesseractmaks.tech/", '_blank');
    })
    

    let leftDiv = anyElement("span", ["left-estate"], "text")

    let rightDiv = anyElement("span", ["right-estate"], "text")

    contanerDiv.append(leftDiv, rightDiv)


    let bottomDiv = await designBlock()

    estate.append(
        contanerTopDiv,
        contanerDiv,
        bottomDiv
    )
    sectionHead.append(estate)

    aModal.addEventListener('click', async function (e) {
        e.preventDefault()
        modalDesign.classList.add("open")
    })

    return sectionHead
}



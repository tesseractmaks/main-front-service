import { aIelements, aElements, anyElement, buttonElement } from "../components/elements.js"
import { slDetailFeatures } from "../components/slider.js"
import { designBlock } from "../components/design-block.js"
import { aboutText } from "./description.js"



export async function aboutSection() {
    const estate = document.createElement("section")
    estate.classList.add("section-about")
    estate.id = "about"

    const sectionHead = document.createElement("div")
    sectionHead.classList.add("section-head")
    const h1 = document.createElement("h1")
    h1.classList.add("titleH")
    h1.id = "h-about"
    h1.style = "color: #0062cc;"
    h1.textContent = "обо мне".toUpperCase()
    
    sectionHead.append(h1)

    let contanerDiv = anyElement("div", ["about-cont-div-txt"])

    // let contanerTopDiv = anyElement("div", ["cont-div-top-txt"])

    let leftDiv = anyElement("span", ["left-about"])
    

    let telega = aElements("https://t.me/vlaskinmac", ["left-about-link"], "Telegram")
    let github = aElements("https://github.com/tesseractmaks", ["left-about-link"], "GitHub")
    telega.target="_blank"
    github.target="_blank"
    leftDiv.append(aboutText, telega, github)
    contanerDiv.append(leftDiv)

    let bottomDiv =  anyElement("div", ["bottom-about"])

    estate.append(
        contanerDiv,
        bottomDiv
    )
    sectionHead.append(estate)

    return sectionHead
}



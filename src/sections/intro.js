import { aIelements, aElements, anyElement, buttonElement } from "../components/elements.js"
import { introText, techText1, techText2 } from "./description.js"

export async function introSection() {
    const intro = document.createElement("section")
    intro.classList.add("section-intro")
    intro.id = "intro"

    let contanerDiv = anyElement("div", ["intr-cont-div-txt"])

    let leftDiv = anyElement("span", ["left-intro"])
    leftDiv.id = "l-intro"
    

    let rightDiv = anyElement("span", ["right-intro"])
    rightDiv.append(techText1, techText2)

    leftDiv.append(introText, rightDiv)

    contanerDiv.append(leftDiv)

    let bottomDiv = anyElement("div", ["bottom-intro"])

    intro.append(
        contanerDiv,
        bottomDiv
    )

    return intro
}
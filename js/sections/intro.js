import { aIelements, aElements, anyElement, buttonElement } from "../components/elements.js"


export async function introSection() {
    const intro = document.createElement("section")
    intro.classList.add("section-intro")
    intro.id = "intro"

    let contanerDiv = anyElement("div", ["intr-cont-div-txt"])

    let leftDiv = anyElement("span", ["left-intro"], "text")

    let rightDiv = anyElement("span", ["right-intro"], "text")

    contanerDiv.append(leftDiv, rightDiv)

    let bottomDiv = anyElement("div", ["bottom-intro"], "text")

    intro.append(
        contanerDiv,
        bottomDiv
    )

    return intro
}
import { anyElement } from "../components/elements.js"


export async function modalWindow(nodeDiv, classModal = "modal", classBox = "modal__box") {
    const mainDiv = anyElement("div", [classModal])
    const extDiv = anyElement("div", [classBox])

    extDiv.append(nodeDiv)

    mainDiv.append(extDiv)
    return mainDiv
}

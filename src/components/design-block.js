import { anyElement } from "./elements.js"
import { modalWindow } from "./modal-window.js"


export async function designBlock(classElem, classIdModal, classDesign = "syst-design", classBottom = "bottom-estate"){

let bottomDiv = anyElement("div", [classBottom])

let modalDesignDiv = anyElement("div", [classDesign])
let aModal = document.createElement("a")
aModal.href = "#"
aModal.id = classElem

let h2 = anyElement("h2", ["text-design"], "system design".toUpperCase())
let imgSpan = anyElement("span", ["img-design"])

modalDesignDiv.append(h2, imgSpan)

let modalBackground = anyElement("div", [`${classIdModal}-img`]) 

let modalDesign = await modalWindow(modalBackground)
modalDesign.id = classIdModal

aModal.append(modalDesignDiv)

bottomDiv.append(aModal, modalDesign)
return bottomDiv
}
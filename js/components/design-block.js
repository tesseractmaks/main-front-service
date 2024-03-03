import { anyElement } from "./elements.js"
import { modalWindow } from "./modal-window.js"


export async function designBlock(classModal){

let bottomDiv = anyElement("div", ["bottom-estate"])

let modalDesignDiv = anyElement("div", ["syst-design"])
let aModal = document.createElement("a")
aModal.href = "#"
aModal.id = classModal

let h2 = anyElement("h2", ["text-design"], "system design".toUpperCase())
let imgSpan = anyElement("span", ["img-design"])

modalDesignDiv.append(h2, imgSpan)

let modalBackground = anyElement("div", ["bgd-est-img"]) 
let modalDesign = await modalWindow(modalBackground)
modalDesign.id = "bgd-est"

aModal.append(modalDesignDiv)

bottomDiv.append(aModal, modalDesign)
return bottomDiv
}
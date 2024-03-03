import { aIelements, aElements, anyIelements, ulAelement, anyElement, buttonElement } from "./components/elements.js"
import { introSection } from "./sections/intro.js"
import { estateSection } from "./sections/estate.js"
import { cosmeticSection } from "./sections/cosmetic.js"
import { refreshSection } from "./sections/refresh-jwt.js"
import { chatSection } from "./sections/chat.js"
import { notificationSection } from "./sections/notification.js"
import { slowSliderCosmetic, slowSliderEstate } from "./components/slider.js"
import { xz } from "./components/order-confirm.js"

const app = document.querySelector("#app")

const mainSection = document.createElement("div")
mainSection.classList.add("container")

const navbar = await navbarSection()

const intro = await introSection()

const estate = await estateSection()

const cosmetic = await cosmeticSection()

const refresh = await refreshSection()

const chat = await chatSection()

const notification = await notificationSection()


mainSection.append(
    navbar,
    intro,
    estate,
    cosmetic,
    refresh,
    chat,
    notification
)


app.innerHTML = ""

app.appendChild(
    mainSection
)

await xz()



async function navbarSection() {

    const navSection = document.createElement("section")

    navSection.classList.add("nav-bar")

    // navSection.classList.add("display-close")

    let collectionNav = [
        { "link": "#intro", "text": "ИНТРО" },
        { "link": "#estate", "text": "REAL-ESTATE" },
        { "link": "#cosmetic", "text": "COSMETIC" },
        { "link": "#jwt", "text": "REFRESH-JWT" },
        { "link": "#chat", "text": "ЧАТ" },
        { "link": "#notif", "text": "УВЕДОМЛЕНИЯ" },
        { "link": "#auth", "text": "AUT/AUTH-JWT" },
        { "link": "#about", "text": "АВТОРСКИЙ СОСТАВ" },
    ]

    let ulElem = ulAelement("nav-list", collectionNav)
    navSection.append(ulElem)
    return navSection
}


let seconds = 1000 * 10
setInterval(() => slowSliderCosmetic(), seconds);
setInterval(() => slowSliderEstate(), seconds);


let ids = ["#bgd-cosm", "#bgd-est", "#bgd-chat"]

ids.forEach(function(e){
    let modalOb = document.querySelector(e)
    modalOb.addEventListener("click", (e) => {
        if (!["bgd-est-img", "bgd-cosm-img", "bgd-chat-img"].includes(e.target.classList.value)){
            modalOb.classList.remove("open")
    }
    })
})


window.addEventListener("keydown", (e) => {
	if (e.key === "Escape") {
		let modalObj = document.querySelector(".modal")
		modalObj.classList.remove("open")
	}
})


let estH1 = document.querySelector("#h-est");
let cosmH1 = document.querySelector("#h-cosm");
let jwtH1 = document.querySelector("#h-jwt");

window.addEventListener("scroll", function(elem) {
if (
    document.body.scrollTop > 600 || 
    document.documentElement.scrollTop > 600
  ) {
    estH1.classList.add("open");
  } else {
    estH1.classList.remove("open");
  };

if (
    document.body.scrollTop > 1900 || 
    document.documentElement.scrollTop > 1900
  ) {
    cosmH1.classList.add("open");
  } else {
    cosmH1.classList.remove("open");
  };

if (
    document.body.scrollTop > 3600 || 
    document.documentElement.scrollTop > 3600
  ) {
    jwtH1.classList.add("open");
  } else {
    jwtH1.classList.remove("open");
  }
})


let btnNot = document.querySelector("#bt-n")

btnNot.addEventListener("click", (e) => {
  e.preventDefault()
	let sectionNotif = document.querySelector("#notif")
	let resNot = document.querySelector(".res-not")
	let formNot = document.querySelector("#form-not")
  formNot.classList.add("res-close")
  resNot.classList.remove("res-close")
  sectionNotif.style.backgroundImage = "url('./img/res_notif.jpg')"
  
  window.addEventListener("scroll", function(elem) {
      resNot.classList.add("res-close")
      formNot.classList.remove("res-close")
      sectionNotif.style.backgroundImage = "url('./img/notif.jpg')"
      document.querySelector("#input-not").value = ""
    })
})
    




// window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });

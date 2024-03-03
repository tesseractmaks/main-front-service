import { aIelements, aElements, anyIelements, ulAelement, anyElement, buttonElement } from "./components/elements.js"
import { introSection } from "./sections/intro.js"
import { estateSection } from "./sections/estate.js"
import { cosmeticSection } from "./sections/cosmetic.js"
import { refreshSection, runJwt, smtReg } from "./sections/refresh-jwt.js"
import { chatSection } from "./sections/chat.js"
import { notificationSection } from "./sections/notification.js"
import { aboutSection } from "./sections/about.js"
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

const about = await aboutSection()


mainSection.append(
    navbar,
    intro,
    estate,
    cosmetic,
    refresh,
    chat,
    notification,
    about
)


app.innerHTML = ""

app.appendChild(
    mainSection
)

await xz()

await smtReg()
await runJwt()


async function navbarSection() {

    const navSection = document.createElement("section")

    navSection.classList.add("nav-bar")

    // navSection.classList.add("display-close")

    let collectionNav = [
        { "link": "#intro", "text": "ИНТРО" },
        { "link": "#estate", "text": "REAL-ESTATE" },
        { "link": "#cosmetic", "text": "COSMETIC" },
        { "link": "#h-jwt", "text": "REFRESH-JWT" },
        { "link": "#chat", "text": "ЧАТ" },
        { "link": "#notif", "text": "УВЕДОМЛЕНИЯ" },
        // { "link": "#auth", "text": "AUT/AUTH" },
        { "link": "#about", "text": "обо мне".toUpperCase() },
    ]

    let ulElem = ulAelement("nav-list", collectionNav)
    navSection.append(ulElem)
    return navSection
}


let seconds = 1000 * 10
setInterval(() => slowSliderCosmetic(), seconds);
setInterval(() => slowSliderEstate(), seconds);


let ids = [
  "#bgd-cosm",
   "#bgd-estate",
    "#bgd-chat",
    "#bgd-not",
    "#bgd-jwt"
  ]

ids.forEach(function(e){
    let modalOb = document.querySelector(e)
    if(modalOb){
      modalOb.addEventListener("click", (e) => {
          if (!["bgd-estate-img", "bgd-cosm-img", "bgd-chat-img", "bgd-not-img", "bgd-jwt-img"].includes(e.target.classList.value)){
              modalOb.classList.remove("open")
      }
    })
  }
})


// let idsDesignModal = [
//   "#estate-modal",
//   "#cosm-modal",
//   "#chat-modal",
//   "#not-modal",
//   "#jwt-modal",
//   ]

//   idsDesignModal.forEach(function(e){
//     let designModal = document.querySelector(e)
//     designModal.addEventListener("click", (e) => {
//         if (!["bgd-est-img", "bgd-cosm-img"].includes(e.target.classList.value)){
//             modalOb.classList.remove("open")
//     }
//     })
// })



  window.addEventListener("click", (e) => {
      if (!["area-ch", "btn", "area-ch-x"].includes(e.target.classList.value)){
        document.querySelector("#chat").style.backgroundImage = "url('../img/chat-1.png')"
  }
  })

  window.addEventListener("scroll", (e) => {
      document.querySelector("#chat").style.backgroundImage = "url('../img/chat-1.png')"
})

let btns = document.querySelectorAll(".btn")
Array.from(btns).forEach(function(btn){
  btn.addEventListener("click", (e) => {
    document.querySelector("#chat").style.backgroundImage = "url('../img/chat-2.png')"
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
let chatH1 = document.querySelector("#h-chat");
let notifH1 = document.querySelector("#h-notif");
let aboutH1 = document.querySelector("#h-about");

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
    document.body.scrollTop > 2200 || 
    document.documentElement.scrollTop > 2200
  ) {
    cosmH1.classList.add("open");
  } else {
    cosmH1.classList.remove("open");
  };

if (
    document.body.scrollTop > 3800 || 
    document.documentElement.scrollTop > 3800
  ) {
    jwtH1.classList.add("open");
  } else {
    jwtH1.classList.remove("open");
  }

if (
  document.body.scrollTop > 5300 || 
  document.documentElement.scrollTop > 5300
) {
  chatH1.classList.add("open");
} else {
  chatH1.classList.remove("open");
}

if (
  document.body.scrollTop > 7100 || 
  document.documentElement.scrollTop > 7100
) {
  notifH1.classList.add("open");
} else {
  notifH1.classList.remove("open");
}

if (
  document.body.scrollTop > 8300 || 
  document.documentElement.scrollTop > 8300
) {
  aboutH1.classList.add("open");
} else {
  aboutH1.classList.remove("open");
}
})

let btnNot = document.querySelector("#bt-n")
    
  btnNot.addEventListener("click", async(e) => {
    e.preventDefault()
   
    let sectionNotif = document.querySelector("#notif")
    let resNot = document.querySelector(".res-not")
    let formNot = document.querySelector("#form-not")
    
    let mail = formNot.inpNot.value
    if (formNot.inpNot.value){
      mail = formNot.inpNot.value
      formNot.classList.add("res-close")
      resNot.classList.remove("res-close")
      sectionNotif.style.backgroundImage = "url('./img/res_notif.jpg')"
    }else {
      mail = "tesseractmaks@gmail.com"
    }

    await fetch(`https://notification.tesseractmaks.tech/?mail=${mail}`)

    window.addEventListener("scroll", function(elem) {
        resNot.classList.add("res-close")
        formNot.classList.remove("res-close")
        sectionNotif.style.backgroundImage = "url('./img/notif.jpg')"
        document.querySelector("#input-not").value = ""
      })
  })

  let introSectionBlock = document.querySelector("#intro")
  introSectionBlock.addEventListener("mousemove", function(e) {
    e.preventDefault()
    let introText = document.querySelector("#l-intro")
    introText.classList.add("descr-visible")
  })
  window.addEventListener("scroll", function(e) {
    e.preventDefault()
    let introText = document.querySelector("#l-intro")
    introText.classList.remove("descr-visible")
  })


// window.scrollTo({
//     top: 0,
//     behavior: 'smooth',
//   });

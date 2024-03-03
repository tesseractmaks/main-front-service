import { anyElement, buttonElement, aElements, imgElement } from "./elements.js"

//let ws = new WebSocket("ws://127.0.0.1:8000/api/v1/orders/ws/2")
 let ws = new WebSocket("wss://api-cosmetic.tesseractmaks.tech/api/v1/orders/ws/2")

export async function orderConfirm() {

    let testOrder = [
        {
            "title": "заказ принят",
            "confId": "conf-1",
        },
        {
            "title": "заказ формируется",
            "confId": "conf-2",
        },
        {
            "title": "заказ передан на доставку",
            "confId": "conf-3",
        },
        {
            "title": "курьер направляется к вам",
            "confId": "conf-4",
        },
    ]

    const mainDiv = anyElement("div", ["admin-body"], "", "tr")

    let ulElem = await ulAelementConfirm(testOrder)

    ws.onmessage = async function (evt) {
        let recived_msg = await evt.data
        console.log(recived_msg, "=---служба-приняла--=")
        if (recived_msg.slice(-1) == 5) {
            let li = done()
            ulElem.append(li)
        }
    }

    mainDiv.append(ulElem)
    return mainDiv
}


export async function xz() {
    let buttonBlock = await document.getElementsByClassName("div-descr-cnf")
    Array.from(buttonBlock).forEach(function (element, index) {

        let buttonElem = element.getElementsByTagName("button")
        // console.log(buttonElem[0])
        console.log(index, "индекс кнопки службы")

        if (index == 0) {
            buttonElem[0].removeAttribute('disabled')
            buttonElem[0].classList.remove("confirm-btn-disable")
        }
//        let ws = new WebSocket("ws://127.0.0.1:8000/api/v1/orders/ws/2")
         let ws = new WebSocket("wss://api-cosmetic.tesseractmaks.tech/api/v1/orders/ws/2")


        buttonElem[0].addEventListener("click", async function (e) {
            e.preventDefault()
            let idx = buttonElem[0].id.slice(-1)
            await wSocket(ws, idx)
            console.log(buttonElem[0].id, "нажал подтверждение")
            buttonElem[0].setAttribute('disabled', 'true')
            buttonElem[0].classList.add("confirm-btn-disable")
            try {
                let buttonElemF = Array.from(buttonBlock)[index + 1].getElementsByTagName("button")
                buttonElemF[0].removeAttribute('disabled')
                buttonElemF[0].classList.remove("confirm-btn-disable")
            }
            catch (err) { }
        })
    })


}



async function wSocket(ws, idx) {

    ws.send(idx)

    ws.onclose = function () {
        console.log("Close  -  Websockett!!!!!!!!11")
    }

}

function ulAelementConfirm(collection = []) {
    let ul = document.createElement("ul")

    collection.forEach(async function (element, index) {
        let li = document.createElement("li")
        li.classList.add("order-item")
        let aDiv = anyElement("div")
        let spanDiv = anyElement("div")
        let buttonTr = await buttonElement("выполнить", ["confirm-btn"], element["confId"])
        buttonTr.setAttribute('disabled', 'true')
        buttonTr.classList.add("confirm-btn-disable")

        let titleS = anyElement("span", ["text-descr-cnf"], element["title"])


        titleS.setAttribute("data-detail", "detail")
        spanDiv.setAttribute("data-detail", "detail")

        let img = await imgElement(element["img"])
        img.setAttribute("data-detail", "detail")
        spanDiv.classList.add("div-descr-cnf")
        spanDiv.append(titleS, buttonTr)

        aDiv.append(spanDiv)

        li.append(aDiv)
        ul.append(li)


    });
    return ul
}

function done() {
    let li = document.createElement("li")
    li.classList.add("order-item")
    let aDiv = anyElement("div")
    let titleS = anyElement("span", ["text-descr-cnf"], "заказ получен")
    let spanDiv = anyElement("div")

    spanDiv.classList.add("div-descr-cnf")
    spanDiv.classList.add("done-block")
    titleS.classList.add("done-text")
    spanDiv.append(titleS)

    aDiv.append(spanDiv)
    li.append(aDiv)
    return li
}






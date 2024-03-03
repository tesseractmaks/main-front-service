// let detailData = {
//     "photo": [
//             "../img/notif.jpg",
//             "../img/intro.jpg",
//             "../img/estate.jpg"
//             ]
// };

export async function slDetailFeatures(detailData, ids = "sl-slider") {

    let divslider = document.createElement("div")
    divslider.setAttribute("id", ids)

    divslider.classList.add("block-slider")
    let divAreaSlider = document.createElement("div")
    divAreaSlider.classList.add("block-area-slider")

    // Images
    let divImgArea = document.createElement("div")
    divImgArea.classList.add("img-area")

    detailData["photo"].forEach(function (elem) {
        let divImg = document.createElement("img")
        divImg.classList.add("img-item")
        divImg.setAttribute("src", `${elem}`)
        divImg.setAttribute("alt", "img")
        divImgArea.append(divImg)
    });
    divAreaSlider.append(divImgArea)
    divslider.append(divAreaSlider)
    return divslider
};


let counterSlow = 0;

export function slowSliderEstate() {
    let sliderEstate = document.querySelector("#id-estate")
	
	let images = sliderEstate.querySelectorAll(".img-item")

	for (let i = 0; i < images.length; i++) {
		images[i].classList.remove("active-image")
	};
	counterSlow++
	if (counterSlow >= images.length) {
		counterSlow = 0
	}
	images[counterSlow].classList.add("active-image")
};

export function slowSliderCosmetic() {

    let sliderCosmetic = document.querySelector("#id-cosmetic")
	
	let images = sliderCosmetic.querySelectorAll(".img-item")

	for (let i = 0; i < images.length; i++) {
		images[i].classList.remove("active-image")
	};
	counterSlow++
	if (counterSlow >= images.length) {
		counterSlow = 0
	}
	images[counterSlow].classList.add("active-image")
};

// let slider = await slDetailFeatures(detailData)

// const app = document.querySelector("#app")

// app.append(slider)

// let seconds = 1000 * 10
// setInterval(() =>slowSlider(), seconds);
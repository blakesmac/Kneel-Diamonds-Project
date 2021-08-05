import { KneelDiamonds } from "./KneelDiamonds.js"
// import { DiamondSizes } from "./DiamondSizes.js"
// import { Metals } from "./Metals.js"
// import {getMetals} from "./Metals"
const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = KneelDiamonds()
}
// 
document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

renderAllHTML()


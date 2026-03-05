// Define variables: 
// Create variables for the package's weight and its destinationZone (e.g., "Abeokuta", "Ibadan", or "Lagos"). Also, set a baseCost.

// Check the destination: Use an if statement to check the destinationZone. For example, if the zone is "Ibadan", add N5000 to the baseCost. If it is "Lagos", add N1000.Check the weight: Use a separate if statement to check if the weight is over a certain limit (e.g., 5 kg). If it is, add an overweight fee (e.g., N1500) to the cost.Calculate the total: The final cost will be the sum of the base cost and any additional fees for destination or weight.Print a clear message to the console, such as "The total shipping cost for your 7kg package to Zone Ibadan is N8000."
// Bonus Challenge:
// Add a new boolean variable called isExpressDelivery. If isExpressDelivery is true, multiply the final calculated cost by 1.5 to add a 50% surcharge for faster delivery.


// let weight;
// let destinationZone;

// isExpressDelivery = false;

// destinationZone = "Ibadan";
// weight = 9;

// if (destinationZone == "Ibadan") {
//     baseCost += 5000;
//     console.log("Payment for Ibadan is:", baseCost)
// }else if (destinationZone == "Lagos") {
//     baseCost += 1000;
//     console.log("Payment for Ibadan is:", baseCost)
// }

// if (weight >5) {
//     overweight = 1500;
//     console.log("Overweight Pay:", overweight)
// }

// const totalPay = baseCost + overweight;

// console.log("Total Payment is:", totalPay)

// if(isExpressDelivery) {
//     Express = totalPay/2;
//       console.log("Express delivery Pay:", Express)
//       console.log("Total final Pay + Express Delivery :", totalPay + Express)

// }else {
//     Express = 0;
// }



const button = document.getElementById("button")
let destinationZone_input = document.getElementById("destinationZone");
let weight_input = document.getElementById("weight");
let ExpressDelivery_input = document.getElementById("expressDelivery");
let details = document.getElementById("details")

button.addEventListener("click", () => {

    let baseCost = 490;
    let overweight = 0;
    let Express = 0;
    let destinationCost = 0;

    const destinationZone = destinationZone_input.value;
    const weight = weight_input.value;
    const isExpressDelivery = ExpressDelivery_input.checked;

    console.log("Base Cost:", baseCost)

    if (destinationZone == "Ibadan") {
        destinationCost = baseCost + 5000;
        console.log("Payment for Ibadan is:", destinationCost - baseCost);
        // details.innerHTML = `Payment for Ibadan is: ${baseCost}`;
    } else if (destinationZone == "Lagos") {
        destinationCost = baseCost + 1000;
        console.log("Payment for Lagos is:", destinationCost - baseCost)
        // details.innerHTML = `Payment for Lagos is: ${baseCost}`;
    } else if (destinationZone == "Abeokuta") {
        destinationCost = baseCost + 3000;
        console.log("Payment for Abeokuta is:", destinationCost - baseCost)
    }
    else {
        console.log("There is no fare information for your destination")
        // details.innerHTML = `There is no fare information for your destination`;
    }

    if (weight > 5) {
        // let oversize = true;
        overweight = 1500;
        console.log("Overweight Pay:", overweight)
        // details.innerHTML = `Overweight Pay: ${overweight}`
    }

    const totalPay = destinationCost + overweight;

    console.log("Total Payment is:", totalPay)

    if (isExpressDelivery) {
        Express = totalPay / 2;
        console.log("Express delivery Pay:", Express)
        console.log("Total final Pay + Express Delivery :", totalPay + Express)
        // details.innerHTML = `Express delivery Pay: ${Express} <br>
        // Total final Pay + Express Delivery : ${totalPay + Express}`
    } else {
        Express = 0;
    }
    // details.innerHTML = `Payment for ${destinationZone} is: ${destinationCost} (Including BasePay of ${baseCost}) <br>
    // ${oversize}? 'Overweight Pay: ${overweight} <br>'
    // Total Payment is: ${totalPay} <br>
    // ${isExpressDelivery}? 'Express delivery Pay: ${Express} <br>'
    // Total final Pay + Express Delivery : ${totalPay + Express}
    // `

    details.innerHTML =
        `BasePay: ${baseCost.toFixed(2)} <br>
    ${destinationZone} Pay: ${(destinationCost - baseCost).toFixed(2)} <br>
    ${weight > 5 ? `Overweight Pay: ${overweight.toFixed(2)} <br>` : ''}
    Total Payment is: ${totalPay.toFixed(2)} <br>
    ${isExpressDelivery ? `Express delivery Pay: ${Express.toFixed(2)} <br> 
    Total final Pay: ${isExpressDelivery ? (totalPay + Express).toLocaleString(2) : totalPay.toFixed(2)}` : ''}`
    // Total final Pay: ${isExpressDelivery ? totalPay + Express : totalPay} <br>`

})



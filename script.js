
const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");


window.addEventListener('load', (evt) => {
    updateTime("weekly");
    weeklyBtn.classList.add("active");
});

function updateTime(timeFrame) {
    //getting JSON
    fetch("data.json").then(response => {
        return response.json();
    }).then(data => {
        data.forEach((value) => {
            //store json data in variables
            const current = value.timeframes[timeFrame].current;
            const previous = value.timeframes[timeFrame].previous;
            const title = value.title;
            let textnode;

            const titleElement = document.querySelector("h2");
            const hrElement = document.querySelector(".hours");
            const prevElement = document.querySelector(".prev");

            titleElement.innerText = title;
            hrElement.innerText = current.toString() + "hrs";
            prevElement.innerText = previous.toString() + "hrs";
            
            const spanNode = document.createElement("span");
            if(timeFrame == "daily") {
                // textnode = document.createTextNode("yesterday - " + previous.toString() + "hrs");

                textnode = prevElement.innerText = ("yesterday - " + previous.toString() + "hrs");
                
            } else if (timeFrame == "weekly") {
                textnode = prevElement.innerText = ("Last Week - " + previous.toString() + "hrs");
            } else {
                textnode = prevElement.innerText = ("Last Month - " + previous.toString() + "hrs");
            }

            spanNode.appendChild(textnode);
            // hrsElement.appendChild(spanNode);
            prevElement.appendChild(spanNode);
        })
    }).catch((err) => console.log(err));
}

// adding active states to current active tab
dailyBtn.addEventListener("click", () => {
    dailyBtn.classList.add("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.remove("active");

    updateTime("daily");
});

weeklyBtn.addEventListener("click", () => {
    dailyBtn.classList.remove("active");
    weeklyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    updateTime("weekly");
});

monthlyBtn.addEventListener("click", () => {
    dailyBtn.classList.remove("active");
    weeklyBtn.classList.remove("active");
    monthlyBtn.classList.add("active");

    updateTime("monthly");
});
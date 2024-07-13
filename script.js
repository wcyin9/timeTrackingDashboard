
const dailyBtn = document.getElementById("daily");
const weeklyBtn = document.getElementById("weekly");
const monthlyBtn = document.getElementById("monthly");

const cards = document.querySelectorAll(".card");

window.addEventListener('load', (evt) => {
    updateTime("weekly");
    weeklyBtn.classList.add("active");
});

function updateTime(timeFrame) {
    //getting JSON
    fetch("data.json").then(response => {
        return response.json();
    }).then(data => {
        cards.forEach((card, cardIndex) => {
            //get object inside the data array by the card index
            const value = data[cardIndex];

            //store json data in variables
            const timeframes = value.timeframes[timeFrame];
            const current = timeframes.current;
            const previous = timeframes.previous;
            const title = value.title;

            //get the children of the card
            const titleElement = card.querySelector("h2");
            const hrElement = card.querySelector(".hours");
            const prevElement = card.querySelector(".prev");

            //populate the card
            titleElement.innerText = title;
            hrElement.innerText = `${current}hrs`;
            const prevhrs = `- ${previous}hrs`;
            if(timeFrame == "daily") {
                prevElement.innerText = `Yesterday ${prevhrs}`;
            } else if (timeFrame == "weekly") {
                prevElement.innerText = `Last Week ${prevhrs}`;
            } else {
                prevElement.innerText = `Last Month ${prevhrs}`;
            }
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
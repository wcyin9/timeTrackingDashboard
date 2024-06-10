const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');

const previousHr = document.querySelector('.description');
const currentHr = document.querySelector('h2');

//activating active state when on category (button)
dailyBtn.addEventListener('click', () => {
    dailyBtn.classList.add('active');
    weeklyBtn.classList.remove('active');
    monthlyBtn.classList.remove('active');
});

weeklyBtn.addEventListener('click', () => {
    dailyBtn.classList.remove('active');
    weeklyBtn.classList.add('active');
    monthlyBtn.classList.remove('active');
});

monthlyBtn.addEventListener('click', () => {
    dailyBtn.classList.remove('active');
    weeklyBtn.classList.remove('active');
    monthlyBtn.classList.add('active');
});


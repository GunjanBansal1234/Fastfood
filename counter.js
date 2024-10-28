const counter = document.getElementById("counter");
let count = 0;
const target = 100; // Target number for counter
const duration = 50000; // Animation duration in milliseconds for counter

const counter1 = document.getElementById("counter1");
let count1 = 0;
const target1 = 100; // Target number for counter1
const duration1 = 50000; // Animation duration in milliseconds for counter1



const counter2 = document.getElementById("counter2");
let count2 = 0;
const target2 = 100; // Target number for counter1
const duration2 = 50000; // Animation duration in milliseconds for counter1


// Increment logic for counter
const updateCounter = () => {
    const increment = target / (duration / 16); // 16ms per frame (approximation for 60fps)
    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target; // Ensure it doesn't go above target
            clearInterval(interval);
        }
        counter.textContent = Math.floor(count);
    }, 16); // Update every 16ms
};

// Increment logic for counter1
const updateCounter1 = () => {
    const increment = target1 / (duration1 / 16); // 16ms per frame (approximation for 60fps)
    const interval = setInterval(() => {
        count1 += increment;
        if (count1 >= target1) {
            count1 = target1; // Ensure it doesn't go above target
            clearInterval(interval);
        }
        counter1.textContent = Math.floor(count1);
    }, 16); // Update every 16ms
};


// Increment logic for counter1
const updateCounter2 = () => {
    const increment = target2 / (duration2 / 16); // 16ms per frame (approximation for 60fps)
    const interval = setInterval(() => {
        count2 += increment;
        if (count2 >= target2) {
            count2 = target2; // Ensure it doesn't go above target
            clearInterval(interval);
        }
        counter2.textContent = Math.floor(count2);
    }, 16); // Update every 16ms
};


// Start the animations when the page loads
window.onload = () => {
    updateCounter();
    updateCounter1();
    updateCounter2();
};
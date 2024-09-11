//Quotes data
const quotes ={
    science:[
        "The good thing about science is that it's true whether or not you believe in it. – Neil deGrasse Tyson",
        "The important thing is not to stop questioning. Curiosity has its own reason for existing. – Albert Einstein",
        "Science is a way of thinking much more than it is a body of knowledge. – Carl Sagan",
        "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world. – Louis Pasteur",
        "Somewhere, something incredible is waiting to be known.” – Carl Sagan",

        
    ],
    management:[
        "The art of leadership is saying no, not yes. It is very easy to say yes – Tony Blair.",
        "Management is doing things right; leadership is doing the right things – Peter Drucker.",
        "People want to know they matter and they want to be treated as people. That’s the new talent contract – Pamela Stroko.",
        "Time management is an oxymoron. Time is beyond our control, and the clock keeps ticking regardless of how we lead our lives. Priority management is the answer to maximizing the time we have – John C. Maxwell."
    ],
    sports:[
        "Champions keep playing until they get it right  – Billie Jean King.",
        "The only way to prove that you’re a good sport is to lose – Ernie Banks." ,
        "It's not whether you get knocked down; it's whether you get up – Vince Lombardi.",
        "The more difficult the victory, the greater the happiness in winning – Pelé.",
        "Hard work beats talent when talent doesn’t work hard – Tim Notke." 
    ]
};
let currentCategory = 'science';
let currentQuoteIndex = 0;

// DOM Elements
const quoteText = document.getElementById('quoteText');
const categorySelect = document.getElementById('category');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');
const increaseFont = document.getElementById('increaseFont'); 
const decreaseFont = document.getElementById('decreaseFont');
const toggleSwitch = document.getElementById('toggleSwitch');

// Display initial quote
function displayQuote() {
    quoteText.textContent = quotes[currentCategory][currentQuoteIndex];
}
displayQuote();

// Handle category change
categorySelect.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    currentQuoteIndex = 0;
    displayQuote();
});

// Previous quote
prevBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex === 0) ? quotes[currentCategory].length - 1 : currentQuoteIndex - 1;
    displayQuote();
});

// Next quote
nextBtn.addEventListener('click', () => {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
    displayQuote();
});

// Random quote
randomBtn.addEventListener('click', () => {
    currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    displayQuote();
});

// Increase font size
increaseFont.addEventListener('click', () => {
    const currentSize = window.getComputedStyle(quoteText).fontSize;
    quoteText.style.fontSize = (parseFloat(currentSize) + 2) + 'px';
});

// Decrease font size
decreaseFont.addEventListener('click', () => {
    const currentSize = window.getComputedStyle(quoteText).fontSize;
    quoteText.style.fontSize = (parseFloat(currentSize) - 2) + 'px';
});

// Dark mode toggle
toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});  
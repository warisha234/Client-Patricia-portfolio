// toogle

function toggleMenu(){
  const navLinks = document.querySelector(".nav-links");
  const hamburger = document.querySelector(".hamburger");

  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active"); // add cross animation
}

// Dynamic Text

const words = [
  "Patricia A.",
  "Certified Spanish Teacher (ELE)",
  "DELE & SIELE Exam Specialist",
  "Personalized Spanish Lessons",
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

const textElement = document.querySelector(".dynamic-text");

function typeEffect(){

  currentWord = words[wordIndex];

  if(isDeleting){
    letterIndex--;
  } else {
    letterIndex++;
  }

  textElement.textContent = currentWord.substring(0, letterIndex);

  if(!isDeleting && letterIndex === currentWord.length){
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if(isDeleting && letterIndex === 0){
    isDeleting = false;
    wordIndex++;

    if(wordIndex === words.length){
      wordIndex = 0;
    }
  }

  setTimeout(typeEffect, isDeleting ? 60 : 100);
}

typeEffect();

// Custom Cursor Glow Effect

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;

/* SMOOTH EASING MOVEMENT */
document.addEventListener("mousemove", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  dot.style.left = mouseX + "px";
  dot.style.top = mouseY + "px";
});

function animate(){
  posX += (mouseX - posX) * 0.1;
  posY += (mouseY - posY) * 0.1;

  cursor.style.left = posX + "px";
  cursor.style.top = posY + "px";

  requestAnimationFrame(animate);
}

animate();


/* MAGNETIC BUTTON EFFECT */
document.querySelectorAll("button, a, li").forEach(el => {

  el.addEventListener("mouseenter", () => {
    cursor.style.width = "140px";
    cursor.style.height = "140px";
    el.style.transform = "scale(1.1)";
  });

  el.addEventListener("mouseleave", () => {
    cursor.style.width = "80px";
    cursor.style.height = "80px";
    el.style.transform = "scale(1)";
  });

});


/* HOVER DISTORTION (Advanced Feel) */
document.querySelectorAll("button").forEach(btn => {

  btn.addEventListener("mousemove", e => {

    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) scale(1.1)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0) scale(1)";
  });

});


// chat bot
function toggleChat() {
  const chat = document.getElementById("chatbot");
  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (!message) return;

  const chatBody = document.getElementById("chatBody");

  // User Message
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.textContent = message;
  chatBody.appendChild(userMsg);

  input.value = "";

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "bot-msg";

    botMsg.textContent = getBotReply(message);
    chatBody.appendChild(botMsg);

    chatBody.scrollTop = chatBody.scrollHeight;
  }, 500);
}

function getBotReply(message) {
  message = message.toLowerCase();

  if (message.includes("hire") || message.includes("work") || message.includes("class")) {
    return "Great! You can contact Patricia via Italki or Email. Email: patricia.teacher@example.com";
  }

  if (message.includes("price") || message.includes("cost")) {
    return "Pricing depends on class type and duration. Please share your requirements!";
  }

  if (message.includes("skills") || message.includes("specialty") || message.includes("teaching")) {
    return "Patricia specializes in Spanish as a Foreign Language (ELE), DELE & SIELE exam prep, Conversational Spanish, and Spanish for kids and adults.";
  }

  return "Thanks for your message! Patricia will respond soon.";
}

// about section animation
const scrollElements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("active");
      observer.unobserve(entry.target); // Animate once
    }
  });
}, { threshold: 0.2 }); // 20% element visible

scrollElements.forEach(el => observer.observe(el));


// skills

document.addEventListener("DOMContentLoaded", () => {
  const skillFills = document.querySelectorAll(".skill-fill");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        const fill = entry.target;
        const width = fill.getAttribute("data-fill");
        fill.style.width = width;
      }
    });
  }, { threshold: 0.5 });

  skillFills.forEach(fill => observer.observe(fill));
});




// experience section animation
// Select all counters
const counters = document.querySelectorAll('.counter');

// Function to animate counter
function animateCounter(counter){
  const target = +counter.getAttribute('data-target');
  let count = 0;
  const speed = 50; 
  const increment = target / speed;

  const updateCount = () => {
    count += increment;
    if(count < target){
      counter.innerText = Math.ceil(count);
      requestAnimationFrame(updateCount);
    }else{
      counter.innerText = target;
    }
  }
  updateCount();
}

// Intersection Observer setup
const observer1 = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      // Animate each counter once
      counters.forEach(counter=>{
        if(!counter.classList.contains('animated')){
          animateCounter(counter);
          counter.classList.add('animated');
        }
      });
    }
  });
}, {threshold: 0.5}); // Trigger when 50% of section is visible

// Observe the stats section
const statsSection = document.querySelector('.experience-stats');
observer1.observe(statsSection);
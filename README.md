# Scroll-Driven Hero Section Animation

This project is a visually striking, scroll-driven hero section animation built as an assignment. It features a premium, sleek automotive UI where the animation is strictly tied to the user's scroll progress, creating a highly interactive and fluid web experience.

## 🔗 Project Links
- **Live Demo:** [Insert your Vercel/Netlify Live Link Here]
- GitHub Repository:https://github.com/rajdeep372/scroll-driven-hero-animation.git
## 🛠️ Tech Stack Used
- **Frontend Framework:** React.js (Vite)
- **Styling:** Tailwind CSS
- **Animation Library:** GSAP (GreenSock Animation Platform)
- **Scroll Interaction:** GSAP ScrollTrigger Plugin

## ✨ Key Features
- **Smooth Initial Load:** Staggered fade-in animations for the typography and statistics on component mount.
- **Scroll-Linked Motion (`scrub: 1`):** The car translates smoothly across the screen strictly based on scroll position—no time-based auto-playing.
- **Pinned Section (`pin: true`):** The hero section remains fixed in the viewport while scrolling through the container to create a cinematic parallax effect.
- **Performance Optimized:** Uses only CSS transform properties (`translateX`, `opacity`) to ensure buttery-smooth 60fps animations without layout reflows.

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone [Insert your GitHub Repo Link Here]
Navigate to the project directory:

Bash
cd scroll-driven-hero-animation
Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev

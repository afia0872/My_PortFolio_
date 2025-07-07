import FurnitureProjectImage from '../assets/FurnitureWeb.png'; // Path to your furniture image
import FlowerShopImage from '../assets/Flower.png';           // Path to your flower shop image
import HotelProjectImage from '../assets/HotelWeb.png';         // Path to your hotel project image
import AiAssistantImage from '../assets/AI Assistant.png';   // Path to your AI Assistant image
import ProtectMeApp from  '../assets/ProtectMeApp.jpg';

export const projects = [
    {
    id: 1, // Assign a unique ID
    title: 'AI Assistant',
    description: 'A smart AI assistant designed to help with various tasks, providing intelligent responses and automating routine operations.', // <<< IMPORTANT: Add a relevant description for your AI Assistant
    image: AiAssistantImage, // Assign the imported image variable
    technologies: ['Python', 'TensorFlow', 'NLP', 'React'], // <<< IMPORTANT: Adjust technologies based on your actual AI Assistant project
    github: 'https://github.com/afia0872/ProtectMeA', // <<< IMPORTANT: REPLACE WITH YOUR ACTUAL GITHUB LINK
    demo: 'https://afiavirtualassistant.netlify.app', // <<< IMPORTANT: REPLACE WITH YOUR ACTUAL LIVE DEMO LINK (if applicable)
    featured: false
  },
   {
  id: 2,
  title: 'ProtectMe - Safety App',
  description: 'An Android safety application built in Java that helps users quickly share their location, contact emergency services, and access a Google Maps-enabled interface.',
  image: ProtectMeApp, // Replace this with your actual image import (e.g., import SafetyAppImage from '../assets/safetyapp.png')
  technologies: ['Java', 'Android Studio', 'Google Maps SDK', 'Firebase'],
  github: 'https://github.com/afia0872/protectme', // Replace with your actual GitHub repo link
  demo: 'https://your-furniture-demo.netlify.app/', // Replace if you host it elsewhere
  featured: true
}
,
  {
    id: 3, // Unique ID for the project
    title: 'Modern Furniture E-commerce',
    description: 'A responsive and intuitive e-commerce platform for Browse and purchasing modern furniture, featuring detailed product views and category filtering.',
    image: FurnitureProjectImage, // Assign the imported image variable
    technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router'], // <<< IMPORTANT: Adjust these technologies
    github: 'https://github.com/afia0872/furniture', // <<< IMPORTANT: REPLACE WITH YOUR ACTUAL GITHUB LINK
    demo: 'https://your-furniture-demo.netlify.app/',   // <<< IMPORTANT: REPLACE WITH YOUR ACTUAL LIVE DEMO LINK
    featured: true // Set to true to highlight this project
  },
  {
    id: 4,
    title: 'Beautiful Flower Shop',
    description: 'An elegant online store for Browse and ordering a variety of fresh flowers and arrangements, designed for a delightful user experience.',
    image: FlowerShopImage, // Assign the imported image variable
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'], // <<< IMPORTANT: Adjust these technologies
    github: 'https://github.com/afia0872/flower-shop', // <<< IMPORTANT: REPLACE WITH YOUR ACTUAL GITHUB LINK
    demo: 'https://your-flower-shop-demo.netlify.app/', // <<< IMPORTANT: REPLACE WITH YOUR ACTUAL LIVE DEMO LINK
    featured: false
  },
  {
    id: 5,
    title: 'Hotel Booking Application',
    description: 'A web application enabling users to search, view details, and book hotel rooms securely, with admin functionalities for property management.',
    image: HotelProjectImage, // Assign the imported image variable
    technologies: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Clerk'], // <<< IMPORTANT: Adjust these technologies
    github: 'https://github.com/afia0872/Hotel-Booking', // <<< IMPORTANT: REPLACE WITH YOUR ACTUAL GITHUB LINK
    demo: 'https://your-hotel-booking-demo.netlify.app/', // <<< IMPORTANT: REPLACE WITH YOUR ACTUAL LIVE DEMO LINK
    featured: false
  },
  
  // Add more project objects here following the same structure
];
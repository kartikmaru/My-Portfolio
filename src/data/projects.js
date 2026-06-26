/**
 * ============================================================
 *  PROJECTS DATA — Yahan se edit karo
 * ============================================================
 *  image  — "/filename.png" (public folder mein rakho)
 *           null rakho agar image nahi hai — emoji dikhega
 * ============================================================
 */

const projects = [
  {
    title: "BuyNest — E-Commerce",
    desc: "A complete MERN stack e-commerce platform with product management, cart, wishlist, and secure checkout. Redux Toolkit for state management.",
    image: "/buynest.png",
    emoji: "🛍️",
    tags: ["React", "Redux Toolkit", "Node.js", "MongoDB", "Express", "JWT"],
    github: "https://github.com/",
    live: "",
    badge: "Full Stack",
    badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    gradient: "from-purple-600/40 via-violet-600/20 to-blue-600/40",
    glow: "group-hover:shadow-purple-500/20",
  },
  {
    title: "Blinkit Clone",
    desc: "A full-stack grocery delivery app inspired by Blinkit. Features product listing, cart management, user authentication with JWT, and order tracking.",
    image: "/blinkit.png",
    emoji: "🛒",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
    github: "https://github.com/",
    live: "https://blinkit-ashy-five.vercel.app/",
    badge: "Full Stack",
    badgeColor: "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
    gradient: "from-yellow-600/40 via-green-600/20 to-emerald-600/40",
    glow: "group-hover:shadow-yellow-500/20",
  },
  {
    title: "SwooTech — Tech Store",
    desc: "A modern tech products store with advanced filtering, product comparison, and a seamless shopping experience built with the MERN stack.",
    image: "/swootech.png",
    emoji: "💻",
    tags: ["React", "Node.js", "MongoDB", "Redux", "Express", "Tailwind CSS"],
    github: "https://github.com/kartikmaru/swootechmart-frontend.git",
    live: "https://swootechmart-frontend.vercel.app/",
    badge: "Full Stack",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    gradient: "from-blue-600/40 via-cyan-600/20 to-teal-600/40",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    title: "Salon Booking App",
    desc: "A salon appointment booking platform with service selection, time slot management, and user authentication. Clean and modern UI.",
    image: "/salon.png",
    emoji: "💇",
    tags: ["React", "Node.js", "MongoDB", "Express", "JWT", "Tailwind CSS"],
    github: "https://github.com/",
    live: "https://beauty-salon-website-nine.vercel.app/",
    badge: "Full Stack",
    badgeColor: "bg-pink-500/20 text-pink-300 border-pink-500/30",
    gradient: "from-pink-600/40 via-rose-600/20 to-purple-600/40",
    glow: "group-hover:shadow-pink-500/20",
  },
  {
    title: "Portfolio Website",
    desc: "This portfolio — built with Next.js, Tailwind CSS, and MongoDB. Contact form with REST API backend saves messages to the database.",
    image: null,
    emoji: "💼",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "REST API", "Nodemailer"],
    github: "https://github.com/",
    live: "#",
    badge: "Full Stack",
    badgeColor: "bg-violet-500/20 text-violet-300 border-violet-500/30",
    gradient: "from-violet-600/40 via-purple-600/20 to-indigo-600/40",
    glow: "group-hover:shadow-violet-500/20",
  },
  {
    title: "Movie Discovery App",
    desc: "A responsive movie browsing app with search, filters, and detailed movie info. Integrated with a movie API for real-time data.",
    image: "/movie.png",
    emoji: "🎬",
    tags: ["React", "REST API", "Tailwind CSS", "React Router"],
    github: "https://github.com/",
    live: "https://api-fetching-psi.vercel.app/",
    badge: "Frontend",
    badgeColor: "bg-red-500/20 text-red-300 border-red-500/30",
    gradient: "from-red-600/40 via-rose-600/20 to-pink-600/40",
    glow: "group-hover:shadow-red-500/20",
  },
];

export default projects;

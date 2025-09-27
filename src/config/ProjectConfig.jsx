const projectDetails = [
  {
    title: "Expense Diary",
    img: "./project1.png",
    description:
      "Developed a real-time Expense Tracker using MERN and Tailwind with secure JWT/Google authentication, CRUD operations, Nodemailer integration, and interactive bar chart visualizations for clear financial insights.",
    features: [
      "Secure authentication (email/password and Google Login with Passport.js)",
      "Full CRUD operations for transaction management",
      "Interactive bar chart visualizations using chart.js",
      "Email notifications on SignUp using Nodemailer",
      "Clean and responsive UI with Tailwind CSS",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "TailwindCSS",
      "JsonWebToken",
      "Bcrypt",
      "Passport.js",
      "passport-google-oauth20",
      "Redis-caching",
      "Nodemailer",
      "pdfkit",
    ],
    demoLink: "https://expensetracker-client-bixd.onrender.com",
    githubRepo: "https://github.com/PurviMurkute/ExpenseTracker",
  },
  {
    title: "DocVault",
    img: "./project4.png",
    description:
      "DocVault is a cloud-based document management system where users can securely upload, store, and manage their important files including documents, images, and PDFs. Access your files anytime, anywhere from any device.",
    features: [
      "Secure authentication (email/password and Google Login with Passport.js)",
      "Cloud-based document storage with ImageKit integration",
      "Full CRUD operations for user documents with Redis caching",
      "Starred documents for quick access and easy management",
      "Fully responsive and modern UI built with Tailwind CSS",
    ],

    techStack: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "imagekit",
      "TailwindCSS",
      "JsonWebToken",
      "Bcrypt",
      "Passport.js",
      "passport-google-oauth20",
      "Redis-caching"
    ],
    demoLink: "https://docvault-dev.netlify.app",
    githubRepo: "https://github.com/PurviMurkute/DocVault",
  },
  {
    title: "Askly",
    img: "./project2.png",
    description:
      "Built an AI chat app where users can sign in with Google and have real-time conversations with an intelligent assistant. Designed to provide a smooth and user-friendly experience similar to Google Gemini.",
    features: [
      "AI-powered chat using Gemini API",
      "Google OAuth authentication",
      "User-specific chat history with MongoDB",
      "Responsive UI with Tailwind CSS",
      "Full-stack MERN architecture",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "Gemini API",
      "Google OAuth",
      "TailwindCSS",
    ],
    demoLink: "https://gemini-clone-m12g.onrender.com",
    githubRepo: "https://github.com/PurviMurkute/Gemini-Clone",
  },
  {
    title: "QuickCart",
    img: "/project3.png",
    description:
      "Built a responsive e-commerce website using the MERN stack as a learning project. It allows users to browse products, add them to cart, and log in to place orders.",
    features: [
      "User Authentication",
      "Product Catalog & Cart",
      "Responsive Design",
      "Order Workflow",
      "Interactive UI using React.js and BootStrap",
    ],
    techStack: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "BootStrap",
      "Bcrypt",
    ],
    demoLink: "https://quickcart-client.onrender.com",
    githubRepo: "https://github.com/PurviMurkute/quickcart",
  },
];

export { projectDetails };

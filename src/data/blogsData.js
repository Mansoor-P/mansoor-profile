const blogs = [
  {
    id: 1,
    slug: "intro-to-react",
    title: "Introduction to React",
    summary: "Learn the basics of React and how to get started.",
    date: "Feb 8, 2025",
    author: "Mansoor Pathikonda",
    content: "React is a popular JavaScript library for building user interfaces, especially single-page applications (SPAs). It allows developers to create reusable components, manage state efficiently using React hooks (like useState and useEffect), and handle navigation with React Router. React follows a virtual DOM approach, making UI updates fast and efficient. It supports component-based architecture, enabling better code organization and reusability. React can be used with state management libraries like Redux and integrates well with backend APIs for dynamic data handling. Its ecosystem includes tools like Vite, Next.js, and React Native for web and mobile development. 🚀",
  },
  {
    id: 2,
    slug: "microservices-architecture",
    title: "Understanding Microservices Architecture",
    summary: "A deep dive into microservices and their benefits.",
    date: "Feb 9, 2025",
    author: "Mansoor Pathikonda",
    content:
      "When our application grows, we have more features, and over time we have more users and more load, and as a result, our application stores a huge amount of data for these numbers of users, and we need more processing power for processing the queries to this database server. With growing our database, we can't keep all data on one database server because, after some time, it will be a bottleneck of our system due to the huge amount of queries and heavy load on it beside our application server, and at the end, it will slow down our application or cause it to not respond. Also, it is possible our database server is not available because of some networking problem or because our server is down. So it is not trustworthy to have just one database server for an application with a high load request. For solving this problem, we can scale our database vertically or horizontally or both.",
  },
  {
    id: 3,
    slug: "intro-to-react",
    title: "Introduction to React",
    summary: "Learn the basics of React and how to get started.",
    date: "Feb 8, 2025",
    author: "Mansoor Pathikonda",
    content: "React is a JavaScript library for building UI components...",
  },
  {
    id: 4,
    slug: "microservices-architecture",
    title: "Understanding Microservices Architecture",
    summary: "A deep dive into microservices and their benefits.",
    date: "Feb 9, 2025",
    author: "Mansoor Pathikonda",
    content:
      "Microservices architecture is an approach to building software...",
  },
];

export default blogs; // ✅ Use default export

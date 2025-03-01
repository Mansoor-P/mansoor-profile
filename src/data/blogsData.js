const blogs = [
  {
    id: 1,
    slug: "intro-to-react",
    title: "Introduction to React",
    summary: "Learn the basics of React and how to get started.",
    date: "Feb 8, 2025",
    author: "Mansoor Pathikonda",
    content: [
      {
        type: "text",
        value:
          "React is a popular JavaScript library for building user interfaces, especially single-page applications (SPAs). It allows developers to create reusable components and manage state efficiently using React hooks like useState and useEffect.",
      },
      {
        type: "image",
        url: "https://reactjs.org/logo-og.png",
        alt: "React Logo",
      },
      {
        type: "text",
        value:
          "React follows a component-based architecture, allowing developers to build UI elements that are reusable across different parts of an application. Below is a simple example of a React component:",
      },
      {
        type: "code",
        language: "jsx",
        value:
          "import React from 'react';\n\nfunction HelloWorld() {\n  return <h1>Hello, React!</h1>;\n}\n\nexport default HelloWorld;",
      },
      {
        type: "text",
        value:
          "React integrates well with various tools like Vite for fast development and Next.js for server-side rendering.",
      },
      {
        type: "image",
        url: "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*VnTS3uDeOPkXmu_9HHg6RQ.jpeg",
        alt: "React Component Structure",
      },
      {
        type: "text",
        value:
          "React Hooks simplify state and side-effect management in function components. Hooks like useState, useEffect, useContext, and useReducer enhance functionality.",
      },
      {
        type: "code",
        language: "jsx",
        value:
          "import React, { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>Increase</button>\n    </div>\n  );\n}\n\nexport default Counter;",
      },
      {
        type: "text",
        value:
          "React also provides useMemo and useCallback to optimize performance by preventing unnecessary re-renders.",
      },
      {
        type: "code",
        language: "jsx",
        value:
          "import React, { useState, useMemo } from 'react';\n\nfunction ExpensiveCalculation({ num }) {\n  const result = useMemo(() => {\n    console.log('Calculating...');\n    return num * 2;\n  }, [num]);\n\n  return <p>Result: {result}</p>;\n}\n\nexport default ExpensiveCalculation;",
      },
      {
        type: "text",
        value:
          "React Context API allows you to manage global state without prop drilling, making it a simpler alternative to Redux for small applications.",
      },
      {
        type: "code",
        language: "jsx",
        value:
          "import React, { createContext, useContext, useState } from 'react';\n\nconst ThemeContext = createContext();\n\nfunction ThemeProvider({ children }) {\n  const [theme, setTheme] = useState('light');\n\n  return (\n    <ThemeContext.Provider value={{ theme, setTheme }}>\n      {children}\n    </ThemeContext.Provider>\n  );\n}\n\nfunction ThemedComponent() {\n  const { theme, setTheme } = useContext(ThemeContext);\n\n  return (\n    <div>\n      <p>Current Theme: {theme}</p>\n      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>Toggle Theme</button>\n    </div>\n  );\n}\n\nexport { ThemeProvider, ThemedComponent };",
      },
      {
        type: "text",
        value:
          "React offers different rendering techniques like client-side rendering (CSR), server-side rendering (SSR), and static site generation (SSG) using frameworks like Next.js.",
      },
      {
        type: "image",
        url: "https://www.tothenew.com/blog/wp-ttn-blog/uploads/2022/09/server-side-rendering.png",
        alt: "Next.js Server-Side Rendering",
      },
      {
        type: "text",
        value:
          "React also supports lazy loading and code splitting using React.lazy and Suspense to improve performance.",
      },
      {
        type: "code",
        language: "jsx",
        value:
          "import React, { lazy, Suspense } from 'react';\n\nconst LazyComponent = lazy(() => import('./LazyComponent'));\n\nfunction App() {\n  return (\n    <Suspense fallback={<p>Loading...</p>}>\n      <LazyComponent />\n    </Suspense>\n  );\n}\n\nexport default App;",
      },
      {
        type: "text",
        value:
          "To test React components, libraries like Jest and React Testing Library are widely used.",
      },
      {
        type: "code",
        language: "jsx",
        value:
          "import { render, screen } from '@testing-library/react';\nimport '@testing-library/jest-dom';\nimport HelloWorld from './HelloWorld';\n\ntest('renders Hello, React!', () => {\n  render(<HelloWorld />);\n  expect(screen.getByText('Hello, React!')).toBeInTheDocument();\n});",
      },
      {
        type: "text",
        value:
          "React has strong community support with frequent updates, making it one of the most in-demand frontend technologies.",
      },
      {
        type: "image",
        url: "https://media.licdn.com/dms/image/v2/D5612AQFSPUPv4Gcv_A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1690548047583?e=2147483647&v=beta&t=MAz__3CxuOh0fR4rNAICGg7ovfl44gPspAEIM-XxE_g",
        alt: "React Ecosystem",
      },
      {
        type: "text",
        value:
          "To deploy a React app, you can use services like Vercel, Netlify, or GitHub Pages for easy hosting.",
      },
      {
        type: "code",
        language: "bash",
        value: "npm run build\nnpm install -g vercel\nvercel",
      },
      {
        type: "link",
        text: "Official React Documentation",
        url: "https://react.dev/",
      },
      {
        type: "link",
        text: "React GitHub Repository",
        url: "https://github.com/facebook/react",
      },
      {
        type: "link",
        text: "React Hooks API Reference",
        url: "https://react.dev/reference/react",
      },
      {
        type: "link",
        text: "React Testing Library",
        url: "https://testing-library.com/docs/react-testing-library/intro/",
      },
      {
        type: "link",
        text: "Next.js Documentation",
        url: "https://nextjs.org/docs",
      },
      {
        type: "link",
        text: "Deploy React on Vercel",
        url: "https://vercel.com/guides/deploying-react-with-vercel",
      },
    ],
  },

  {
    id: 2,
    slug: "microservices-architecture",
    title: "Understanding Microservices Architecture",
    summary:
      "A deep dive into microservices, their benefits, challenges, and best practices.",
    date: "Feb 9, 2025",
    author: "Mansoor Pathikonda",
    content: [
      {
        type: "text",
        value:
          "**Microservices architecture** is an approach to building software applications as a collection of loosely coupled services, each responsible for a specific function. This contrasts with the traditional **monolithic model**, where an entire application is built as a single unit.",
      },
      {
        type: "image",
        url: "https://learn.microsoft.com/en-us/azure/architecture/reference-architectures/containers/aks-microservices/images/aks.svg",
        alt: "Microservices Architecture",
      },
      {
        type: "text",
        value:
          "Each microservice can be developed, deployed, and scaled independently, making it easier to maintain and update large applications. This approach enhances **scalability**, **fault isolation**, and enables teams to work on different services simultaneously.",
      },
      {
        type: "text",
        value:
          "**Key Characteristics of Microservices**:\n- **Decentralized Data Management**: Each microservice can have its own database, ensuring loose coupling.\n- **Independent Deployment**: Services can be deployed individually without affecting others.\n- **Resilience and Fault Tolerance**: Failures in one microservice do not bring down the entire system.\n- **Technology Agnostic**: Different services can be built using different programming languages and frameworks.",
      },
      {
        type: "image",
        url: "https://media.geeksforgeeks.org/wp-content/uploads/20240903101136/Advantages.webp",
        alt: "Benefits of Microservices",
      },
      {
        type: "text",
        value:
          "**Microservices vs Monolithic Architecture**:\n- **Scalability**: Microservices offer high scalability, whereas monolithic applications have limited scalability.\n- **Deployment**: Microservices allow independent deployment, while monolithic applications require full redeployment.\n- **Maintenance**: Microservices are easier to maintain as they grow, whereas monolithic applications become harder to manage.\n- **Fault Isolation**: Microservices provide better fault isolation, reducing the impact of failures.\n- **Technology Diversity**: Microservices can use different technologies for different services, while monolithic applications typically rely on a single tech stack.",
      },
      {
        type: "text",
        value:
          "**Implementing Microservices with Spring Boot**:\nSpring Boot is a popular framework for building microservices due to its simplicity and integration capabilities with other Spring projects.",
      },
      {
        type: "code",
        language: "java",
        value:
          '@RestController\n@RequestMapping("/users")\npublic class UserController {\n  @Autowired\n  private UserService userService;\n  \n  @GetMapping\n  public List<User> getUsers() {\n    return userService.getAllUsers();\n  }\n}',
      },
      {
        type: "text",
        value:
          "**Challenges of Microservices**:\n- **Complexity**: Managing multiple services, databases, and deployments can be challenging.\n- **Latency**: Increased network calls between services can introduce delays.\n- **Data Consistency**: Ensuring consistency across services requires careful design.\n- **Monitoring**: Requires sophisticated monitoring and logging tools.",
      },
      {
        type: "text",
        value:
          "**Best Practices**:\n- **Use API Gateway** for centralized routing and authentication.\n- **Implement Circuit Breakers** for fault tolerance.\n- **Utilize Containerization** with Docker and Kubernetes for efficient deployment.\n- **Adopt CI/CD Pipelines** to streamline deployment.\n- **Implement Distributed Tracing** using tools like Jaeger or Zipkin.",
      },
      {
        type: "image",
        url: "https://blog.clearscale.com/wp-content/uploads/2022/08/Prometheus.png",
        alt: "Microservices Observability",
      },
      {
        type: "link",
        text: "Microservices with Spring Boot",
        url: "https://spring.io/guides/gs/microservices/",
      },
      {
        type: "link",
        text: "Dockerizing Microservices",
        url: "https://docs.docker.com/get-started/",
      },
      {
        type: "link",
        text: "Kubernetes for Microservices",
        url: "https://kubernetes.io/docs/concepts/overview/what-is-kubernetes/",
      },
      {
        type: "link",
        text: "Microservices Design Patterns",
        url: "https://microservices.io/patterns/index.html",
      },
    ],
  },

  {
    id: 3,
    slug: "rest-api-design",
    title: "REST API Design Best Practices",
    summary:
      "Learn how to design robust, scalable, and maintainable RESTful APIs.",
    date: "Feb 10, 2025",
    author: "Mansoor Pathikonda",
    content: [
      {
        type: "text",
        value:
          "**Introduction**\n\nREST (Representational State Transfer) is an architectural style that provides a structured approach to building web services. It ensures better **scalability, flexibility, and maintainability** for APIs. A well-designed REST API follows industry standards, making it easier for developers to integrate with various systems efficiently.",
      },
      {
        type: "image",
        // url: "https://example.com/rest-api-architecture.png",
        caption: "Basic REST API Architecture",
      },
      {
        type: "text",
        value:
          "**Key Principles of REST API Design** A RESTful API should be built with the following principles:",
      },
      {
        type: "text",
        value:
          "1. **Statelessness**: Each request from a client must contain all the necessary information, and the server should not store client-specific sessions.",
      },
      {
        type: "text",
        value:
          "2. **Client-Server Architecture**: The client and server should be independent, allowing better scalability.",
      },
      {
        type: "text",
        value:
          "3. **Resource-Based Approach**: APIs should be centered around resources such as `users`, `orders`, and `products` rather than actions.",
      },
      {
        type: "text",
        value:
          "**Using HTTP Methods Correctly**\n\nEach API endpoint should utilize the correct HTTP method based on its functionality:\n\n- **GET**: Retrieve data from the server. Example:\n",
      },
      {
        type: "code",
        language: "http",
        value: "GET /users/123 HTTP/1.1\nHost: api.example.com",
      },
      {
        type: "text",
        value: "- **POST**: Create a new resource. Example:\n",
      },
      {
        type: "code",
        language: "http",
        value:
          'POST /users HTTP/1.1\nContent-Type: application/json\n\n{\n  "name": "John Doe",\n  "email": "john.doe@example.com"\n}',
      },
      {
        type: "text",
        value: "- **PUT**: Update an existing resource. Example:\n",
      },
      {
        type: "code",
        language: "http",
        value:
          'PUT /users/123 HTTP/1.1\nContent-Type: application/json\n\n{\n  "name": "John Updated",\n  "email": "john.updated@example.com"\n}',
      },
      {
        type: "text",
        value: "- **DELETE**: Remove a resource. Example:\n",
      },
      {
        type: "code",
        language: "http",
        value: "DELETE /users/123 HTTP/1.1",
      },
      {
        type: "text",
        value:
          "**Using Meaningful Status Codes**\n\nA well-designed REST API should return appropriate status codes to indicate the success or failure of a request:\n\n- **200 OK**: Successful request\n- **201 Created**: Resource successfully created\n- **400 Bad Request**: Invalid input from the client\n- **404 Not Found**: The requested resource does not exist\n- **500 Internal Server Error**: A server-side error occurred",
      },
      {
        type: "text",
        value:
          "**Resource Naming Best Practices**\n\nUse resource names that are clear and descriptive, following RESTful conventions. Avoid using verbs in the endpoint URL. Instead of:\n\n❌ `/getUser?id=123`\n✅ `/users/123`\n\nSimilarly, for retrieving orders of a user:\n\n❌ `/getOrdersByUser?id=123`\n✅ `/users/123/orders`",
      },
      {
        type: "image",
        // url: "https://example.com/restful-api-resource-naming.png",
        caption: "Proper Resource Naming in REST APIs",
      },
      {
        type: "text",
        value:
          "**Authentication & Security**\n\nA REST API must ensure security using authentication and authorization mechanisms. Popular methods include:\n\n- **OAuth 2.0**: Token-based authentication for secure access.\n- **JWT (JSON Web Tokens)**: Stateless authentication for better scalability.\n- **API Keys**: Unique keys for identifying authorized clients.",
      },
      {
        type: "code",
        language: "http",
        value: "Authorization: Bearer your_jwt_token_here",
      },
      {
        type: "text",
        value:
          "**Versioning APIs for Stability**\n\nAPI changes over time, and versioning helps maintain compatibility. Common approaches include:\n\n- **URI Versioning**: `/v1/users`\n- **Header Versioning**: `Accept: application/vnd.example.v1+json`\n- **Query Parameter Versioning**: `/users?version=1`",
      },
      {
        type: "image",
        // url: "https://example.com/api-versioning.png",
        caption: "Different API Versioning Strategies",
      },
      {
        type: "text",
        value:
          "**Performance Optimization**\n\n- **Enable Caching**: Use `Cache-Control` headers to store frequently requested data.\n- **Pagination for Large Data Sets**: Reduce server load by implementing pagination (`?page=1&size=10`).\n- **Rate Limiting**: Prevent abuse by limiting the number of requests per user.",
      },
      {
        type: "code",
        language: "http",
        value: "GET /users?page=1&size=10 HTTP/1.1",
      },
      {
        type: "text",
        value:
          "**Conclusion**\n\nBy following these best practices, you can design RESTful APIs that are scalable, maintainable, and secure. Implementing the right architecture and conventions ensures a seamless experience for developers and users alike.",
      },
      {
        type: "link",
        text: "Learn More: RESTful API Design Guide",
        url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/RESTful_API_design",
      },
    ],
  },
];

export default blogs;

import images from "./importImages";

const projects = [
    {
        id: "MyChat",
        title: "MyChat",
        description: [
            "myChat is a mobile application built with React Native that allows users to engage in real-time messaging. It leverages Firebase for authentication, cloud storage, and real-time database functionality. The app incorporates various features, including image and location sharing, and provides a seamless user experience with a clean and intuitive UI.",
            "During the development process, I focused on ensuring a smooth and responsive user experience, implementing robust error handling, and adhering to best practices for mobile app development.",
        ],
        features: [
            "Anonymous user authentication with Firebase Authentication",
            "Real-time messaging with Firebase Cloud Firestore",
            "Image and location sharing capabilities",
            "Offline support and caching of messages using AsyncStorage",
            "Network status monitoring and handling",
            "Accessibility features for improved usability",
        ],
        installation: [
            "Install Node.js and the Expo CLI if you haven't already.",
            "Clone this repository.",
            "Navigate to the project directory and run `npm install` to install the required dependencies.",
        ],

        technologies: [
            "React Native",
            "Expo",
            "Firebase (Authentication, Cloud Firestore, Cloud Storage)",
            "React Navigation",
            "React Native Gifted Chat",
            "React Native Maps",
            "AsyncStorage",
            "NetInfo",
        ],
        detailedFeatures: [
            {
                title: "Anonymous Authentication",
                description:
                    "Users can sign in anonymously using Firebase Authentication, allowing them to join the chat without creating an account.",
            },
            {
                title: "Real-time Messaging",
                description:
                    "The app leverages Firebase Cloud Firestore to enable real-time messaging between users. Messages are synced across devices in real-time, ensuring a seamless communication experience.",
            },
            {
                title: "Image and Location Sharing",
                description:
                    "Users can share images and their current location within the chat. Images are uploaded to Firebase Cloud Storage, and the download URL is shared in the chat. Location data is retrieved using the Expo Location API and displayed on a map within the chat.",
            },
            {
                title: "Offline Support and Caching",
                description:
                    "The app implements offline support using AsyncStorage. Messages are cached locally, allowing users to view previous conversations even when offline. When the device regains network connectivity, the app syncs the cached messages with the Firebase database.",
            },
            {
                title: "Network Status Monitoring",
                description:
                    "The app monitors the network status using the @react-native-community/netinfo package. It provides visual feedback to the user when the device is offline and disables certain features that require an internet connection.",
            },
            {
                title: "Accessibility",
                description:
                    "myChat incorporates accessibility features to ensure a better user experience for users with disabilities. This includes labeling UI elements with accessible names and hints, and providing alternative representations for visual content.",
            },
        ],
    },
    {
        id: "MyFlix",
        title: "MyFlix",
        description: [
            "Designing and implementing the user interface using Angular components, templates, and services. Integrating with backend APIs to fetch movie data. Implementing user profile management features, such as user deletion and favorite movie lists.",
            "Throughout the project, I made several decisions regarding the choice of Angular libraries, architectural patterns, and UI/UX design. For example, I chose to use Angular Material for UI components to ensure a consistent and modern look and feel across the application. This decision helped streamline development and improve usability for end users.",
        ],
        installation: [
            "Install Node.js and npm if you haven't already.",
            "Clone this repository.",
            "Navigate to the project directory and run `npm install`.",
        ],

        technologies: [
            "Angular",
            "Angular Material",
            "Angular Router",
            "RxJS",
            "TypeScript",
            "HTML/CSS",
            "RESTful APIs",
        ],
        detailedFeatures: [
            {
                title: "User Interface Design",
                description:
                    "Designed and implemented an intuitive and responsive user interface using Angular components, templates, and Angular Material UI components. Ensured a consistent and modern look and feel across the application.",
            },
            {
                title: "API Integration",
                description:
                    "Integrated with backend APIs to fetch movie data and user information. Utilized Angular services to handle HTTP requests and responses, ensuring smooth data flow between the frontend and backend.",
            },
            {
                title: "User Profile Management",
                description:
                    "Implemented user profile management features, including user deletion and the ability to add and remove favorite movies. Provided a seamless user experience for managing user preferences and interactions with the application.",
            },
            {
                title: "Angular Best Practices",
                description:
                    "Followed Angular best practices and conventions throughout the development process. Utilized Angular features such as dependency injection, reactive programming with RxJS, and efficient component communication to create a maintainable and scalable codebase.",
            },
            {
                title: "Responsive Design",
                description:
                    "Implemented responsive design techniques to ensure the application is accessible and usable across various devices and screen sizes. Utilized CSS media queries and flexible layouts to adapt the UI to different viewport sizes.",
            },
            {
                title: "Error Handling and Logging",
                description:
                    "Implemented robust error handling and logging mechanisms to improve the application's reliability and maintainability. Utilized Angular's built-in error handling features and integrated with logging frameworks to capture and track errors effectively.",
            },
        ],
    },

    {
        id: "MeetApp",
        title: "MeetApp",
        description: [
            "The Meet App is a serverless, progressive web application (PWA) built with React using a test-driven development (TDD) approach. It allows users to search for upcoming events by city and view event details, including date, location, and description. The app features data visualization with charts displaying events by city and genre.",
            "During the development process, I employed various testing techniques such as integration testing, unit testing, and end-to-end testing. Behavior-Driven Development (BDD) was also utilized to ensure the application met the specified requirements.",
        ],
        features: [
            "Integration with the Google Calendar API to fetch event data",
            "Responsive user interface with a city search functionality",
            "Data visualization with charts displaying events by city and genre",
            "Offline capabilities and installation as a Progressive Web App (PWA)",
            "Comprehensive testing suite with Jest and Puppeteer",
        ],
        installation: [
            "Install Node.js and npm if you haven't already.",
            "Clone this repository.",
            "Navigate to the project directory and run `npm install` to install the required dependencies.",
        ],

        technologies: [
            "React",
            "React Testing Library",
            "Jest",
            "Puppeteer",
            "Recharts (for data visualization)",
            "Google Calendar API",
            "Workbox (for PWA capabilities)",
        ],
        detailedFeatures: [
            {
                title: "City Search",
                description:
                    "The Meet App provides a user-friendly search functionality that allows users to search for events by city. Users can enter a city name and get a list of upcoming events in that city.",
            },
            {
                title: "Event Details",
                description:
                    "Users can view detailed information about each event, including the event title, date, time, location, and description. This helps users make informed decisions about which events to attend.",
            },
            {
                title: "Data Visualization",
                description:
                    "The Meet App incorporates data visualization features using Recharts library. It displays charts and graphs that provide insights into the distribution of events by city and genre. This allows users to easily identify popular event locations and categories.",
            },
            {
                title: "Offline Capabilities",
                description:
                    "As a Progressive Web App (PWA), the Meet App offers offline capabilities. Users can access the app and view cached event data even when they don't have an internet connection. This ensures a seamless user experience in offline scenarios.",
            },
            {
                title: "PWA Installation",
                description:
                    "Users can install the Meet App as a standalone application on their devices. This provides a native app-like experience, with the app icon available on the home screen and the ability to launch the app directly.",
            },
        ],

        testing: {
            description:
                "The Meet App has a comprehensive testing suite that includes unit tests, integration tests, and end-to-end tests. The testing approach followed Test-Driven Development (TDD) principles, ensuring that tests were written before the implementation.",
            unitTests:
                "Unit tests were written using the React Testing Library and Jest. These tests cover individual components and utility functions, verifying their behavior in isolation.",
            integrationTests:
                "Integration tests were also implemented using the React Testing Library and Jest. These tests ensure that components work correctly when integrated with each other and with external dependencies, such as the Google Calendar API.",
            endToEndTests:
                "End-to-end tests were written using Puppeteer, a Node.js library for automating browser interactions. These tests simulate user interactions with the application, verifying the correct behavior and functionality from a user's perspective.",
            bdd: "The Meet App followed a Behavior-Driven Development (BDD) approach, where requirements were defined in a structured format using Gherkin syntax. These requirements were then translated into test scenarios using the Jest-Cucumber library, ensuring that the application met the specified behaviors and requirements.",
        },
    },
];

const caseStudyImages = [
    images["CaseStudy_RetroLenss_page-0001.jpg"],
    images["CaseStudy_RetroLenss_page-0002.jpg"],
    images["CaseStudy_RetroLenss_page-0003.jpg"],
    images["CaseStudy_RetroLenss_page-0004.jpg"],
    images["CaseStudy_RetroLenss_page-0005.jpg"],
    images["CaseStudy_RetroLenss_page-0006.jpg"],
    images["CaseStudy_RetroLenss_page-0007.jpg"],
    images["CaseStudy_RetroLenss_page-0008.jpg"],
    images["CaseStudy_RetroLenss_page-0009.jpg"],
    images["CaseStudy_RetroLenss_page-0010.jpg"],
    images["CaseStudy_RetroLenss_page-0011.jpg"],
    images["CaseStudy_RetroLenss_page-0012.jpg"],
];
export { projects, caseStudyImages };

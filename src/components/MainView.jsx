import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";
import {
  Box,
  Typography,
  Paper,
  Tab,
  Tabs,
  TextField,
  Button,
  LinearProgress,
  Chip,
  Card,
  CardContent,
  Grid,
  IconButton,
  Link,
  ThemeProvider,
  createTheme,
  CssBaseline,
  Container,
  Stack,
  Divider,
} from "@mui/material";
import {
  GitHub,
  LinkedIn,
  Email,
  Launch,
  Code,
  Storage,
  Web,
  Folder,
  Description,
} from "@mui/icons-material";

// Import your images - you'll need to make sure this import works
import profilePic from "../images/profile-pic.jpg";

// Terminal-themed MUI theme
const terminalTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ff41",
      light: "#4ade80",
      dark: "#16a34a",
    },
    secondary: {
      main: "#06b6d4",
      light: "#22d3ee",
      dark: "#0891b2",
    },
    warning: {
      main: "#fbbf24",
    },
    error: {
      main: "#ff5f57",
    },
    success: {
      main: "#28ca42",
    },
    background: {
      default: "#0a0a0a",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#00ff41",
      secondary: "#06b6d4",
    },
  },
  typography: {
    fontFamily: '"Fira Code", "Monaco", "Cascadia Code", monospace',
    fontSize: 14,
    h1: {
      fontFamily: '"Fira Code", monospace',
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#00ff41",
    },
    h2: {
      fontFamily: '"Fira Code", monospace',
      fontSize: "1.8rem",
      fontWeight: 600,
      color: "#06b6d4",
    },
    h3: {
      fontFamily: '"Fira Code", monospace',
      fontSize: "1.2rem",
      fontWeight: 500,
      color: "#fbbf24",
    },
    body1: {
      fontFamily: '"Fira Code", monospace',
      fontSize: "0.9rem",
      lineHeight: 1.6,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a1a1a",
          border: "1px solid #333",
          borderRadius: 0,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontFamily: '"Fira Code", monospace',
          fontSize: "0.9rem",
          minWidth: "auto",
          padding: "6px 16px",
          "&.Mui-selected": {
            color: "#00ff41",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            fontFamily: '"Fira Code", monospace',
            fontSize: "0.9rem",
            "& fieldset": {
              border: "none",
            },
          },
          "& .MuiInput-root": {
            color: "#00ff41",
            "&:before": {
              borderBottom: "1px solid #333",
            },
          },
        },
      },
    },
  },
});

const MainView = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  // ASCII art for the name
  const asciiName = `
╔═══════════════════════════════════════════════════════════════╗
║  ____              _      _       _       _                   ║
║ |  _ \\  __ _ _ __ (_) ___| |     | | ___ | |__  _ __          ║
║ | | | |/ _\` | '_ \\| |/ _ \\ |  _  | |/ _ \\| '_ \\| '_ \\         ║
║ | |_| | (_| | | | | |  __/ | | |_| | (_) | | | | | | |        ║
║ |____/ \\__,_|_| |_|_|\\___|_|  \\___/ \\___/|_| |_|_| |_|        ║
║                                                               ║
║              Full Stack Developer | Cyprus                    ║
╚═══════════════════════════════════════════════════════════════╝`;

  // Typing effect for welcome message
  useEffect(() => {
    const text =
      "Welcome to my terminal portfolio. Type 'help' for commands...";
    let index = 0;

    const typeChar = () => {
      if (index < text.length) {
        setTypingText(text.substring(0, index + 1));
        index++;
        setTimeout(typeChar, 50);
      } else {
        setIsTyping(false);
      }
    };

    typeChar();
  }, []);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const sections = ["home", "about", "skills", "projects", "contact"];

  const commands = {
    help: "Show available commands",
    ls: "List available sections",
    "cd <section>": "Navigate to section (about/skills/projects/contact)",
    "cd ~": "Go back to home",
    whoami: "Display developer info",
    clear: "Clear terminal history",
    "cat resume.pdf": "Download resume",
    github: "Open GitHub profile",
    linkedin: "Open LinkedIn profile",
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output = "";

    if (trimmedCmd === "help") {
      output =
        "Available commands:\n\n" +
        Object.entries(commands)
          .map(([cmd, desc]) => `  ${cmd.padEnd(20)} - ${desc}`)
          .join("\n");
    } else if (trimmedCmd === "ls") {
      output =
        "📁 about/    📁 skills/    📁 projects/    📁 contact/    📄 resume.pdf";
    } else if (trimmedCmd.startsWith("cd ")) {
      const target = trimmedCmd.substring(3);
      const sectionMap = {
        about: 1,
        skills: 2,
        projects: 3,
        contact: 4,
        "~": 0,
      };

      if (sectionMap.hasOwnProperty(target)) {
        setCurrentSection(sectionMap[target]);
        output = `Navigating to ${target === "~" ? "home" : target}...`;
      } else {
        output = `bash: cd: ${target}: No such file or directory`;
      }
    } else if (trimmedCmd === "whoami") {
      output = `User: daniel-john-almirante
Role: Full Stack Developer
Location: Nicosia, Cyprus
Status: Available for opportunities`;
    } else if (trimmedCmd === "clear") {
      setCommandHistory([]);
      return;
    } else if (trimmedCmd === "cat resume.pdf") {
      output = "📄 Opening resume... (Download would trigger here)";
      // Add actual download logic here
    } else if (trimmedCmd === "github") {
      window.open("https://github.com/danielpinoy", "_blank");
      output = "Opening GitHub profile in new tab...";
    } else if (trimmedCmd === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/daniel-john-almirante-b42782301/",
        "_blank"
      );
      output = "Opening LinkedIn profile in new tab...";
    } else if (trimmedCmd === "") {
      return;
    } else {
      output = `Command not found: ${cmd}\nType 'help' for available commands.`;
    }

    setCommandHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleCommandSubmit = (e) => {
    if (e.key === "Enter") {
      executeCommand(currentCommand);
      setCurrentCommand("");
    }
  };

  const skillsData = [
    { name: "React", level: 90, color: "#61DAFB", icon: <Web /> },
    { name: "Node.js", level: 85, color: "#68A063", icon: <Code /> },
    { name: "JavaScript", level: 85, color: "#F7DF1E", icon: <Code /> },
    { name: "MongoDB", level: 75, color: "#4DB33D", icon: <Storage /> },
    { name: "Express", level: 85, color: "#ffffff", icon: <Code /> },
    { name: "TypeScript", level: 70, color: "#007ACC", icon: <Code /> },
    { name: "Angular", level: 75, color: "#DD0031", icon: <Web /> },
    { name: "Firebase", level: 80, color: "#FFCA28", icon: <Storage /> },
  ];

  const projectsData = [
    {
      name: "ChatBox",
      description: "Real-time messaging app with React Native and Firebase",
      tech: ["React Native", "Firebase", "Expo", "AsyncStorage"],
      status: "deployed",
      lastCommit: "2 days ago",
      github: "https://github.com/danielpinoy/ChatRoom",
      stars: 12,
    },
    {
      name: "MeetApp",
      description:
        "Serverless PWA for event management with Google Calendar API",
      tech: ["React", "TDD", "Google API", "Recharts"],
      status: "deployed",
      lastCommit: "1 week ago",
      github: "https://github.com/danielpinoy/meet",
      stars: 8,
    },
    {
      name: "RetroFlix",
      description: "Historical movies web application with user authentication",
      tech: ["React", "Redux", "MongoDB", "JWT"],
      status: "deployed",
      lastCommit: "3 days ago",
      github: "https://github.com/danielpinoy/historic-movies-client",
      demo: "https://kaleidoscopic-tiramisu-9e52da.netlify.app/login",
      stars: 15,
    },
    {
      name: "MyFlix",
      description: "Angular movie database with Material UI design",
      tech: ["Angular", "Material UI", "TypeScript", "RxJS"],
      status: "deployed",
      lastCommit: "5 days ago",
      github: "https://github.com/danielpinoy/myFlixClient",
      stars: 6,
    },
  ];

  const HomeSection = () => (
    <Box>
      <Box mb={4}>
        <Typography
          component="pre"
          sx={{
            fontSize: { xs: "0.6rem", sm: "0.8rem", md: "1rem" },
            color: "primary.main",
            lineHeight: 1.2,
            overflow: "auto",
            fontFamily: "monospace",
            whiteSpace: "pre",
          }}
        >
          {asciiName}
        </Typography>
      </Box>

      <Box mb={4} display="flex" alignItems="center" gap={2}>
        <Box
          component="img"
          src={profilePic}
          alt="Daniel John Almirante"
          sx={{
            width: 100,
            height: 120,
            border: "3px solid #00ff41",
            boxShadow: "0 0 20px rgba(0, 255, 65, 0.5)",
            borderRadius: 1, // Slightly rounded corners
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <Box>
          <Typography variant="h2" color="secondary.main" gutterBottom>
            $ whoami
          </Typography>
          <Typography color="primary.main">
            {typingText}
            {isTyping && <span style={{ opacity: showCursor ? 1 : 0 }}>█</span>}
          </Typography>
        </Box>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h3" color="warning.main" gutterBottom>
              $ cat status.txt
            </Typography>
            <Stack spacing={1}>
              <Typography color="primary.main">
                <span style={{ color: "#06b6d4" }}>Status:</span> 🟢 Available
                for work
              </Typography>
              <Typography color="primary.main">
                <span style={{ color: "#06b6d4" }}>Location:</span> 📍 Nicosia,
                Cyprus
              </Typography>
              <Typography color="primary.main">
                <span style={{ color: "#06b6d4" }}>Experience:</span> 2+ years
              </Typography>
              <Typography color="primary.main">
                <span style={{ color: "#06b6d4" }}>Focus:</span> Full Stack
                Development
              </Typography>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h3" color="warning.main" gutterBottom>
              $ ls -la quick_links/
            </Typography>
            <Stack spacing={1}>
              <Box display="flex" alignItems="center" gap={1}>
                <GitHub fontSize="small" />
                <Link
                  href="https://github.com/danielpinoy"
                  target="_blank"
                  color="primary.main"
                  underline="hover"
                >
                  github.com/danielpinoy
                </Link>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <LinkedIn fontSize="small" />
                <Link
                  href="https://www.linkedin.com/in/daniel-john-almirante-b42782301/"
                  target="_blank"
                  color="primary.main"
                  underline="hover"
                >
                  LinkedIn Profile
                </Link>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Email fontSize="small" />
                <Link
                  href="mailto:almirante.danieljohn@gmail.com"
                  color="primary.main"
                  underline="hover"
                >
                  Send Email
                </Link>
              </Box>
              <Box display="flex" alignItems="center" gap={1}>
                <Description fontSize="small" />
                <Typography color="primary.main" sx={{ cursor: "pointer" }}>
                  Download Resume
                </Typography>
              </Box>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );

  const AboutSection = () => (
    <Box>
      <Typography variant="h1" color="secondary.main" gutterBottom>
        $ cat about.md
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: "100%", textAlign: "center" }}>
            <Box
              component="img"
              src={profilePic}
              alt="Daniel John Almirante"
              sx={{
                width: 250,
                height: 300,
                margin: "0 auto 2rem",
                border: "3px solid #00ff41",
                boxShadow: "0 0 30px rgba(0, 255, 65, 0.3)",
                borderRadius: 2, // Slightly rounded corners
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />
            <Typography variant="h3" color="warning.main" gutterBottom>
              Daniel John Almirante
            </Typography>
            <Typography color="text.primary">Full Stack Developer</Typography>
            <Typography color="text.secondary" variant="body2">
              Nicosia, Cyprus
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, height: "100%" }}>
            <Typography variant="h2" color="warning.main" gutterBottom>
              # About Me
            </Typography>
            <Typography color="text.primary" paragraph>
              I'm a passionate Full Stack Developer with 2+ years of experience
              building user-friendly and responsive web applications. I
              specialize in modern JavaScript frameworks and enjoy creating
              clean, efficient code that solves real-world problems.
            </Typography>

            <Typography variant="h3" color="warning.main" sx={{ mt: 3, mb: 2 }}>
              ## Background
            </Typography>
            <Typography color="text.primary" paragraph>
              • 🎓 Studied Entertainment and Multimedia Computing
              <br />
              • 💻 Self-taught developer with continuous learning mindset
              <br />
              • 🌍 Based in Cyprus, open to remote opportunities
              <br />• 🚀 Focused on React, Node.js, and cloud technologies
            </Typography>

            <Typography variant="h3" color="warning.main" sx={{ mt: 3, mb: 2 }}>
              ## Interests
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography color="text.primary">
                  • 🎮 Video Games
                  <br />• 💪 Fitness & Gym
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography color="text.primary">
                  • ☁️ Cloud Computing
                  <br />• 🔧 Open Source
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );

  const SkillsSection = () => (
    <Box>
      <Typography variant="h1" color="secondary.main" gutterBottom>
        $ ./skills --list --verbose
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Stack spacing={2}>
            {skillsData.map((skill) => (
              <Paper key={skill.name} sx={{ p: 2 }}>
                <Box display="flex" alignItems="center" mb={1}>
                  <Box sx={{ color: skill.color, mr: 2 }}>{skill.icon}</Box>
                  <Typography variant="h3" sx={{ minWidth: 120 }}>
                    {skill.name}
                  </Typography>
                  <Box flexGrow={1} mx={2}>
                    <LinearProgress
                      variant="determinate"
                      value={skill.level}
                      sx={{
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: "rgba(255,255,255,0.1)",
                        "& .MuiLinearProgress-bar": {
                          backgroundColor: skill.color,
                          borderRadius: 5,
                        },
                      }}
                    />
                  </Box>
                  <Typography color="primary.main" sx={{ minWidth: 50 }}>
                    {skill.level}%
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Stack>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, height: "fit-content" }}>
            <Typography variant="h3" color="warning.main" gutterBottom>
              $ cat tech_stack.json
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Highlight
                theme={themes.vsDark}
                code={JSON.stringify(
                  {
                    frontend: [
                      "React",
                      "Angular",
                      "HTML5",
                      "CSS3",
                      "JavaScript",
                      "TypeScript",
                    ],
                    backend: ["Node.js", "Express", "MongoDB", "Firebase"],
                    tools: ["Git", "VS Code", "Postman", "Figma"],
                    testing: ["Jest", "React Testing Library", "Puppeteer"],
                  },
                  null,
                  2
                )}
                language="json"
              >
                {({
                  className,
                  style,
                  tokens,
                  getLineProps,
                  getTokenProps,
                }) => (
                  <pre
                    className={className}
                    style={{ ...style, fontSize: "0.8rem", margin: 0 }}
                  >
                    {tokens.map((line, i) => (
                      <div key={i} {...getLineProps({ line })}>
                        {line.map((token, key) => (
                          <span key={key} {...getTokenProps({ token })} />
                        ))}
                      </div>
                    ))}
                  </pre>
                )}
              </Highlight>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );

  const ProjectsSection = () => (
    <Box>
      <Typography variant="h1" color="secondary.main" gutterBottom>
        $ git log --oneline --graph
      </Typography>

      <Grid container spacing={3}>
        {projectsData.map((project) => (
          <Grid item xs={12} md={6} key={project.name}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 12px 30px rgba(0,255,65,0.2)",
                  border: "1px solid #00ff41",
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="start"
                  mb={2}
                >
                  <Box>
                    <Typography variant="h2" color="warning.main" gutterBottom>
                      <Folder sx={{ mr: 1, verticalAlign: "middle" }} />
                      {project.name}
                    </Typography>
                    <Typography color="text.primary" paragraph>
                      {project.description}
                    </Typography>
                  </Box>
                  <Stack direction="column" spacing={0.5} alignItems="flex-end">
                    <Chip
                      label={project.status}
                      color="success"
                      size="small"
                      sx={{ fontSize: "0.7rem" }}
                    />
                    <Typography variant="caption" color="text.secondary">
                      ⭐ {project.stars}
                    </Typography>
                  </Stack>
                </Box>

                <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                  {project.tech.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(6,182,212,0.2)",
                        color: "secondary.main",
                        fontSize: "0.75rem",
                      }}
                    />
                  ))}
                </Box>

                <Typography
                  variant="caption"
                  color="text.secondary"
                  display="block"
                  mb={2}
                >
                  Last commit: {project.lastCommit}
                </Typography>

                <Box display="flex" gap={2} mt="auto">
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    startIcon={<GitHub />}
                    href={project.github}
                    target="_blank"
                  >
                    View Code
                  </Button>
                  {project.demo && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      size="small"
                      startIcon={<Launch />}
                      href={project.demo}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const ContactSection = () => (
    <Box>
      <Typography variant="h1" color="secondary.main" gutterBottom>
        $ cat contact.info
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h2" color="warning.main" gutterBottom>
              Get In Touch
            </Typography>

            <Stack spacing={3} mt={3}>
              <Box display="flex" alignItems="center" gap={2}>
                <IconButton
                  sx={{
                    backgroundColor: "rgba(0,255,65,0.1)",
                    "&:hover": { backgroundColor: "rgba(0,255,65,0.2)" },
                  }}
                >
                  <Email color="warning" />
                </IconButton>
                <Box>
                  <Typography variant="h3" color="warning.main">
                    Email
                  </Typography>
                  <Link
                    href="mailto:almirante.danieljohn@gmail.com"
                    color="primary.main"
                    underline="hover"
                  >
                    almirante.danieljohn@gmail.com
                  </Link>
                </Box>
              </Box>

              <Divider sx={{ borderColor: "#333" }} />

              <Box display="flex" alignItems="center" gap={2}>
                <IconButton
                  sx={{
                    backgroundColor: "rgba(0,255,65,0.1)",
                    "&:hover": { backgroundColor: "rgba(0,255,65,0.2)" },
                  }}
                >
                  <LinkedIn color="warning" />
                </IconButton>
                <Box>
                  <Typography variant="h3" color="warning.main">
                    LinkedIn
                  </Typography>
                  <Link
                    href="https://www.linkedin.com/in/daniel-john-almirante-b42782301/"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary.main"
                    underline="hover"
                  >
                    /in/daniel-john-almirante
                  </Link>
                </Box>
              </Box>

              <Divider sx={{ borderColor: "#333" }} />

              <Box display="flex" alignItems="center" gap={2}>
                <IconButton
                  sx={{
                    backgroundColor: "rgba(0,255,65,0.1)",
                    "&:hover": { backgroundColor: "rgba(0,255,65,0.2)" },
                  }}
                >
                  <GitHub color="warning" />
                </IconButton>
                <Box>
                  <Typography variant="h3" color="warning.main">
                    GitHub
                  </Typography>
                  <Link
                    href="https://github.com/danielpinoy"
                    target="_blank"
                    rel="noopener noreferrer"
                    color="primary.main"
                    underline="hover"
                  >
                    github.com/danielpinoy
                  </Link>
                </Box>
              </Box>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h3" color="warning.main" gutterBottom>
                $ ping status
              </Typography>
              <Stack spacing={1} mt={2}>
                <Typography color="primary.main" variant="body2">
                  PING danieljohn.dev (127.0.0.1)
                </Typography>
                <Typography color="primary.main" variant="body2">
                  64 bytes: time=0.1ms
                </Typography>
                <Box mt={2}>
                  <Typography color="success.main">
                    ● Available for new opportunities
                  </Typography>
                  <Typography color="success.main">
                    ● Open to remote work
                  </Typography>
                  <Typography color="success.main">
                    ● Ready to collaborate
                  </Typography>
                </Box>
              </Stack>
            </Paper>

            <Paper sx={{ p: 3 }}>
              <Typography variant="h3" color="warning.main" gutterBottom>
                $ uptime
              </Typography>
              <Typography color="primary.main" variant="body2" mt={2}>
                Currently based in Cyprus (GMT+2)
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Available for calls between 9 AM - 6 PM
              </Typography>
            </Paper>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );

  const renderCurrentSection = () => {
    const sections = [
      <HomeSection />,
      <AboutSection />,
      <SkillsSection />,
      <ProjectsSection />,
      <ContactSection />,
    ];

    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {sections[currentSection]}
        </motion.div>
      </AnimatePresence>
    );
  };

  return (
    <ThemeProvider theme={terminalTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
        {/* Terminal Header */}
        <Paper
          square
          elevation={3}
          sx={{
            backgroundColor: "#2a2a2a",
            borderBottom: "1px solid #444",
            p: 1,
            display: "flex",
            alignItems: "center",
            gap: 1,
            position: "sticky",
            top: 0,
            zIndex: 100,
          }}
        >
          <Box display="flex" gap={1}>
            <Box
              sx={{
                width: 12,
                height: 12,
                backgroundColor: "error.main",
                borderRadius: "50%",
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                backgroundColor: "success.main",
                borderRadius: "50%",
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": { transform: "scale(1.1)" },
              }}
            />
          </Box>
          <Typography variant="caption" color="text.secondary" sx={{ ml: 2 }}>
            daniel@portfolio: ~/{sections[currentSection]}
          </Typography>
        </Paper>

        {/* Navigation Tabs */}
        <Paper
          square
          sx={{ backgroundColor: "#2a2a2a", borderBottom: "1px solid #444" }}
        >
          <Tabs
            value={currentSection}
            onChange={(e, newValue) => setCurrentSection(newValue)}
            textColor="primary"
            indicatorColor="primary"
            variant="scrollable"
            scrollButtons="auto"
          >
            {sections.map((section, index) => (
              <Tab
                key={section}
                label={`~/${section}`}
                icon={<Folder sx={{ fontSize: "1rem" }} />}
                iconPosition="start"
              />
            ))}
          </Tabs>
        </Paper>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box mb={4}>{renderCurrentSection()}</Box>

          {/* Terminal Interface */}
          <Box mt={6}>
            <Paper sx={{ p: 3, backgroundColor: "rgba(26,26,26,0.8)" }}>
              <Typography variant="h3" color="warning.main" gutterBottom>
                Terminal
              </Typography>

              {/* Command History */}
              <Box
                sx={{
                  maxHeight: "300px",
                  overflowY: "auto",
                  mb: 2,
                  "&::-webkit-scrollbar": {
                    width: "8px",
                  },
                  "&::-webkit-scrollbar-track": {
                    background: "#1a1a1a",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#333",
                    borderRadius: "4px",
                  },
                }}
              >
                {commandHistory.map((entry, index) => (
                  <Box key={index} mb={2}>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography color="secondary.main" variant="body2">
                        daniel@portfolio:~$
                      </Typography>
                      <Typography color="text.primary" variant="body2">
                        {entry.command}
                      </Typography>
                    </Box>
                    <Typography
                      color="primary.main"
                      component="pre"
                      variant="body2"
                      sx={{
                        ml: 3,
                        whiteSpace: "pre-wrap",
                        fontFamily: "monospace",
                      }}
                    >
                      {entry.output}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Command Input */}
              <Box display="flex" alignItems="center" gap={1}>
                <Typography color="secondary.main" variant="body2">
                  daniel@portfolio:~$
                </Typography>
                <TextField
                  fullWidth
                  variant="standard"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyPress={handleCommandSubmit}
                  placeholder="Type 'help' for commands..."
                  autoComplete="off"
                  InputProps={{
                    disableUnderline: true,
                    style: {
                      fontFamily: "monospace",
                      fontSize: "0.9rem",
                    },
                  }}
                  sx={{
                    "& input": {
                      color: "#00ff41",
                    },
                  }}
                />
                <Typography
                  color="text.primary"
                  sx={{
                    opacity: showCursor ? 1 : 0,
                    transition: "opacity 0.1s",
                  }}
                >
                  █
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Container>

        {/* Footer */}
        <Box
          component="footer"
          sx={{
            mt: 8,
            py: 3,
            backgroundColor: "#1a1a1a",
            borderTop: "1px solid #333",
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © 2024 Daniel John Almirante | Built with React & Material-UI
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Try typing commands in the terminal!
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default MainView;

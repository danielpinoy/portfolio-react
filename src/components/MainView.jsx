import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Highlight, themes } from "prism-react-renderer";
// Removed figlet import - using custom ASCII art instead
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
  Terminal,
  Code,
  Storage,
  Web,
} from "@mui/icons-material";

// Terminal-themed MUI theme
const terminalTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00ff41", // Matrix green
      light: "#4ade80",
      dark: "#16a34a",
    },
    secondary: {
      main: "#06b6d4", // Cyan
      light: "#22d3ee",
      dark: "#0891b2",
    },
    warning: {
      main: "#fbbf24", // Yellow
    },
    background: {
      default: "#0a0a0a", // Deep black
      paper: "#1a1a1a", // Dark gray
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
      fontSize: "2rem",
      fontWeight: 700,
      color: "#00ff41",
    },
    h2: {
      fontFamily: '"Fira Code", monospace',
      fontSize: "1.5rem",
      fontWeight: 600,
      color: "#06b6d4",
    },
    body1: {
      fontFamily: '"Fira Code", monospace',
      fontSize: "0.9rem",
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#1a1a1a",
          border: "1px solid #333",
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
  const [asciiArt, setAsciiArt] = useState("");

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
    "cd about": "Navigate to about section",
    "cd skills": "Navigate to skills section",
    "cd projects": "Navigate to projects section",
    "cd contact": "Navigate to contact section",
    "cd ~": "Go back to home",
    whoami: "Display user info",
    clear: "Clear terminal",
    "cat resume.pdf": "Download resume",
  };

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    let output = "";

    switch (trimmedCmd) {
      case "help":
        output = Object.entries(commands)
          .map(([cmd, desc]) => `${cmd.padEnd(15)} - ${desc}`)
          .join("\n");
        break;
      case "ls":
        output = "about/    skills/    projects/    contact/    resume.pdf";
        break;
      case "cd about":
        setCurrentSection(1);
        output = "Navigating to about section...";
        break;
      case "cd skills":
        setCurrentSection(2);
        output = "Navigating to skills section...";
        break;
      case "cd projects":
        setCurrentSection(3);
        output = "Navigating to projects section...";
        break;
      case "cd contact":
        setCurrentSection(4);
        output = "Navigating to contact section...";
        break;
      case "cd ~":
        setCurrentSection(0);
        output = "Returning to home directory...";
        break;
      case "whoami":
        output =
          "daniel-john-almirante\\nFull Stack Developer\\nLocation: ~/portfolio";
        break;
      case "clear":
        setCommandHistory([]);
        return;
      case "cat resume.pdf":
        output = "Opening resume... (Download would trigger here)";
        break;
      default:
        output = `Command not found: ${cmd}\\nType 'help' for available commands.`;
    }

    setCommandHistory((prev) => [...prev, { command: cmd, output }]);
  };

  const handleCommandSubmit = (e) => {
    if (e.key === "Enter" && currentCommand.trim()) {
      executeCommand(currentCommand);
      setCurrentCommand("");
    }
  };

  const skillsData = [
    { name: "React", level: 90, color: "#61DAFB", icon: <Web /> },
    { name: "Node.js", level: 85, color: "#68A063", icon: <Code /> },
    { name: "JavaScript", level: 80, color: "#F7DF1E", icon: <Code /> },
    { name: "MongoDB", level: 75, color: "#4DB33D", icon: <Storage /> },
    { name: "Express", level: 85, color: "#ffffff", icon: <Code /> },
    { name: "TypeScript", level: 70, color: "#007ACC", icon: <Code /> },
    { name: "Angular", level: 75, color: "#DD0031", icon: <Web /> },
    { name: "Firebase", level: 80, color: "#FFCA28", icon: <Storage /> },
  ];

  const projectsData = [
    {
      name: "ChatBox",
      description: "Real-time messaging app with React Native",
      tech: ["React Native", "Firebase", "Expo"],
      status: "deployed",
      lastCommit: "2 days ago",
      github: "https://github.com/danielpinoy/ChatRoom",
    },
    {
      name: "MeetApp",
      description: "Serverless PWA with Google Calendar API",
      tech: ["React", "TDD", "Google API"],
      status: "deployed",
      lastCommit: "1 week ago",
      github: "https://github.com/danielpinoy/meet",
    },
    {
      name: "RetroFlix",
      description: "Historical movies web application",
      tech: ["React", "Redux", "MongoDB"],
      status: "deployed",
      lastCommit: "3 days ago",
      github: "https://github.com/danielpinoy/historic-movies-client",
    },
    {
      name: "MyFlix",
      description: "Angular movie app with user management",
      tech: ["Angular", "Material UI", "TypeScript"],
      status: "deployed",
      lastCommit: "5 days ago",
      github: "https://github.com/danielpinoy/myFlixClient",
    },
  ];

  const HomeSection = () => (
    <Box>
      <Box mb={4}>
        <Typography
          component="pre"
          sx={{
            fontSize: "0.5rem",
            color: "primary.main",
            lineHeight: 1.1,
            overflow: "auto",
            fontFamily: "monospace",
          }}
        >
          {asciiArt}
        </Typography>
      </Box>

      <Box mb={4}>
        <Typography variant="h2" color="secondary.main"></Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h3" color="warning.main" gutterBottom>
              $ cat status.txt
            </Typography>
            <Stack spacing={1}>
              <Typography color="primary.main">
                Status: Available for work
              </Typography>
              <Typography color="primary.main">
                Location: Nicosia, Cyprus
              </Typography>
              <Typography color="primary.main">Experience: 2+ years</Typography>
              <Typography color="primary.main">
                Last activity: Just now
              </Typography>
            </Stack>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, height: "100%" }}>
            <Typography variant="h3" color="warning.main" gutterBottom>
              $ ls -la quick_stats/
            </Typography>
            <Stack spacing={1}>
              <Typography color="primary.main">total 4 projects</Typography>
              <Typography color="primary.main">
                drwxr-xr-x 2 daniel react_apps/
              </Typography>
              <Typography color="primary.main">
                drwxr-xr-x 2 daniel node_apps/
              </Typography>
              <Typography color="primary.main">
                drwxr-xr-x 2 daniel angular_apps/
              </Typography>
              <Typography color="primary.main">
                -rw-r--r-- 1 daniel resume.pdf
              </Typography>
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

      <Paper sx={{ p: 4 }}>
        <Typography variant="h2" color="warning.main" gutterBottom>
          # About Me
        </Typography>
        <Typography color="text.primary" paragraph>
          I'm a Full Stack Developer specializing in creating user-friendly and
          responsive web applications. With 2+ years of experience in frontend
          development and a passion for clean, efficient code.
        </Typography>

        <Typography variant="h3" color="warning.main" sx={{ mt: 3, mb: 2 }}>
          ## Education
        </Typography>
        <Typography color="text.primary">
          • Entertainment and Multimedia Computing (Undergraduate)
        </Typography>

        <Typography variant="h3" color="warning.main" sx={{ mt: 3, mb: 2 }}>
          ## Interests
        </Typography>
        <Typography color="text.primary">
          • Video Games 🎮
          <br />
          • Fitness & Gym 💪
          <br />
          • Cloud Computing ☁️
          <br />• Open Source Contributing 🔧
        </Typography>
      </Paper>
    </Box>
  );

  const SkillsSection = () => (
    <Box>
      <Typography variant="h1" color="secondary.main" gutterBottom>
        $ ./skills --list --verbose
      </Typography>

      <Stack spacing={3}>
        {skillsData.map((skill, index) => (
          <Box key={skill.name}>
            <Paper sx={{ p: 2 }}>
              <Box display="flex" alignItems="center" mb={2}>
                <Box sx={{ color: skill.color, mr: 2 }}>{skill.icon}</Box>
                <Typography variant="h3" sx={{ minWidth: 120 }}>
                  {skill.name}
                </Typography>
                <Box flexGrow={1} mx={2}>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
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
          </Box>
        ))}
      </Stack>

      <Box mt={4}>
        <Paper sx={{ p: 3 }}>
          <Typography variant="h3" color="warning.main" gutterBottom>
            $ cat tech_stack.json
          </Typography>
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
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre className={className} style={style}>
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
        </Paper>
      </Box>
    </Box>
  );

  const ProjectsSection = () => (
    <Box>
      <Typography variant="h1" color="secondary.main" gutterBottom>
        $ git log --oneline --graph
      </Typography>

      <Stack spacing={3}>
        {projectsData.map((project, index) => (
          <Box key={project.name}>
            <Card
              sx={{
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 8px 25px rgba(0,255,65,0.15)",
                },
              }}
            >
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="start"
                  mb={2}
                >
                  <Box>
                    <Typography variant="h2" color="warning.main" gutterBottom>
                      📁 {project.name}
                    </Typography>
                    <Typography color="text.primary">
                      {project.description}
                    </Typography>
                  </Box>
                  <Chip
                    label={project.status}
                    color={
                      project.status === "deployed" ? "success" : "warning"
                    }
                    size="small"
                  />
                </Box>

                <Box display="flex" flexWrap="wrap" gap={1} mb={2}>
                  {project.tech.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      size="small"
                      sx={{
                        backgroundColor: "rgba(6,182,212,0.1)",
                        color: "secondary.main",
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

                <Box display="flex" gap={2}>
                  <Button
                    variant="outlined"
                    color="primary"
                    size="small"
                    startIcon={<Launch />}
                  >
                    View Details
                  </Button>
                  <IconButton
                    color="secondary"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHub />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
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
            <Stack spacing={3}>
              <Box display="flex" alignItems="center" gap={2}>
                <Email color="warning" />
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

              <Divider />

              <Box display="flex" alignItems="center" gap={2}>
                <LinkedIn color="warning" />
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
                    linkedin.com/in/daniel-john-almirante
                  </Link>
                </Box>
              </Box>

              <Divider />

              <Box display="flex" alignItems="center" gap={2}>
                <GitHub color="warning" />
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
          <Paper sx={{ p: 3, height: "fit-content" }}>
            <Typography variant="h3" color="warning.main" gutterBottom>
              $ ping status
            </Typography>
            <Stack spacing={1}>
              <Typography color="primary.main">
                PING danieljohn.portfolio (127.0.0.1)
              </Typography>
              <Typography color="primary.main">
                64 bytes from danieljohn: icmp_seq=1 ttl=64 time=0.1ms
              </Typography>
              <Typography color="primary.main">
                🟢 Available for new opportunities
              </Typography>
              <Typography color="primary.main">
                🟢 Open to remote work
              </Typography>
              <Typography color="primary.main">
                🟢 Ready to collaborate
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );

  const renderCurrentSection = () => {
    switch (currentSection) {
      case 1:
        return <AboutSection />;
      case 2:
        return <SkillsSection />;
      case 3:
        return <ProjectsSection />;
      case 4:
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
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
          }}
        >
          <Box display="flex" gap={1}>
            <Box
              sx={{
                width: 12,
                height: 12,
                backgroundColor: "#ff5f57",
                borderRadius: "50%",
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                backgroundColor: "#ffbd2e",
                borderRadius: "50%",
              }}
            />
            <Box
              sx={{
                width: 12,
                height: 12,
                backgroundColor: "#28ca42",
                borderRadius: "50%",
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
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons="auto"
          >
            {sections.map((section, index) => (
              <Tab key={section} label={section} />
            ))}
          </Tabs>
        </Paper>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box>{renderCurrentSection()}</Box>

          {/* Command History */}
          <Box mt={6}>
            {commandHistory.map((entry, index) => (
              <Box key={index} mb={1}>
                <Box display="flex" alignItems="center" gap={1}>
                  <Typography color="secondary.main">
                    daniel@portfolio:~$
                  </Typography>
                  <Typography color="text.primary">{entry.command}</Typography>
                </Box>
                <Typography
                  color="primary.main"
                  component="pre"
                  sx={{
                    ml: 3,
                    whiteSpace: "pre-wrap",
                    fontFamily: "monospace",
                  }}
                >
                  {entry.output.replace(/\\n/g, "\n")}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Command Input */}
          <Box mt={3}>
            <Paper sx={{ p: 2, backgroundColor: "rgba(42,42,42,0.5)" }}>
              <Box display="flex" alignItems="center" gap={1}>
                <Typography color="secondary.main">
                  daniel@portfolio:~$
                </Typography>
                <TextField
                  fullWidth
                  variant="standard"
                  value={currentCommand}
                  onChange={(e) => setCurrentCommand(e.target.value)}
                  onKeyPress={handleCommandSubmit}
                  placeholder="Type 'help' for commands..."
                  autoFocus
                  InputProps={{
                    disableUnderline: true,
                    style: { fontFamily: "monospace" },
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
      </Box>
    </ThemeProvider>
  );
};

export default MainView;

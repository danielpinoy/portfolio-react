import React from "react";
import { useTerminal } from "../hooks/useTerminal";
import TerminalSections from "./TerminalSections";
import CaseStudyView from "./casestudyview/CaseStudyView"; // Fixed path
import "./Terminal.css";
import {
  Box,
  Paper,
  Container,
  Typography,
  TextField,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import {
  Home,
  Person,
  Psychology,
  Code,
  ContactMail,
  Folder,
} from "@mui/icons-material";

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

// Terminal Header
const TerminalHeader = ({ location }) => (
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
          backgroundColor: "#ff5f57",
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
          backgroundColor: "#ffbd2e",
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
          backgroundColor: "#28ca42",
          borderRadius: "50%",
          cursor: "pointer",
          transition: "all 0.2s",
          "&:hover": { transform: "scale(1.1)" },
        }}
      />
    </Box>
    <Typography variant="caption" color="text.secondary" sx={{ ml: 2 }}>
      daniel@portfolio: ~/{location}
    </Typography>
  </Paper>
);

// Terminal Tabs
const TerminalTabs = ({
  sections,
  currentSection,
  setCurrentSection,
  showCaseStudy,
}) => {
  if (showCaseStudy) return null;

  const getSectionIcon = (section, index) => {
    const iconMap = {
      home: <Home sx={{ fontSize: "1rem" }} />,
      about: <Person sx={{ fontSize: "1rem" }} />,
      skills: <Psychology sx={{ fontSize: "1rem" }} />,
      projects: <Code sx={{ fontSize: "1rem" }} />,
      contact: <ContactMail sx={{ fontSize: "1rem" }} />,
    };
    return iconMap[section] || <Folder sx={{ fontSize: "1rem" }} />;
  };

  return (
    <Paper
      square
      sx={{
        backgroundColor: "#2a2a2a",
        borderBottom: "1px solid #444",
        display: "flex",
        overflowX: "auto",
      }}
    >
      {sections.map((section, index) => (
        <Box
          key={section}
          component="button"
          onClick={() => setCurrentSection(index)}
          sx={{
            background:
              index === currentSection
                ? "linear-gradient(135deg, rgba(0,255,65,0.15) 0%, rgba(6,182,212,0.15) 100%)"
                : "transparent",
            border: "none",
            color: index === currentSection ? "#00ff41" : "#888",
            padding: "0.75rem 1.5rem",
            fontFamily: "inherit",
            fontSize: "0.9rem",
            cursor: "pointer",
            transition: "all 0.3s ease",
            borderBottom:
              index === currentSection
                ? "3px solid #00ff41"
                : "3px solid transparent",
            borderTop:
              index === currentSection
                ? "1px solid rgba(0,255,65,0.3)"
                : "1px solid transparent",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            position: "relative",
            "&:hover": {
              color: index === currentSection ? "#00ff41" : "#06b6d4",
              backgroundColor:
                index === currentSection
                  ? "linear-gradient(135deg, rgba(0,255,65,0.2) 0%, rgba(6,182,212,0.2) 100%)"
                  : "rgba(6,182,212,0.1)",
              borderTopColor: "rgba(6,182,212,0.5)",
            },
            "&::before":
              index === currentSection
                ? {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background:
                      "linear-gradient(90deg, #00ff41 0%, #06b6d4 100%)",
                  }
                : {},
          }}
        >
          {getSectionIcon(section, index)}
          ~/{section}
        </Box>
      ))}
    </Paper>
  );
};

// Terminal Prompt
const TerminalPrompt = ({
  commandHistory,
  currentCommand,
  setCurrentCommand,
  handleCommandSubmit,
  showCursor,
}) => (
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
);

// Main Terminal Component
const Terminal = () => {
  const terminal = useTerminal();

  const {
    currentSection,
    showCaseStudy,
    commandHistory,
    currentCommand,
    showCursor,
    sections,
    setCurrentSection,
    setCurrentCommand,
    handleCommandSubmit,
    goBack,
    getCurrentLocation,
  } = terminal;

  return (
    <ThemeProvider theme={terminalTheme}>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
        <TerminalHeader location={getCurrentLocation()} />

        <TerminalTabs
          sections={sections}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          showCaseStudy={showCaseStudy}
        />

        <Container maxWidth="lg" sx={{ py: 4 }}>
          {showCaseStudy ? (
            <Box>
              <Typography variant="h1" color="secondary.main" gutterBottom>
                $ cat case_study_retroflix.pdf
              </Typography>
              <CaseStudyView />
              <Box mt={2}>
                <Box
                  component="button"
                  onClick={goBack}
                  sx={{
                    background: "transparent",
                    border: "1px solid #00ff41",
                    color: "#00ff41",
                    padding: "0.5rem 1rem",
                    fontFamily: "inherit",
                    cursor: "pointer",
                    borderRadius: 1,
                    "&:hover": {
                      backgroundColor: "rgba(0, 255, 65, 0.1)",
                    },
                  }}
                >
                  ← Back to Projects
                </Box>
              </Box>
            </Box>
          ) : (
            <TerminalSections
              currentSection={currentSection}
              terminal={terminal}
            />
          )}

          <TerminalPrompt
            commandHistory={commandHistory}
            currentCommand={currentCommand}
            setCurrentCommand={setCurrentCommand}
            handleCommandSubmit={handleCommandSubmit}
            showCursor={showCursor}
          />
        </Container>

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

export default Terminal;

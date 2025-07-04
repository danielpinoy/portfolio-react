import { useState, useEffect } from "react";

export const useTerminal = () => {
  // Navigation state
  const [currentSection, setCurrentSection] = useState(0);
  const [showCaseStudy, setShowCaseStudy] = useState(false);

  // Terminal state
  const [commandHistory, setCommandHistory] = useState([]);
  const [currentCommand, setCurrentCommand] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [typingText, setTypingText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const sections = ["home", "about", "skills", "projects", "contact"];

  // Typing effect
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

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  // Commands
  const commands = {
    help: "Show available commands",
    ls: "List available sections",
    "cd <section>": "Navigate to section",
    "cd ~": "Go back to home",
    whoami: "Display developer info",
    clear: "Clear terminal history",
    github: "Open GitHub profile",
    linkedin: "Open LinkedIn profile",
    casestudy: "View RetroFlix case study",
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
        setShowCaseStudy(false);
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
    } else if (trimmedCmd === "github") {
      window.open("https://github.com/danielpinoy", "_blank");
      output = "Opening GitHub profile in new tab...";
    } else if (trimmedCmd === "linkedin") {
      window.open(
        "https://www.linkedin.com/in/daniel-john-almirante-b42782301/",
        "_blank"
      );
      output = "Opening LinkedIn profile in new tab...";
    } else if (trimmedCmd === "casestudy") {
      setShowCaseStudy(true);
      output = "Opening RetroFlix case study...";
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

  const goBack = () => {
    setShowCaseStudy(false);
  };

  const getCurrentLocation = () => {
    if (showCaseStudy) return "casestudy/retroflix";
    return sections[currentSection];
  };

  return {
    // State
    currentSection,
    showCaseStudy,
    commandHistory,
    currentCommand,
    showCursor,
    typingText,
    isTyping,
    sections,

    // Actions
    setCurrentSection,
    setShowCaseStudy,
    setCurrentCommand,
    executeCommand,
    handleCommandSubmit,
    goBack,
    getCurrentLocation,
  };
};

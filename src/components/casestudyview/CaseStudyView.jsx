import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  IconButton,
  Grid,
  Chip,
  Card,
  CardContent,
  Button,
  Stack,
} from "@mui/material";
import {
  NavigateBefore,
  NavigateNext,
  Fullscreen,
  Close,
  ArrowBack,
} from "@mui/icons-material";

// Mock case study images - replace with your actual imports
const caseStudyImages = [
  "https://via.placeholder.com/800x600/1a1a1a/00ff41?text=Case+Study+Page+1",
  "https://via.placeholder.com/800x600/1a1a1a/00ff41?text=Case+Study+Page+2",
  "https://via.placeholder.com/800x600/1a1a1a/00ff41?text=Case+Study+Page+3",
  "https://via.placeholder.com/800x600/1a1a1a/00ff41?text=Case+Study+Page+4",
  "https://via.placeholder.com/800x600/1a1a1a/00ff41?text=Case+Study+Page+5",
];

const TerminalCaseStudyView = ({ onBack }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Simulate loading progress
  useEffect(() => {
    const timer = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [currentIndex]);

  useEffect(() => {
    setLoadingProgress(0);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? caseStudyImages.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === caseStudyImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyPress = (e) => {
    if (e.key === "ArrowLeft") goToPrevious();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "Escape") setIsFullscreen(false);
  };

  useEffect(() => {
    if (isFullscreen) {
      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
    }
  }, [isFullscreen]);

  const FullscreenViewer = () => (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.95)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Close button */}
      <IconButton
        onClick={() => setIsFullscreen(false)}
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          color: "#00ff41",
          backgroundColor: "rgba(0,255,65,0.1)",
          "&:hover": { backgroundColor: "rgba(0,255,65,0.2)" },
        }}
      >
        <Close />
      </IconButton>

      {/* Navigation */}
      <IconButton
        onClick={goToPrevious}
        sx={{
          position: "absolute",
          left: 20,
          color: "#00ff41",
          backgroundColor: "rgba(0,0,0,0.7)",
          "&:hover": { backgroundColor: "rgba(0,255,65,0.2)" },
        }}
      >
        <NavigateBefore sx={{ fontSize: "2rem" }} />
      </IconButton>

      <IconButton
        onClick={goToNext}
        sx={{
          position: "absolute",
          right: 20,
          color: "#00ff41",
          backgroundColor: "rgba(0,0,0,0.7)",
          "&:hover": { backgroundColor: "rgba(0,255,65,0.2)" },
        }}
      >
        <NavigateNext sx={{ fontSize: "2rem" }} />
      </IconButton>

      {/* Main image */}
      <Box
        component="img"
        src={caseStudyImages[currentIndex]}
        alt={`Case Study Page ${currentIndex + 1}`}
        sx={{
          maxWidth: "90vw",
          maxHeight: "90vh",
          objectFit: "contain",
          border: "2px solid #00ff41",
          boxShadow: "0 0 50px rgba(0,255,65,0.3)",
        }}
      />

      {/* Page indicator */}
      <Box
        sx={{
          position: "absolute",
          bottom: 20,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 1,
        }}
      >
        {caseStudyImages.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              backgroundColor: index === currentIndex ? "#00ff41" : "#333",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": { backgroundColor: "#06b6d4" },
            }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Box>
    </Box>
  );

  return (
    <Box>
      {/* Terminal Header */}
      <Box display="flex" alignItems="center" gap={2} mb={3}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<ArrowBack />}
          onClick={onBack}
          sx={{
            borderColor: "#00ff41",
            color: "#00ff41",
            "&:hover": {
              borderColor: "#06b6d4",
              backgroundColor: "rgba(6,182,212,0.1)",
            },
          }}
        >
          cd ../projects
        </Button>
        <Typography variant="h1" color="secondary.main">
          $ cat case_study_retroflix.pdf
        </Typography>
      </Box>

      {/* Terminal Status Bar */}
      <Paper sx={{ p: 2, mb: 3, backgroundColor: "#2a2a2a" }}>
        <Grid container alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography color="primary.main" variant="body2">
              📄 RetroFlix Case Study Documentation
            </Typography>
            <Typography color="text.secondary" variant="caption">
              Page {currentIndex + 1} of {caseStudyImages.length} | PDF Viewer
              Mode
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box display="flex" alignItems="center" gap={2}>
              <Typography color="primary.main" variant="caption">
                Loading: {loadingProgress}%
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  height: 6,
                  backgroundColor: "#333",
                  borderRadius: 3,
                  overflow: "hidden",
                }}
              >
                <Box
                  sx={{
                    width: `${loadingProgress}%`,
                    height: "100%",
                    backgroundColor: "#00ff41",
                    transition: "width 0.1s ease",
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>

      {/* Main Viewer */}
      <Grid container spacing={3}>
        {/* Main Image Display */}
        <Grid item xs={12} md={8}>
          <Paper
            sx={{
              p: 2,
              backgroundColor: "#1a1a1a",
              border: "1px solid #333",
              position: "relative",
            }}
          >
            {/* Image Container */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: "800px",
                margin: "0 auto",
                border: "2px solid #00ff41",
                borderRadius: 1,
                overflow: "hidden",
                boxShadow: "0 0 30px rgba(0,255,65,0.2)",
              }}
            >
              <Box
                component="img"
                src={caseStudyImages[currentIndex]}
                alt={`Case Study Page ${currentIndex + 1}`}
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  maxHeight: "600px",
                  objectFit: "contain",
                  backgroundColor: "#000",
                }}
              />

              {/* Navigation Overlay */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: 2,
                  opacity: 0,
                  transition: "opacity 0.3s ease",
                  "&:hover": { opacity: 1 },
                }}
              >
                <IconButton
                  onClick={goToPrevious}
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.7)",
                    color: "#00ff41",
                    "&:hover": { backgroundColor: "rgba(0,255,65,0.2)" },
                  }}
                >
                  <NavigateBefore />
                </IconButton>

                <IconButton
                  onClick={() => setIsFullscreen(true)}
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.7)",
                    color: "#00ff41",
                    "&:hover": { backgroundColor: "rgba(0,255,65,0.2)" },
                  }}
                >
                  <Fullscreen />
                </IconButton>

                <IconButton
                  onClick={goToNext}
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.7)",
                    color: "#00ff41",
                    "&:hover": { backgroundColor: "rgba(0,255,65,0.2)" },
                  }}
                >
                  <NavigateNext />
                </IconButton>
              </Box>
            </Box>

            {/* Terminal-style navigation buttons */}
            <Box display="flex" justifyContent="center" gap={2} mt={2}>
              <Button
                variant="outlined"
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  borderColor: "#333",
                  color: "#00ff41",
                  "&:hover": { borderColor: "#00ff41" },
                  "&:disabled": { color: "#666", borderColor: "#333" },
                }}
              >
                ← prev
              </Button>
              <Typography
                color="primary.main"
                sx={{
                  alignSelf: "center",
                  fontFamily: "monospace",
                  fontSize: "0.9rem",
                }}
              >
                {currentIndex + 1}/{caseStudyImages.length}
              </Typography>
              <Button
                variant="outlined"
                onClick={goToNext}
                disabled={currentIndex === caseStudyImages.length - 1}
                sx={{
                  fontFamily: "monospace",
                  fontSize: "0.8rem",
                  borderColor: "#333",
                  color: "#00ff41",
                  "&:hover": { borderColor: "#00ff41" },
                  "&:disabled": { color: "#666", borderColor: "#333" },
                }}
              >
                next →
              </Button>
            </Box>
          </Paper>
        </Grid>

        {/* Side Panel */}
        <Grid item xs={12} md={4}>
          <Stack spacing={3}>
            {/* Document Info */}
            <Card sx={{ backgroundColor: "#2a2a2a" }}>
              <CardContent>
                <Typography variant="h3" color="warning.main" gutterBottom>
                  $ file info
                </Typography>
                <Stack spacing={1}>
                  <Typography color="primary.main" variant="body2">
                    <span style={{ color: "#06b6d4" }}>Title:</span> RetroFlix
                    Case Study
                  </Typography>
                  <Typography color="primary.main" variant="body2">
                    <span style={{ color: "#06b6d4" }}>Type:</span> PDF Document
                  </Typography>
                  <Typography color="primary.main" variant="body2">
                    <span style={{ color: "#06b6d4" }}>Pages:</span>{" "}
                    {caseStudyImages.length}
                  </Typography>
                  <Typography color="primary.main" variant="body2">
                    <span style={{ color: "#06b6d4" }}>Size:</span> 2.4 MB
                  </Typography>
                  <Typography color="primary.main" variant="body2">
                    <span style={{ color: "#06b6d4" }}>Created:</span>{" "}
                    2024-01-15
                  </Typography>
                </Stack>
              </CardContent>
            </Card>

            {/* Thumbnail Navigation */}
            <Card sx={{ backgroundColor: "#2a2a2a" }}>
              <CardContent>
                <Typography variant="h3" color="warning.main" gutterBottom>
                  $ ls pages/
                </Typography>
                <Grid container spacing={1}>
                  {caseStudyImages.map((image, index) => (
                    <Grid item xs={6} sm={4} md={6} key={index}>
                      <Box
                        onClick={() => setCurrentIndex(index)}
                        sx={{
                          cursor: "pointer",
                          border:
                            index === currentIndex
                              ? "2px solid #00ff41"
                              : "2px solid #333",
                          borderRadius: 1,
                          overflow: "hidden",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            border: "2px solid #06b6d4",
                            transform: "scale(1.05)",
                          },
                        }}
                      >
                        <Box
                          component="img"
                          src={image}
                          alt={`Page ${index + 1}`}
                          sx={{
                            width: "100%",
                            height: "60px",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                        <Box
                          sx={{
                            p: 0.5,
                            backgroundColor:
                              index === currentIndex
                                ? "rgba(0,255,65,0.1)"
                                : "#1a1a1a",
                            textAlign: "center",
                          }}
                        >
                          <Typography
                            variant="caption"
                            color={
                              index === currentIndex
                                ? "primary.main"
                                : "text.secondary"
                            }
                            sx={{ fontFamily: "monospace" }}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>

            {/* Keyboard Shortcuts */}
            <Card sx={{ backgroundColor: "#2a2a2a" }}>
              <CardContent>
                <Typography variant="h3" color="warning.main" gutterBottom>
                  $ man controls
                </Typography>
                <Stack spacing={1}>
                  <Box display="flex" justifyContent="space-between">
                    <Chip
                      label="← →"
                      size="small"
                      sx={{ backgroundColor: "#333", color: "#00ff41" }}
                    />
                    <Typography color="text.secondary" variant="caption">
                      Navigate
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Chip
                      label="F"
                      size="small"
                      sx={{ backgroundColor: "#333", color: "#00ff41" }}
                    />
                    <Typography color="text.secondary" variant="caption">
                      Fullscreen
                    </Typography>
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Chip
                      label="ESC"
                      size="small"
                      sx={{ backgroundColor: "#333", color: "#00ff41" }}
                    />
                    <Typography color="text.secondary" variant="caption">
                      Exit Fullscreen
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          </Stack>
        </Grid>
      </Grid>

      {/* Fullscreen Viewer */}
      {isFullscreen && <FullscreenViewer />}
    </Box>
  );
};

export default TerminalCaseStudyView;

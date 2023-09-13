import { useEffect } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Logo from "./images/logo.png";
import "./Loader.css";
import gsap from "gsap";

const Loader = () => {
  useEffect(() => {
    const tween3 = new gsap.timeline();

    const loaderBackground = document.querySelectorAll(".loader");

    tween3
      .add(
        gsap.to(".logo-letter", {
          opacity: 0,
          y: -40,
          delay: 1.25,
          stagger: {
            each: 0.02,
          },
          ease: "power1.inOut", // Use string for easing
        })
      )
      .add(
        gsap.to(loaderBackground, {
          y: "120vh",
          height: 0,
          duration: 2,
          delay: 0,
        })
      );
  }, []);

  return (
    <Container
      className="container loader"
      maxWidth="xl" // You can adjust the maximum width as needed
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
      >
        <div data-aos="fade-in">
          <div>
            <img src={Logo} className="logo-l" alt="logo" />
          </div>
          <div>
            <Typography
              component="a"
              href="logo"
              className="logo-text-loader"
              variant="h5"
            >
              {/* Use Typography for text */}
              <span className="logo-letter">A</span>
              <span className="logo-letter">U</span>
              <span className="logo-letter">T</span>
              <span className="logo-letter">O</span>
              <span className="logo-letter">C</span>
              <span className="logo-letter">A</span>
              <span className="logo-letter">R</span>
              <span className="logo-letter">E</span>
            </Typography>
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default Loader;

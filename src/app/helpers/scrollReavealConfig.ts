import ScrollReveal from "scrollreveal";

export const initScrollReveal = () => {
  ScrollReveal().reveal(".reveal", {
    origin: "bottom",
    distance: "40px",
    duration: 500,
    delay: 200,
    easing: "ease-out",
    interval: 200,
    reset: false,
  });
};

/*
 ********************** COMO UTILIZAR *************************
 *
 *import { initScrollReveal } from "./scrollRevealConfig";
 *
 *useEffect(() => {
 *  initScrollReveal();
 *}, []);
 *
 *
 *
 *Site oficial: https://scrollrevealjs.org
 *GitHub: https://github.com/jlmakes/scrollreveal
 *
 *npm install scrollreveal
 *npm install --save-dev @types/scrollreveal */

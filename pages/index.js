import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Welcome from "./welcome";
import Worked from "./worked";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Welcome />
      <About />
      <Projects />
      <Worked />
      <Contact />
    </div>
  )
}

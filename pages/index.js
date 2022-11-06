import About from "./about";
import Contact from "./contact";
import Projects from "./projects";
import Welcome from "./welcome";
import Worked from "./worked";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
          <title>Trevor McLaurine</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Welcome />
      <About />
      <Projects />
      <Worked />
      <Contact />
    </div>
  )
}

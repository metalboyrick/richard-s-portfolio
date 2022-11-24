import Head from 'next/head';

import Navigation from '@/components/Navigation';
import DarkThemeToggler from '@/components/DarkThemeToggler';
import Sidebar from '@/components/Sidebar';

import Cover from '@/sections/Cover';
import About from '@/sections/About';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Richard Sulisthio - Portfolio</title>
        <meta name="description" content="Front end Developer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Sidebar />

      <Cover/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>

      <DarkThemeToggler />
    </div>
  )
}

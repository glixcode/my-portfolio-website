import { siteConfig } from './data/siteConfig';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Achievements from './components/Achievements';
import ContributionGraph from './components/ContributionGraph';
import ExperienceSection from './components/ExperienceSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar links={siteConfig.navLinks} />

      <main>
        <Hero
          name={siteConfig.name}
          role={siteConfig.role}
          introduction={siteConfig.introduction}
          avatarUrl={siteConfig.avatarUrl}
          socialLinks={siteConfig.socialLinks}
        />

        <About text={siteConfig.aboutText} skills={siteConfig.skills} />

        <ExperienceSection experiences={siteConfig.experience} />

        <Achievements achievements={siteConfig.achievements} />

        <ContributionGraph />

        <Contact socialLinks={siteConfig.socialLinks} />
      </main>

      <Footer />
    </>
  );
}

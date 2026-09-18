import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { WhatIWorkWithSection } from './sections/WhatIWorkWithSection';
import { AboutSection } from './sections/AboutSection';
import { SkillsSection } from './sections/SkillsSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { AutomationPipelineSection } from './sections/AutomationPipelineSection';
import { JourneySection } from './sections/JourneySection';
import { ContactSection } from './sections/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col selection:bg-cyan-500/25 selection:text-cyan-200">
      {/* Floating Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Interactive 3D Canvas */}
        <HeroSection />

        {/* 3 Core Pillars: Data, Development, Security */}
        <WhatIWorkWithSection />

        {/* About & Academic Background */}
        <AboutSection />

        {/* Interactive Skills Categorization */}
        <SkillsSection />

        {/* Featured Projects & Simulator */}
        <ProjectsSection />

        {/* Interactive Pipeline: From Data to Automation */}
        <AutomationPipelineSection />

        {/* Learning Journey Vertical Roadmap */}
        <JourneySection />

        {/* Actionable Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

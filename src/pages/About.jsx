
import AboutHero from "../Components/About/AboutHero";
import MissionVision from "../Components/About/MissionVision";
import WhyChooseUs from "../Components/About/WhyChooseUs";
import AboutCTA from "../Components/About/AboutCTA";

const About = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content">

      {/* Hero Section */}
      <AboutHero />

      {/* Mission,vision part here */}

      <MissionVision />

      {/* Why Choose Us */}
      <WhyChooseUs />


      {/* Call to Action */}

      <AboutCTA />

    </div>
  );
};

export default About;
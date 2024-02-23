import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CardSection from "../components/CardSection";
import OurTeam from "../components/OurTeam";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <CardSection />
      <OurTeam></OurTeam>
    </div>
  );
}

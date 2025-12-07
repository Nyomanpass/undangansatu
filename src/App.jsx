import React, { useState } from "react";
import Opening from "./components/Opening";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./components/Hero";
import Mempelai from "./components/Mempelai";
import OmSwastyastu from "./components/OmSwastyastu";
import WeddingStory from "./components/WeddingStory";
import EventDetails from "./components/EventDetails";
import LocationMap from "./components/LocationMap";
import Gallery from "./components/Gallery";
import Gifts from "./components/Gifts";
import WishesForm from "./components/WishesForm";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-black text-gray-100 antialiased">
      {!isOpen ? (
        <Opening onOpen={() => setIsOpen(true)} />
      ) : (
        <>
          <MusicPlayer isOpen={isOpen} />
          <Hero />
          <main className="max-w-3xl mx-auto px-6">
            <OmSwastyastu />
            <Mempelai />
            <WeddingStory />
            <EventDetails />
            <Countdown />
            <LocationMap />
            <Gifts />
            <Gallery />
            <WishesForm />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;

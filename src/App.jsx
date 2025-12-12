import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Opening from "./components/Opening";
import MusicPlayer from "./components/MusicPlayer";
import Hero from "./components/Hero";
import Mempelai from "./components/Mempelai";
import OmSwastyastu from "./components/OmSwastyastu";
import WeddingStory from "./components/WeddingStory";
import EventDetails from "./components/EventDetails";
import LocationMap from "./components/LocationMap";
import Gallery from "./components/GallerySection";
import Gifts from "./components/Gifts";
import WishesForm from "./components/WishesForm";
import Footer from "./components/Footer";
import Countdown from "./components/Countdown";
import GenerateLink from "./components/GenerateLink";
import { useState } from "react";


function WeddingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="text-gray-100 antialiased bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url('/latarbelakang.jpg')`,
      }}
    >
      {!isOpen ? (
        <Opening onOpen={() => setIsOpen(true)} />
      ) : (
        <>
          <MusicPlayer isOpen={isOpen} />
          <Hero />
          <main className="max-w-8xl mx-auto ">
            <OmSwastyastu />
            <Mempelai />
            <WeddingStory />
            <EventDetails />
            <Countdown />
            <LocationMap />
            <Gallery />
            <Gifts />
            <WishesForm />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        {/* URL akan menjadi parasvisual.com/wedding */}
        <Route path="/wedding/toing&nia" element={<WeddingPage />} />
        <Route path="/wedding/generate-link" element={<GenerateLink />} />  
      </Routes>
    </Router>
  );
}



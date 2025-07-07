import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Screenshots from './components/Screenshots';
import Content from './components/Content';
import Functions from './components/Functions';
import Feedback from './components/Feedback';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Header />
      <Hero />
      <Features />
      <Screenshots />
      <Content />
      <Functions />
      <Feedback />
      <Footer />
    </div>
  );
}

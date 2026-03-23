"use client";

import { Mail, Phone, MapPin, Menu, X, Send, MessageCircle } from 'lucide-react';

interface BusinessInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  logoURL: string;
}

interface BrandColors {
  primary: string;
  secondary: string;
  accent1: string;
  accent2: string;
}

interface Content {
  language: string;
  aboutUs: string;
  vision: string;
  mission: string;
  aboutImages: string[];
  productsServices: string[];
}

interface Social {
  facebook: string;
  instagram: string;
  whatsapp: string;
}

const businessInfo: BusinessInfo = {
  name: "$json[\"Business Name\"]",
  email: "$json[\"Business Email\"]",
  phone: "$json[\"Business Phone\"]",
  address: "$json[\"Business Address\"]",
  logoURL: "$json[\"Logo URL\"]",
};

const brandColors: BrandColors = {
  primary: "$json[\"Primary Color\"]",
  secondary: "$json[\"Secondary Color\"]",
  accent1: "$json[\"Accent Color 1\"]",
  accent2: "$json[\"Accent Color 2\"]",
};

const content: Content = {
  language: "$json[\"Language\"]",
  aboutUs: "$json[\"About Us\"]",
  vision: "$json[\"Vision\"]",
  mission: "$json[\"Mission\"]",
  aboutImages: ["$json[\"About Us Images (3 URLs, one per line)\"]"].join('').split('\n'),
  productsServices: ["$json[\"Products/Services (5 items: Name | Description | ImageURL per line)\"]"].join('').split('\n'),
};

const social: Social = {
  facebook: "$json[\"Facebook URL\"]",
  instagram: "$json[\"Instagram URL\"]",
  whatsapp: "$json[\"WhatsApp Number\"]",
};

function Navbar() {
  return (
    <nav className="bg-white shadow-md py-2 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <img src={businessInfo.logoURL} alt={businessInfo.name} className="h-10" />
        <button className="lg:hidden">
          <Menu size={24} />
        </button>
        <ul className="hidden lg:flex items-center space-x-4">
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#products">Products/Services</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="bg-primary h-screen flex items-center justify-center" style={{ backgroundColor: brandColors.primary }}>
      <h1 className="text-5xl text-white font-bold">{businessInfo.name}</h1>
    </section>
  );
}

function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">{content.aboutUs}</h2>
        <div className="flex flex-wrap justify-center mb-8">
          {content.aboutImages.map((image, index) => (
            <img key={index} src={image} alt={`About Us Image ${index + 1}`} className="h-64 w-64 object-cover mx-4 mb-4" />
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-2">Vision</h3>
        <p className="mb-4">{content.vision}</p>
        <h3 className="text-2xl font-bold mb-2">Mission</h3>
        <p>{content.mission}</p>
      </div>
    </section>
  );
}

function ProductsServices() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Products/Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {content.productsServices.map((product, index) => {
            const [name, description, imageUrl] = product.split(' | ');
            return (
              <div key={index} className="bg-white shadow-md p-4">
                <img src={imageUrl} alt={name} className="h-48 w-full object-cover mb-4" />
                <h3 className="text-2xl font-bold mb-2">{name}</h3>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message" />
          </div>
          <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded" type="submit">
            <Send size={20} className="mr-2" />
            Send
          </button>
        </form>
        <div className="mt-8">
          <p>
            <Mail size={20} className="mr-2" />
            {businessInfo.email}
          </p>
          <p>
            <Phone size={20} className="mr-2" />
            {businessInfo.phone}
          </p>
          <p>
            <MapPin size={20} className="mr-2" />
            {businessInfo.address}
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-white p-4" style={{ backgroundColor: brandColors.primary }}>
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; {businessInfo.name}</p>
        <ul className="flex items-center space-x-4">
          <li>
            <a href={social.facebook} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={24} />
            </a>
          </li>
          <li>
            <a href={social.instagram} target="_blank" rel="noopener noreferrer">
              <MessageCircle size={24} />
            </a>
          </li>
          {social.whatsapp && (
            <li>
              <a href={`https://wa.me/${social.whatsapp}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={24} />
              </a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  if (social.whatsapp) {
    return (
      <a href={`https://wa.me/${social.whatsapp}`} target="_blank" rel="noopener noreferrer" className="fixed bottom-0 right-0 mb-4 mr-4 bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded" style={{ backgroundColor: brandColors.primary }}>
        <MessageCircle size={20} className="mr-2" />
        WhatsApp
      </a>
    );
  }
  return null;
}

export default function Page() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <ProductsServices />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
import React, { useState } from 'react';
import { 
  Phone, 
  MapPin, 
  HeartPulse, 
  ShieldPlus, 
  Activity, 
  Users, 
  Baby, 
  UserCheck,  
  ArrowRight,
  Mail,
  CalendarDays,

} from 'lucide-react';
import Header from './components/header';
import Slider from './components/silder';
import Marque from './components/marque';
import InfoBar from './components/info-bars';
import About from './components/about';
import ServiceGrid from './components/service-grid';


const SERVICES = [
  { icon: <Users size={32} />, title: "Family Medicine", desc: "TIC provides high-quality healthcare for all ages, with a dedicated medical team offering comprehensive primary care." },
  { icon: <HeartPulse size={32} />, title: "Women's Health", desc: "We provide breast and cervical cancer screenings, family planning, menopause support, weight management, and antenatal care." },
  { icon: <Baby size={32} />, title: "Children's Health", desc: "Our team ensures a safe environment and delivers precise, personalized treatment plans for your child's well-being." },
  { icon: <UserCheck size={32} />, title: "Men's Health", desc: "We address common men's health concerns, including prostate and urinary issues, hormonal changes, and weight management." },
  { icon: <Activity size={32} />, title: "Chronic Disease Management", desc: "We offer preventive care and chronic disease management for patients at risk of heart disease, stroke, diabetes, and asthma." },
  { icon: <ShieldPlus size={32} />, title: "Physical Therapy", desc: "Physical therapy helps restore movement and function through hands-on techniques and targeted exercises." },
];

const DOCTORS = [
  { name: "Dr. Inom Tashmatov", exp: "30+ experience", role: "Family physician specializing in urgent care, outpatient surgical procedures and diagnostic ultrasound.", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Dr. Eldar Rakhimov", exp: "40+ years of experience", role: "Specializes in surgery, urology, trauma, emergency medicine, pediatrics, general medicine.", img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
  { name: "Dr. Dmitriy Khegay", exp: "20+ years of experience", role: "Specialist in Internal Medicine, GP, Functional Diagnostic in Cardiology.", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
];

const PACKAGES = [
  { title: "Basic health check-up for men", desc: "This check-up is designed to assess overall wellness and detect early signs of common health issues.", target: "Men" },
  { title: "Basic health check-up for women", desc: "This package is designed to support early detection and prevention of common health issues in women.", target: "Women" },
  { title: "Complete health check-up for men", desc: "This is a thorough and wide-ranging medical assessment and includes multiple specialist consultations, diagnostic imaging, and comprehensive laboratory tests.", target: "Men" }
];

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-blue-600 selection:text-white">
      {/* Top Bar Marquee */}
      <Marque/>

      {/* Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen}/>
      </header>

      {/* Hero Slider */}
      <section className="relative h-150 bg-gray-900 overflow-hidden">
        <Slider/>
      </section>

      {/* Quick Info Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-40">
        <InfoBar/>
      </section>

      {/* Why Choose Us & Departments */}
      <section className="py-20 bg-gray-50">
        <About/>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <ServiceGrid/>
      </section>

      {/* Stats Section */}

    </div>
  );
}
import Header from "./components/header";
import Slider from "./components/silder";
import Marque from "./components/marque";
import InfoBar from "./components/info-bars";
import About from "./components/about";
import ServiceGrid from "./components/service-grid";
import Stats from "./components/stats";
import Doctors from "./components/doctors";
import Packages from "./components/packages";
import NewsBlogs from "./components/news-blogs";
import Partners from "./components/partners";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-blue-600 selection:text-white">
      <Marque />
      <Header />
      <Slider />
      <InfoBar />
      <About />
      <ServiceGrid />
      <Stats />
      <Doctors />
      <Packages />
      <NewsBlogs />
      <Partners />
      <Footer />
    </div>
  );
}

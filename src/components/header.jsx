import { 
  Menu,
  X,
  CalendarDays,
  Globe2,
} from 'lucide-react';

function Header({isMobileMenuOpen,setIsMobileMenuOpen}) {
  return <>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="shrink-0 flex items-center cursor-pointer gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                TIC
              </div>
              <span className="font-bold text-xl text-blue-900 leading-tight hidden sm:block">
                Tashkent<br/>International Clinic
              </span>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex space-x-6 items-center">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About us</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Services</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Partners</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">News</a>
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contacts</a>
              
              <div className="border-l border-gray-300 h-6 mx-2"></div>
              
              <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
                <CalendarDays size={18} />
                Book Appointment
              </button>
              <button className="text-gray-600 hover:text-blue-600 font-medium transition-colors flex items-center gap-1">
                <Globe2 size={18} /> EN
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md">About us</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md">Services</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md">Partners</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md">News</a>
              <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md">Contacts</a>
              <div className="pt-4 mt-2 border-t border-gray-200">
                <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors">
                  <CalendarDays size={18} />
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        )}
  </>;
}

export default Header;

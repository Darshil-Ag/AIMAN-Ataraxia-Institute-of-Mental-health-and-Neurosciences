import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Heart, Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import newLogo from '../photo/new_logo.jpg'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  // Function to scroll to top and navigate
  const handleLinkClick = (path) => {
    // Instant scroll to top - no delay
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    navigate(path)
  }

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/our-services' },
    { name: 'Experts', path: '/our-experts' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Appointment', path: '/appointment' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    { name: '24/7 Emergency Mental Health Service', path: '/services/emergency-mental-health' },
    { name: 'OPD Service', path: '/services/opd-services' },
    { name: 'IPD Service', path: '/services/ipd-services' },
    { name: 'De-addiction & Rehabilitation Service', path: '/services/deaddiction-rehab' },
    { name: 'Child & Adolescent Service', path: '/services/child-adolescent' },
    { name: 'Women\'s Mental Health Service', path: '/services/womens-mental-health' },
    { name: 'Geriatric Mental Health Service', path: '/services/geriatric-mental-health' },
    { name: 'Clinical Psychology Service', path: '/services/clinical-psychology' },
    { name: 'Neurology Service', path: '/services/neurology' },
    { name: 'Sexual Wellness Service', path: '/services/sexual-wellness' },
    { name: 'Home Visit Service', path: '/services/home-visit' },
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/775732765631920', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/aiman_healthcare', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-800 text-white relative overflow-hidden">
      <div className="container-custom px-0">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-10">
          {/* Column 1: Big Logo */}
          <div className="flex flex-col items-center justify-start">
            <div className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <img src={newLogo} alt="AIMAN Logo" className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </div>

          {/* Column 2: Hospital Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
              Ataraxia Institute of Mental health and Neurosciences
            </h3>
            <p className="text-white font-bold text-sm sm:text-base leading-relaxed mb-4">
              Mental Health For All
            </p>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              "At AIMAN, we don't just provide treatment. We provide hope. We provide a voice. We provide a safe space. Most importantly, we provide healing."
            </p>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold border-b border-white/30 pb-2 text-white">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link.path)}
                    className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Specialties Services */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold border-b border-white/30 pb-2 text-white">Our Specialties</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => handleLinkClick('/services/neurology')}
                  className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  Neurology Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/services/opd-services')}
                  className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  OPD Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/services/ipd-services')}
                  className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  IPD Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/services/emergency-mental-health')}
                  className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  24/7 Emergency Mental Health Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/services/deaddiction-rehab')}
                  className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  De-addiction and Rehabilitation Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick('/services/clinical-psychology')}
                  className="text-white/80 hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer text-left text-sm sm:text-base block w-full py-1"
                >
                  Clinical Psychology and Therapy Services
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact Info */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold border-b border-white/30 pb-2 text-white">Contact Info</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <div>
                  <a href = "https://www.google.com/maps/place/AIMAN+-+Ataraxia+Institute+of+Mental+Health+%26+Neurosciences/@28.4385731,77.0511214,17z/data=!3m1!4b1!4m6!3m5!1s0x390d194351c6b57b:0x18d58b3633d7a68c!8m2!3d28.4385684!4d77.0536963!16s%2Fg%2F11xz8c6t7z?entry=tts&g_ep=EgoyMDI1MTAxMi4wIPu8ASoASAFQAw%3D%3D&skid=d3bffdf1-7ee6-450d-8ad0-2264aac7c73b" className="text-white/80 text-sm sm:text-base break-words hover:text-white transition-colors">
                  83P , Residency Green, Sector 46, Main Sector Road <br />
                  Gurgaon, Haryana 122003
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <div>
                  <a href="tel:+918800833411" className="text-white/80 text-sm sm:text-base hover:text-white transition-colors">
                    +91 88008 33411
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:info@aimanhealth.com" className="text-white/80 text-sm sm:text-base hover:text-white transition-colors break-all">
                  info@aimanhealth.com
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/70 text-xs sm:text-sm text-center md:text-left">
              © {currentYear} AIMAN Hospital. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <button
                onClick={() => handleLinkClick('/privacy-policy')}
                className="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => handleLinkClick('/terms-of-service')}
                className="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                onClick={() => handleLinkClick('/sitemap')}
                className="text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                Sitemap
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

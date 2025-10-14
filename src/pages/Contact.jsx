import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaLinkedin } from "react-icons/fa";
import ApexLogo from "../assets/images/logos/MA Icon.png";
import Events from "../assets/images/logos/MEP LOGO white.png";
import Academy from "../assets/images/logos/MAE LOGO White.png";

export default function Contact() {

  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-4 sm:left-10 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 rounded-full opacity-10 animate-float" style={{backgroundColor: 'var(--color-accent)'}}></div>
        <div className="absolute top-60 sm:top-96 right-8 sm:right-20 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 rounded-full opacity-8 animate-float-delay" style={{backgroundColor: 'var(--color-highlight)'}}></div>
        <div className="absolute bottom-40 left-10 sm:left-1/4 w-24 sm:w-32 lg:w-40 h-24 sm:h-32 lg:h-40 rounded-full opacity-6 animate-float" style={{backgroundColor: 'var(--color-secondary)'}}></div>
        <div className="absolute top-1/2 right-4 sm:right-10 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 rounded-full opacity-12 animate-float-delay" style={{backgroundColor: 'var(--color-accent-light)'}}></div>
      </div>

      {/* Hero Section with Geometric Overlay */}
      <section className="relative py-16 sm:py-24 lg:py-32 flex flex-col items-center text-center px-4 sm:px-6 overflow-hidden" style={{backgroundColor: 'var(--color-gray-900)'}}>
        

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--overlay-accent-1)] to-transparent opacity-30 animate-pulse-warm"></div>
        
        <div className="relative z-10">
          <div className="mb-6 sm:mb-8 inline-block">
            <div className="w-16 sm:w-20 lg:w-24 h-1 mx-auto mb-3 sm:mb-4 animate-glow" style={{backgroundColor: 'var(--color-highlight)'}}></div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 sm:mb-6 tracking-tight" style={{color: 'var(--color-white)'}}>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300">Get</span>{" "}
            <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-100" style={{color: 'var(--color-highlight)'}}>in</span>{" "}
            <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-200">Touch</span>
          </h1>
          
          <div className="relative">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-2" style={{color: 'var(--color-gray-200)'}}>
              Ready to elevate your business? From unforgettable events to cutting-edge digital solutions 
              and professional training - we're here to help bring your vision to life.
            </p>
            
            {/* Decorative Elements */}
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-6 sm:w-8 h-6 sm:h-8 border-l-2 border-t-2 opacity-60 animate-pulse-warm" style={{borderColor: 'var(--color-accent)'}}></div>
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-6 sm:w-8 h-6 sm:h-8 border-r-2 border-b-2 opacity-60 animate-pulse-warm" style={{borderColor: 'var(--color-highlight)'}}></div>
          </div>
        </div>
      </section>



      {/* Contact Information Section */}
      <section className="max-w-7xl mx-auto pb-12 sm:pb-16 lg:pb-24 px-4 sm:px-6 pt-8 sm:pt-12 lg:pt-15">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          
          {/* Contact Information Card */}
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl transform rotate-3 opacity-20 animate-float" style={{backgroundColor: 'var(--color-accent)'}}></div>
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl transform -rotate-2 opacity-15 animate-float-delay" style={{backgroundColor: 'var(--color-highlight)'}}></div>
            
            <div className="relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-sm" style={{backgroundColor: 'var(--color-white)', boxShadow: 'var(--shadow-card-hover)'}}>
              
              {/* Header with Icon */}
              <div className="flex items-center mb-6 sm:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mr-3 sm:mr-4 animate-glow" style={{backgroundColor: 'var(--color-accent)'}}>
                  <FaEnvelope className="text-xl sm:text-2xl text-white" />
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold" style={{color: 'var(--color-primary)'}}>
                  Contact Information
                </h2>
              </div>
              
              <p className="text-base sm:text-lg mb-6 sm:mb-8 lg:mb-10 leading-relaxed" style={{color: 'var(--color-secondary)'}}>
                Ready to discuss your project? Whether you need event coordination, digital solutions, or professional training, we're here to help bring your vision to life.
              </p>

              {/* Contact Details */}
              <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                {[
                  { icon: FaEnvelope, text: "apex.motivista@gmail.com", label: "Email", color: 'var(--color-accent)' },
                  { icon: FaPhone, text: "+94 77 900 2420", label: "Phone", color: 'var(--color-highlight)' },
                  { icon: FaMapMarkerAlt, text: "Colombo, Sri Lanka", label: "Location", color: 'var(--color-secondary)' }
                ].map((item, index) => (
                  <div key={index} className="group flex items-center p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105" style={{backgroundColor: 'var(--color-gray-50)'}}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center mr-4 sm:mr-6 group-hover:animate-pulse-warm transition-all duration-300 flex-shrink-0" style={{backgroundColor: item.color}}>
                      <item.icon className="text-base sm:text-lg lg:text-xl text-white" />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm font-semibold mb-0.5 sm:mb-1" style={{color: 'var(--color-secondary)'}}>
                        {item.label}
                      </p>
                      <p className="text-sm sm:text-base lg:text-lg font-medium break-all" style={{color: 'var(--color-primary)'}}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>



              {/* Social Media */}
              <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8" style={{borderTop: '2px solid var(--color-gray-200)'}}>
                <p className="text-base sm:text-lg font-semibold mb-4 sm:mb-6" style={{color: 'var(--color-primary)'}}>
                  Connect With Us
                </p>
                <div className="flex gap-4 sm:gap-6">
                  {[
                    { icon: FaFacebook, href: "https://www.facebook.com", color: 'var(--color-accent)' },
                    { icon: FaLinkedin, href: "https://www.linkedin.com", color: 'var(--color-highlight)' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                      style={{backgroundColor: social.color}}
                    >
                      <social.icon className="text-lg sm:text-xl text-white group-hover:scale-125 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{color: 'var(--color-primary)'}}>
                Why Choose 
                <span className="block mt-2" style={{color: 'var(--color-accent)'}}>
                  Our Services?
                </span>
              </h2>
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed" style={{color: 'var(--color-secondary)'}}>
                Three specialized divisions, one unified commitment to excellence.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="space-y-4 sm:space-y-6">
              {[
                {
                  icon: "🏆",
                  title: "Expert Teams",
                  description: "Specialized professionals in events, technology, and education with years of industry experience.",
                  color: "var(--color-accent)"
                },
                {
                  icon: "⚡",
                  title: "Integrated Solutions",
                  description: "Seamless collaboration between our divisions to provide comprehensive business solutions.",
                  color: "var(--color-highlight)"
                },
                {
                  icon: "💎",
                  title: "Premium Quality",
                  description: "Uncompromising attention to detail and commitment to delivering exceptional results.",
                  color: "var(--color-secondary)"
                },
                {
                  icon: "🎯",
                  title: "Tailored Approach",
                  description: "Custom solutions designed specifically for your unique business needs and objectives.",
                  color: "var(--color-accent-light)"
                }
              ].map((benefit, index) => (
                <div key={index} className="group flex items-start p-4 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105" style={{backgroundColor: 'var(--color-white)', boxShadow: 'var(--shadow-card)'}}>
                  <div className="text-3xl sm:text-4xl mr-4 sm:mr-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{color: 'var(--color-primary)'}}>
                      {benefit.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed" style={{color: 'var(--color-secondary)'}}>
                      {benefit.description}
                    </p>
                    <div className="w-10 sm:w-12 h-1 mt-2 sm:mt-3 animate-glow" style={{backgroundColor: benefit.color}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative py-12 sm:py-16 lg:py-24 px-4 sm:px-6 overflow-hidden" style={{backgroundColor: 'var(--color-primary)'}}>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent animate-pulse-warm"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8" style={{color: 'var(--color-white)'}}>
            Ready to Transform Your
            <span className="block mt-2" style={{color: 'var(--color-highlight)'}}>
              Business Vision?
            </span>
          </h3>
          
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed opacity-90 px-2" style={{color: 'var(--color-gray-200)'}}>
            Whether you're planning an unforgettable event, need cutting-edge digital solutions, or want to enhance your team's skills through professional training - we're here to make it happen.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-10 lg:mb-12">
            {[
              { icon: ApexLogo, title: "Digital Excellence", subtitle: "Technology solutions that drive growth" },
              { icon: Events, title: "Events That Inspire", subtitle: "Memorable experiences crafted with precision" },
              { icon: Academy, title: "Skills That Matter", subtitle: "Professional development that transforms careers" }
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <img 
                  src={item.icon} 
                  alt={item.title}
                  className="h-16 sm:h-20 mb-3 sm:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                />
                <h4 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2" style={{color: 'var(--color-white)'}}>
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm opacity-80" style={{color: 'var(--color-gray-300)'}}>
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Action */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 inline-block max-w-full">
            <p className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4" style={{color: 'var(--color-highlight)'}}>
              Let's Start the Conversation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <a 
                href="mailto:apex.motivista@gmail.com"
                className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{backgroundColor: 'var(--color-accent)', color: 'var(--color-white)'}}
              >
                <FaEnvelope className="text-base sm:text-lg" />
                Email Us Now
              </a>
              <a 
                href="tel:+94779002420"
                className="w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg transition-all duration-300 hover:scale-105 border-2"
                style={{borderColor: 'var(--color-highlight)', color: 'var(--color-highlight)'}}
              >
                <FaPhone className="text-base sm:text-lg" />
                Call Today
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-4 sm:space-x-8 opacity-30">
          <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 rounded-full animate-pulse-warm" style={{backgroundColor: 'var(--color-accent)'}}></div>
          <div className="w-12 sm:w-16 lg:w-20 h-1 animate-glow" style={{backgroundColor: 'var(--color-highlight)'}}></div>
          <div className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 rounded-full animate-float" style={{backgroundColor: 'var(--color-secondary)'}}></div>
          <div className="w-12 sm:w-16 lg:w-20 h-1 animate-glow" style={{backgroundColor: 'var(--color-highlight)'}}></div>
          <div className="w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 rounded-full animate-pulse-warm" style={{backgroundColor: 'var(--color-accent)'}}></div>
        </div>
      </section>
    </div>
  );
}
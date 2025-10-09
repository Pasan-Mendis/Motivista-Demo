import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Contact() {

  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 rounded-full opacity-10 animate-float" style={{backgroundColor: 'var(--color-accent)'}}></div>
        <div className="absolute top-96 right-20 w-24 h-24 rounded-full opacity-8 animate-float-delay" style={{backgroundColor: 'var(--color-highlight)'}}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 rounded-full opacity-6 animate-float" style={{backgroundColor: 'var(--color-secondary)'}}></div>
        <div className="absolute top-1/2 right-10 w-16 h-16 rounded-full opacity-12 animate-float-delay" style={{backgroundColor: 'var(--color-accent-light)'}}></div>
      </div>

      {/* Hero Section with Geometric Overlay */}
      <section className="relative py-32 flex flex-col items-center text-center px-6 overflow-hidden" style={{backgroundColor: 'var(--color-gray-900)'}}>
        

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--overlay-accent-1)] to-transparent opacity-30 animate-pulse-warm"></div>
        
        <div className="relative z-10">
          <div className="mb-8 inline-block">
            <div className="w-24 h-1 mx-auto mb-4 animate-glow" style={{backgroundColor: 'var(--color-highlight)'}}></div>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight" style={{color: 'var(--color-white)'}}>
            <span className="inline-block transform hover:scale-110 transition-transform duration-300">Get</span>{" "}
            <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-100" style={{color: 'var(--color-highlight)'}}>in</span>{" "}
            <span className="inline-block transform hover:scale-110 transition-transform duration-300 delay-200">Touch</span>
          </h1>
          
          <div className="relative">
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed" style={{color: 'var(--color-gray-200)'}}>
              Ready to elevate your business? From unforgettable events to cutting-edge digital solutions 
              and professional training - we're here to help bring your vision to life.
            </p>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 opacity-60 animate-pulse-warm" style={{borderColor: 'var(--color-accent)'}}></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 opacity-60 animate-pulse-warm" style={{borderColor: 'var(--color-highlight)'}}></div>
          </div>
        </div>
      </section>



      {/* Contact Information Section */}
      <section className="max-w-7xl mx-auto pb-24 px-6 pt-15">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Information Card */}
          <div className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 rounded-3xl transform rotate-3 opacity-20 animate-float" style={{backgroundColor: 'var(--color-accent)'}}></div>
            <div className="absolute inset-0 rounded-3xl transform -rotate-2 opacity-15 animate-float-delay" style={{backgroundColor: 'var(--color-highlight)'}}></div>
            
            <div className="relative rounded-3xl p-10 shadow-2xl backdrop-blur-sm" style={{backgroundColor: 'var(--color-white)', boxShadow: 'var(--shadow-card-hover)'}}>
              
              {/* Header with Icon */}
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4 animate-glow" style={{backgroundColor: 'var(--color-accent)'}}>
                  <FaEnvelope className="text-2xl text-white" />
                </div>
                <h2 className="text-4xl font-bold" style={{color: 'var(--color-primary)'}}>
                  Contact Information
                </h2>
              </div>
              
              <p className="text-lg mb-10 leading-relaxed" style={{color: 'var(--color-secondary)'}}>
                Ready to discuss your project? Whether you need event coordination, digital solutions, or professional training, we're here to help bring your vision to life.
              </p>

              {/* Contact Details */}
              <div className="space-y-8">
                {[
                  { icon: FaEnvelope, text: "apex.motivista@gmail.com", label: "Email", color: 'var(--color-accent)' },
                  { icon: FaPhone, text: "+94 77 900 2420", label: "Phone", color: 'var(--color-highlight)' },
                  { icon: FaMapMarkerAlt, text: "Colombo, Sri Lanka", label: "Location", color: 'var(--color-secondary)' }
                ].map((item, index) => (
                  <div key={index} className="group flex items-center p-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105" style={{backgroundColor: 'var(--color-gray-50)'}}>
                    <div className="w-14 h-14 rounded-full flex items-center justify-center mr-6 group-hover:animate-pulse-warm transition-all duration-300" style={{backgroundColor: item.color}}>
                      <item.icon className="text-xl text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1" style={{color: 'var(--color-secondary)'}}>
                        {item.label}
                      </p>
                      <p className="text-lg font-medium" style={{color: 'var(--color-primary)'}}>
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>



              {/* Social Media */}
              <div className="mt-12 pt-8" style={{borderTop: '2px solid var(--color-gray-200)'}}>
                <p className="text-lg font-semibold mb-6" style={{color: 'var(--color-primary)'}}>
                  Connect With Us
                </p>
                <div className="flex gap-6">
                  {[
                    { icon: FaFacebook, href: "https://www.facebook.com", color: 'var(--color-accent)' },
                    { icon: FaLinkedin, href: "https://www.linkedin.com", color: 'var(--color-highlight)' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                      style={{backgroundColor: social.color}}
                    >
                      <social.icon className="text-xl text-white group-hover:scale-125 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl font-bold mb-6" style={{color: 'var(--color-primary)'}}>
                Why Choose 
                <span className="block mt-2" style={{color: 'var(--color-accent)'}}>
                  Our Services?
                </span>
              </h2>
              <p className="text-xl leading-relaxed" style={{color: 'var(--color-secondary)'}}>
                Three specialized divisions, one unified commitment to excellence.
              </p>
            </div>

            {/* Benefits Cards */}
            <div className="space-y-6">
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
                <div key={index} className="group flex items-start p-6 rounded-2xl transition-all duration-300 hover:shadow-lg hover:transform hover:scale-105" style={{backgroundColor: 'var(--color-white)', boxShadow: 'var(--shadow-card)'}}>
                  <div className="text-4xl mr-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2" style={{color: 'var(--color-primary)'}}>
                      {benefit.title}
                    </h3>
                    <p className="leading-relaxed" style={{color: 'var(--color-secondary)'}}>
                      {benefit.description}
                    </p>
                    <div className="w-12 h-1 mt-3 animate-glow" style={{backgroundColor: benefit.color}}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="relative py-24 px-6 overflow-hidden" style={{backgroundColor: 'var(--color-primary)'}}>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent animate-pulse-warm"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h3 className="text-5xl md:text-6xl font-bold mb-8" style={{color: 'var(--color-white)'}}>
            Ready to Transform Your
            <span className="block mt-2" style={{color: 'var(--color-highlight)'}}>
              Business Vision?
            </span>
          </h3>
          
          <p className="text-xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90" style={{color: 'var(--color-gray-200)'}}>
            Whether you're planning an unforgettable event, need cutting-edge digital solutions, or want to enhance your team's skills through professional training - we're here to make it happen.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: "🎉", title: "Events That Inspire", subtitle: "Memorable experiences crafted with precision" },
              { icon: "💻", title: "Digital Excellence", subtitle: "Technology solutions that drive growth" },
              { icon: "🎓", title: "Skills That Matter", subtitle: "Professional development that transforms careers" }
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-2" style={{color: 'var(--color-white)'}}>
                  {item.title}
                </h4>
                <p className="text-sm opacity-80" style={{color: 'var(--color-gray-300)'}}>
                  {item.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Contact Action */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 inline-block">
            <p className="text-2xl font-semibold mb-4" style={{color: 'var(--color-highlight)'}}>
              Let's Start the Conversation
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="mailto:apex.motivista@gmail.com"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{backgroundColor: 'var(--color-accent)', color: 'var(--color-white)'}}
              >
                <FaEnvelope />
                Email Us Now
              </a>
              <a 
                href="tel:+94779002420"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 border-2"
                style={{borderColor: 'var(--color-highlight)', color: 'var(--color-highlight)'}}
              >
                <FaPhone />
                Call Today
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-8 opacity-30">
          <div className="w-12 h-12 rounded-full animate-pulse-warm" style={{backgroundColor: 'var(--color-accent)'}}></div>
          <div className="w-20 h-1 animate-glow" style={{backgroundColor: 'var(--color-highlight)'}}></div>
          <div className="w-8 h-8 rounded-full animate-float" style={{backgroundColor: 'var(--color-secondary)'}}></div>
          <div className="w-20 h-1 animate-glow" style={{backgroundColor: 'var(--color-highlight)'}}></div>
          <div className="w-12 h-12 rounded-full animate-pulse-warm" style={{backgroundColor: 'var(--color-accent)'}}></div>
        </div>
      </section>
    </div>
  );
}
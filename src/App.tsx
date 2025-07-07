import React from 'react';
import { Phone, Mail, MapPin, FileText, Building, Shield, Calculator, Users, CheckCircle, ArrowRight, Star, TrendingUp, Clock, Award, Zap, Target, Heart } from 'lucide-react';

function App() {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Income Tax Filing",
      description: "Expert ITR filing services for individuals and businesses with maximum refund optimization",
      features: ["Individual ITR", "Business ITR", "Refund Optimization", "Tax Planning"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "GST Registration & Filing",
      description: "Complete GST solutions from registration to monthly filing and compliance",
      features: ["GST Registration", "Monthly Filing", "GST Audit", "Input Credit"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Business Registration",
      description: "End-to-end business registration services for all entity types",
      features: ["Private Limited", "LLP Registration", "Partnership", "Sole Proprietorship"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Trademark & IP Services",
      description: "Protect your brand with comprehensive trademark and intellectual property services",
      features: ["Trademark Registration", "Brand Protection", "IP Consultation", "Legal Support"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "TDS & ROC Filings",
      description: "Complete TDS management and ROC compliance services",
      features: ["TDS Returns", "ROC Filings", "Compliance", "Annual Returns"],
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Accounting Services",
      description: "Professional accounting and bookkeeping services for businesses",
      features: ["Bookkeeping", "Financial Statements", "Audit Support", "Tax Records"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  const targetUsers = [
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "Individuals", 
      description: "Personal tax filing and planning",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    { 
      icon: <Building className="w-8 h-8" />, 
      title: "Business Owners", 
      description: "Complete business compliance",
      bgColor: "bg-green-50",
      iconColor: "text-green-600"
    },
    { 
      icon: <Star className="w-8 h-8" />, 
      title: "Startups", 
      description: "Business setup and registration",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "Tax Professionals", 
      description: "Expert consultation services",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

  const benefits = [
    { icon: <Award className="w-5 h-5" />, text: "Expert tax professionals with 10+ years experience" },
    { icon: <Target className="w-5 h-5" />, text: "100% accurate filing with maximum refund guarantee" },
    { icon: <Shield className="w-5 h-5" />, text: "End-to-end compliance management" },
    { icon: <Clock className="w-5 h-5" />, text: "24/7 customer support and consultation" },
    { icon: <Heart className="w-5 h-5" />, text: "Transparent pricing with no hidden costs" },
    { icon: <Zap className="w-5 h-5" />, text: "Digital document management system" }
  ];

  const stats = [
    { number: "5000+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "10+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "99%", label: "Success Rate", icon: <Target className="w-6 h-6" /> },
    { number: "24/7", label: "Support", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
 import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Disable dark mode by always setting light mode
    document.documentElement.classList.remove('dark');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                  <a href="#" className="hover:text-blue-600 transition-colors">TAXTIC</a>
                  <span className="block text-xs text-gray-500 font-serif italic">Your trusted Tax Buddy</span>
                </h1>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</a>
            </nav>

            {/* Contact & CTA */}
            <div className="flex items-center space-x-4">
              <a href="tel:9789485470" className="hidden sm:flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="text-sm font-semibold">9789485470</span>
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl hover
                
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium text-gray-700">Trusted by 5000+ clients</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Trusted
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 block">Tax & Compliance</span>
                Partner
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Expert tax filing, GST registration, business setup, and complete compliance solutions. 
                Maximize your refunds and minimize your hassles with our professional services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span>Start Your Filing</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                  Free Consultation
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center mx-auto mb-2">
                      <div className="text-blue-600">
                        {stat.icon}
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              {/* Floating Cards */}
              <div className="relative space-y-4">
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300 border border-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Income Tax Filed ✨</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                      </div>
                      <span className="text-gray-700 font-medium">GST Registration Complete 🎉</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Business Registered 🚀</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="text-gray-700 font-medium">Trademark Protected 🛡️</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-2xl p-6 text-white transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3 mb-3">
                    <TrendingUp className="w-6 h-6" />
                    <span className="font-semibold">Tax Savings</span>
                  </div>
                  <div className="text-2xl font-bold">₹2,50,000+</div>
                  <div className="text-blue-100">Average savings per client</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Tax & Compliance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From individual tax filing to complete business compliance, we provide end-to-end solutions 
              tailored to your specific needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300" style={{backgroundImage: `linear-gradient(135deg, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})`}}></div>
                
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              <Users className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Who We Serve</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Tailored Solutions for Everyone
            </h2>
            <p className="text-xl text-gray-600">
              From individuals to enterprises, we have the right solution for your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetUsers.map((user, index) => (
              <div key={index} className={`${user.bgColor} rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white/50`}>
                <div className={`w-16 h-16 ${user.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg border border-white/50`}>
                  <div className={user.iconColor}>
                    {user.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{user.title}</h3>
                <p className="text-gray-600">{user.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-green-50 px-4 py-2 rounded-full mb-6">
                <Award className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">Why Choose Us</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Experience the <span className="relative">
                  <span className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-800 rounded blur-sm opacity-20"></span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-black to-gray-800 font-black">TAXTIC</span>
                </span> Difference
              </h2>
              
              <p className="text-xl text-gray-600 mb-8">
                We combine expertise, technology, and personalized service to deliver exceptional 
                tax and compliance solutions that save you time and money.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="text-green-600">
                        {benefit.icon}
                      </div>
                    </div>
                    <span className="text-gray-700 font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Free Consultation</h3>
                </div>
                <p className="text-gray-600">Comprehensive analysis of your tax situation and personalized recommendations</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Secure Processing</h3>
                </div>
                <p className="text-gray-600">Bank-grade security for document collection and processing with full privacy protection</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Ongoing Support</h3>
                </div>
                <p className="text-gray-600">Continuous compliance monitoring and expert support throughout the year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full mb-4 shadow-sm">
              <Phone className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600">
              Contact us today for a free consultation and let us handle your tax and compliance needs.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600 mb-2">Call us for immediate assistance</p>
                  <a href="tel:9789485470" className="text-blue-600 hover:text-blue-700 font-semibold text-lg">
                    9789485470
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600 mb-2">Send us your queries</p>
                  <a href="mailto:taxtictt@gmail.com" className="text-green-600 hover:text-green-700 font-semibold">
                    taxtictt@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600 mb-2">Visit our office</p>
                  <p className="text-purple-600 font-medium">
                    Parthasarathy Street, SS Colony<br />
                    Madurai - 625003
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="income-tax">Income Tax Filing</option>
                    <option value="gst">GST Registration & Filing</option>
                    <option value="business-registration">Business Registration</option>
                    <option value="trademark">Trademark & IP Services</option>
                    <option value="tds-roc">TDS & ROC Filings</option>
                    <option value="accounting">Accounting Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="mb-4">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-600 via-gray-500 to-gray-700 rounded-lg blur-sm opacity-40"></div>
                  <h3 className="relative text-4xl font-black bg-gradient-to-r from-gray-300 via-white to-gray-400 bg-clip-text text-transparent tracking-tight px-2">
                    TAXTIC
                  </h3>
                </div>
                <p className="text-sm text-gray-400 font-medium mt-1">Tax & Compliance Experts</p>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Your trusted partner for all tax and compliance needs. We provide expert services 
                to individuals, businesses, and tax professionals across India with a commitment to excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">9789485470</span>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800 px-3 py-2 rounded-lg">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span className="text-sm">taxtictt@gmail.com</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">Income Tax Filing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">GST Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">Business Registration</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors hover:translate-x-1 transform inline-block">Trademark Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Contact</h4>
              <div className="space-y-2">
                <p className="text-gray-400">Parthasarathy Street</p>
                <p className="text-gray-400">SS Colony</p>
                <p className="text-gray-400">Madurai - 625003</p>
                <p className="text-gray-400">Tamil Nadu, India</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 <span className="relative">
                <span className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-500 rounded blur-sm opacity-30"></span>
                <span className="relative font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-white">TAXTIC</span>
              </span>. All rights reserved. | Professional Tax & Compliance Services | Made with ❤️ in Madurai
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
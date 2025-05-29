import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Users, Globe, BookOpen, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-brand-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-full h-full">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-white/5 rounded-full"
                  initial={{
                    width: Math.random() * 300 + 100,
                    height: Math.random() * 300 + 100,
                    x: Math.random() * 100 - 50 + '%',
                    y: Math.random() * 100 - 50 + '%',
                    scale: 0
                  }}
                  animate={{
                    scale: [0, 1, 0.8],
                    rotate: [0, 90, 180],
                    opacity: [0, 0.2, 0],
                  }}
                  transition={{
                    duration: Math.random() * 5 + 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>

          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col md:flex-row items-center gap-12"
            >
              <motion.div variants={item} className="md:w-1/2 text-center md:text-left">
                <motion.h1 
                  className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  Connect with Students
                  <span className="block text-brand-200">Around the Globe</span>
                </motion.h1>
                <motion.p 
                  className="text-xl mb-8 text-brand-50 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Join our vibrant community of international students. Share experiences, make friends, and expand your global network.
                </motion.p>
                <motion.div
                  className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button
                    onClick={() => navigate('/countries')}
                    size="lg"
                    className="bg-white text-brand-600 hover:bg-brand-50 group"
                  >
                    <MessageSquare className="mr-2" size={20} />
                    Start Chatting
                    <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" size={20} />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 hover:bg-white/10"
                    onClick={() => navigate('/countries')}
                  >
                    <Globe className="mr-2" size={20} />
                    Explore Communities
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                variants={item} 
                className="md:w-1/2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-400/30 to-purple-400/30 backdrop-blur-sm rounded-xl transform rotate-6"></div>
                  <Card className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-2xl">
                    <CardContent className="space-y-4">
                      {[...Array(3)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.2 }}
                          className="flex items-start space-x-3"
                        >
                          <div className={`w-10 h-10 rounded-full ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-purple-500' : 'bg-green-500'} flex items-center justify-center shadow-lg`}>
                            {String.fromCharCode(65 + i)}
                          </div>
                          <div className="bg-white/20 rounded-lg p-3 flex-grow backdrop-blur-xs">
                            <p className="text-white/90">{getMessageContent(i)}</p>
                            <p className="text-xs text-white/70 mt-1">{getMessageTime(i)}</p>
                          </div>
                        </motion.div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { number: "10K+", label: "Active Students" },
                { number: "50+", label: "Countries" },
                { number: "100K+", label: "Messages Daily" },
                { number: "4.9", label: "User Rating", icon: <Star className="w-4 h-4 text-yellow-300" /> }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-bold mb-1 flex items-center justify-center gap-1">
                    {stat.number}
                    {stat.icon}
                  </div>
                  <div className="text-brand-200">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-24 bg-gradient-to-b from-white to-brand-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose StudentConnect?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience a new way of connecting with fellow students worldwide
              </p>
            </motion.div>
            
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {getFeatures().map((feature, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="group"
                >
                  <Card className="h-full transform transition-all duration-300 hover:shadow-xl border-0 bg-white/50 backdrop-blur-sm">
                    <CardContent className="p-8">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`mb-6 p-4 rounded-2xl ${feature.bgColor} w-16 h-16 flex items-center justify-center`}
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                      <ul className="mt-6 space-y-3">
                        {feature.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-center text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-24 bg-gradient-to-br from-brand-600 to-indigo-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 text-center relative"
          >
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to Connect?</h2>
            <p className="text-xl text-brand-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students already using StudentConnect to make friends, share knowledge, and build a global network.
            </p>
            <Button
              onClick={() => navigate('/countries')}
              size="lg"
              className="bg-white text-brand-600 hover:bg-brand-50 group"
            >
              Start Chatting Now
              <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" size={20} />
            </Button>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

function getMessageContent(index: number): string {
  const messages = [
    "Has anyone joined the University of Greenwich before?",
    "Yes! I've heard the campus life is amazing, but getting used to the coursework can be tough.",
    "I have some great tips and notes from orientation if anyone needs help settling in!"
  ];
  return messages[index];
}

function getMessageTime(index: number): string {
  const times = ["11:42 AM", "11:45 AM", "11:48 AM"];
  return times[index];
}

function getFeatures() {
  return [
    {
      icon: <Globe size={24} className="text-white" />,
      title: "Global Community",
      description: "Connect with students from different countries and cultures around the world.",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      benefits: [
        "Access to international study groups",
        "Cultural exchange opportunities",
        "Global networking events"
      ]
    },
    {
      icon: <Users size={24} className="text-white" />,
      title: "Country-Specific Rooms",
      description: "Find chat rooms dedicated to specific countries to connect with local students.",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      benefits: [
        "Local student communities",
        "Region-specific discussions",
        "Native language support"
      ]
    },
    {
      icon: <BookOpen size={24} className="text-white" />,
      title: "Educational Focus",
      description: "Discuss academics, share resources, and help each other succeed in studies.",
      bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      benefits: [
        "Study material sharing",
        "Homework assistance",
        "Academic discussions"
      ]
    }
  ];
}

export default LandingPage;
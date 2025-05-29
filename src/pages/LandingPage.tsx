import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, Users, Globe, BookOpen } from 'lucide-react';
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
        <section className="relative bg-gradient-to-r from-brand-600 to-indigo-700 text-white py-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 grid grid-cols-6 gap-4 transform -skew-y-12"
          >
            {[...Array(24)].map((_, i) => (
              <div key={i} className="h-40 bg-white/10 rounded-lg"></div>
            ))}
          </motion.div>
          
          <div className="container mx-auto px-4 md:px-6 lg:px-8 relative">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="flex flex-col md:flex-row items-center"
            >
              <motion.div variants={item} className="md:w-1/2 mb-10 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect with Students Worldwide</h1>
                <p className="text-xl mb-8 text-brand-50">Join our global community of students to chat, share ideas, and make new friends.</p>
                <Button
                  onClick={() => navigate('/countries')}
                  size="lg"
                  className="bg-white text-brand-600 hover:bg-brand-50"
                >
                  <MessageSquare className="mr-2" size={20} />
                  Start Chatting
                </Button>
              </motion.div>

              <motion.div variants={item} className="md:w-1/2">
                <Card className="bg-white/10 backdrop-blur-sm p-6 rounded-xl shadow-2xl max-w-md mx-auto">
                  <CardContent className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                        className="flex items-start space-x-3"
                      >
                        <div className={`w-10 h-10 rounded-full ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-purple-500' : 'bg-green-500'} flex items-center justify-center`}>
                          {String.fromCharCode(65 + i)}
                        </div>
                        <div className="bg-white/20 rounded-lg p-3 flex-grow">
                          <p className="text-white/90">{getMessageContent(i)}</p>
                          <p className="text-xs text-white/70 mt-1">{getMessageTime(i)}</p>
                        </div>
                      </motion.div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 text-gray-800"
            >
              Why Choose StudentConnect?
            </motion.h2>
            
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
                  <Card className="h-full transform transition-all duration-300 group-hover:scale-105">
                    <CardContent className="flex flex-col items-center text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className={`mb-4 p-3 rounded-full ${feature.bgColor}`}
                      >
                        {feature.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gray-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="container mx-auto px-4 md:px-6 lg:px-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Connect?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join thousands of students already using StudentConnect to make friends, share knowledge, and build a global network.
            </p>
            <Button
              onClick={() => navigate('/countries')}
              size="lg"
              className="animate-bounce"
            >
              Start Chatting Now
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
    "Has anyone joined the University of Greenwich before?"
    "Yes! I've heard the campus life is amazing, but getting used to the coursework can be tough."
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
      bgColor: "bg-blue-500 text-white"
    },
    {
      icon: <Users size={24} className="text-white" />,
      title: "Country-Specific Rooms",
      description: "Find chat rooms dedicated to specific countries to connect with local students.",
      bgColor: "bg-purple-500 text-white"
    },
    {
      icon: <BookOpen size={24} className="text-white" />,
      title: "Educational Focus",
      description: "Discuss academics, share resources, and help each other succeed in studies.",
      bgColor: "bg-indigo-500 text-white"
    }
  ];
}

export default LandingPage;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogIn, UserPlus, UserRound, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter } from '../components/ui/card';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const ChatAccessType: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-brand-50 to-white py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose How to Access Chat
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select your preferred way to join our global student community
            </p>
          </motion.div>
          
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Login/Signup Option */}
            <motion.div variants={item}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-brand-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <LogIn className="text-brand-600" size={28} />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Login / Sign Up
                  </h2>
                  <p className="text-gray-600 text-center mb-6">
                    Create an account or log in to access all chat features and save your conversations.
                  </p>
                  <div className="flex flex-col gap-3">
                    <Button
                      onClick={() => navigate('/login', { state: { mode: 'login' } })}
                      className="w-full group"
                    >
                      <span className="flex items-center">
                        <LogIn className="mr-2" size={18} />
                        Login
                        <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" size={18} />
                      </span>
                    </Button>
                    <Button
                      onClick={() => navigate('/login', { state: { mode: 'signup' } })}
                      variant="outline"
                      className="w-full group"
                    >
                      <span className="flex items-center">
                        <UserPlus className="mr-2" size={18} />
                        Sign Up
                        <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" size={18} />
                      </span>
                    </Button>
                  </div>
                </CardContent>
                <CardFooter className="bg-brand-50 p-4">
                  <div className="w-full">
                    <h3 className="font-medium text-brand-700 mb-2">Benefits:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mr-2" />
                        Full access to all chat rooms
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mr-2" />
                        Save conversations
                      </li>
                      <li className="flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mr-2" />
                        Personalized experience
                      </li>
                    </ul>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
            
            {/* Guest Access Option */}
            <motion.div variants={item}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <UserRound className="text-purple-600" size={28} />
                  </motion.div>
                  <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
                    Guest Access
                  </h2>
                  <p className="text-gray-600 text-center mb-6">
                    Start chatting immediately without creating an account. Some features may be limited.
                  </p>
                  <Button
                    onClick={() => navigate('/guest-chat')}
                    variant="outline"
                    className="w-full bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100 group"
                  >
                    <span className="flex items-center">
                      <UserRound className="mr-2" size={18} />
                      Continue as Guest
                      <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0" size={18} />
                    </span>
                  </Button>
                </CardContent>
                <CardFooter className="bg-purple-50 p-4">
                  <div className="w-full">
                    <h3 className="font-medium text-purple-700 mb-2">Note:</h3>
                    <p className="text-sm text-gray-600">
                      Read-only access unless you subscribe (Rs. 55/month)
                    </p>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ChatAccessType;
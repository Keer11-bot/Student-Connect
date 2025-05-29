import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

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

const countries = [
  {
    id: 'england',
    name: 'England',
    image: 'https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg',
    flag: 'https://flagcdn.com/w40/gb-eng.png',
    description: 'Connect with students from England'
  },
  {
    id: 'usa',
    name: 'United States',
    image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg',
    flag: 'https://flagcdn.com/w40/us.png',
    description: 'Chat with students across America'
  },
  {
    id: 'india',
    name: 'India',
    image: 'https://images.pexels.com/photos/5169056/pexels-photo-5169056.jpeg',
    flag: 'https://flagcdn.com/w40/in.png',
    description: 'Connect with Indian students'
  },
  {
    id: 'canada',
    name: 'Canada',
    image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg',
    flag: 'https://flagcdn.com/w40/ca.png',
    description: 'Join Canadian student communities'
  },
  {
    id: 'australia',
    name: 'Australia',
    image: 'https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg',
    flag: 'https://flagcdn.com/w40/au.png',
    description: 'Chat with Australian students'
  },
  {
    id: 'germany',
    name: 'Germany',
    image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg',
    flag: 'https://flagcdn.com/w40/de.png',
    description: 'Connect with German students'
  }
];

const CountrySelection: React.FC = () => {
  const navigate = useNavigate();

  const handleChatNow = (countryId: string) => {
    navigate(`/chat-access?country=${countryId}`);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Choose Your Chat Community
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a country to connect with students from around the world
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {countries.map((country) => (
            <motion.div
              key={country.id}
              variants={item}
              className="group"
            >
              <Card className="overflow-hidden h-full transform transition-all duration-300 group-hover:shadow-xl">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <img
                      src={country.flag}
                      alt={`${country.name} flag`}
                      className="absolute top-4 right-4 w-10 h-auto rounded-sm shadow-lg"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {country.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {country.description}
                    </p>
                    <Button
                      onClick={() => handleChatNow(country.id)}
                      className="w-full group"
                    >
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Chat Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default CountrySelection;
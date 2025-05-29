import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface HeaderProps {
  minimal?: boolean;
}

const Header: React.FC<HeaderProps> = ({ minimal = false }) => {
  const navigate = useNavigate();
  
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`bg-dark-800 border-b border-dark-700 sticky top-0 z-50 ${minimal ? 'py-3' : 'py-4'}`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <MessageSquare className="text-brand-400 mr-2 transition-colors" size={minimal ? 24 : 28} />
            <span className={`font-bold text-white transition-colors ${minimal ? 'text-xl' : 'text-2xl'}`}>
              StudentConnect
            </span>
          </motion.div>
        </Link>
        
        {!minimal && (
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Button variant="ghost" size="sm" asChild className="text-dark-200 hover:text-white hover:bg-dark-700">
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" asChild className="text-dark-200 hover:text-white hover:bg-dark-700">
                  <Link to="/countries">Chat</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" asChild className="text-dark-200 hover:text-white hover:bg-dark-700">
                  <a href="#">About</a>
                </Button>
              </li>
              <li>
                <Button variant="ghost" size="sm" asChild className="text-dark-200 hover:text-white hover:bg-dark-700">
                  <a href="#">Contact</a>
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
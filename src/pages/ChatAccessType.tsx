import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { LogIn, UserPlus, UserRound, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';

const ChatAccessType: React.FC = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const countryId = searchParams.get('country');

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-md overflow-hidden"
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 text-center">
            Choose Access Type
          </h2>
          
          <div className="space-y-4">
            {/* Login Option */}
            <button
              onClick={() => navigate('/login', { state: { mode: 'login', countryId } })}
              className="w-full p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <LogIn className="text-blue-600 w-5 h-5" />
                </div>
                <div className="ml-4 text-left">
                  <div className="font-medium text-gray-900">Login</div>
                  <div className="text-sm text-gray-500">Access with your account</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transform translate-x-0 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Sign Up Option */}
            <button
              onClick={() => navigate('/login', { state: { mode: 'signup', countryId } })}
              className="w-full p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <UserPlus className="text-green-600 w-5 h-5" />
                </div>
                <div className="ml-4 text-left">
                  <div className="font-medium text-gray-900">Sign Up</div>
                  <div className="text-sm text-gray-500">Create a new account</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transform translate-x-0 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Guest Option */}
            <button
              onClick={() => navigate('/guest-chat', { state: { countryId } })}
              className="w-full p-4 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-between group"
            >
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <UserRound className="text-purple-600 w-5 h-5" />
                </div>
                <div className="ml-4 text-left">
                  <div className="font-medium text-gray-900">Continue as Guest</div>
                  <div className="text-sm text-gray-500">Limited access (Rs. 55/month for full access)</div>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transform translate-x-0 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 text-center">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-800"
          >
            Cancel
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatAccessType;
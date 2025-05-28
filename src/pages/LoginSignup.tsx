import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { LogIn, UserPlus, ArrowLeft, Eye, EyeOff } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

type LocationState = {
  mode?: 'login' | 'signup';
};

const LoginSignup: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as LocationState;
  
  const [mode, setMode] = useState<'login' | 'signup'>(locationState?.mode || 'login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (locationState?.mode) {
      setMode(locationState.mode);
    }
  }, [locationState]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      navigate('/chat');
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-blue-50 to-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 md:p-8">
              <button 
                onClick={() => navigate('/chat-access')}
                className="flex items-center text-gray-600 hover:text-blue-600 transition mb-6"
              >
                <ArrowLeft size={16} className="mr-1" />
                Back to options
              </button>
              
              <h1 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                {mode === 'login' ? (
                  <>
                    <LogIn className="mr-2 text-blue-600\" size={24} />
                    Login to StudentConnect
                  </>
                ) : (
                  <>
                    <UserPlus className="mr-2 text-indigo-600" size={24} />
                    Create an Account
                  </>
                )}
              </h1>
              
              <form onSubmit={handleSubmit}>
                {mode === 'signup' && (
                  <div className="mb-4">
                    <label htmlFor="name\" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                )}
                
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your password"
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-2 px-4 rounded-md font-medium text-white flex items-center justify-center ${
                    mode === 'login' 
                      ? 'bg-blue-600 hover:bg-blue-700' 
                      : 'bg-indigo-600 hover:bg-indigo-700'
                  } transition duration-300 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {mode === 'login' ? 'Logging in...' : 'Creating account...'}
                    </span>
                  ) : (
                    <>
                      {mode === 'login' ? (
                        <>
                          <LogIn className="mr-2\" size={18} />
                          Login
                        </>
                      ) : (
                        <>
                          <UserPlus className="mr-2" size={18} />
                          Sign Up
                        </>
                      )}
                    </>
                  )}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                {mode === 'login' ? (
                  <p className="text-sm text-gray-600">
                    Don't have an account?{' '}
                    <button 
                      onClick={() => setMode('signup')}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Sign up
                    </button>
                  </p>
                ) : (
                  <p className="text-sm text-gray-600">
                    Already have an account?{' '}
                    <button 
                      onClick={() => setMode('login')}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Login
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default LoginSignup;
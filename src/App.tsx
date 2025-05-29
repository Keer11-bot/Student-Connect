import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CountrySelection from './pages/CountrySelection';
import ChatAccessType from './pages/ChatAccessType';
import LoginSignup from './pages/LoginSignup';
import ChatPage from './pages/ChatPage';
import GuestChatPage from './pages/GuestChatPage';
import SubscriptionPage from './pages/SubscriptionPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/countries" element={<CountrySelection />} />
          <Route path="/chat-access" element={<ChatAccessType />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/guest-chat" element={<GuestChatPage />} />
          <Route path="/subscribe" element={<SubscriptionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
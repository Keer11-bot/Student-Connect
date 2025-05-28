import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, Search, LogOut, Menu, X, Lock } from 'lucide-react';
import Header from '../components/Header';
import { mockChatRooms } from '../data/mockData';
import { ChatRoom } from '../types';

const GuestChatPage: React.FC = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState<ChatRoom | null>(null);
  const [message, setMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Filter chat rooms based on search
  const filteredRooms = mockChatRooms.filter(room => 
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Select first room by default
    if (mockChatRooms.length > 0 && !selectedRoom) {
      setSelectedRoom(mockChatRooms[0]);
    }
  }, []);

  useEffect(() => {
    // Scroll to bottom whenever messages change
    scrollToBottom();
  }, [selectedRoom]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubscribe = () => {
    navigate('/subscribe');
  };

  const handleRoomSelect = (room: ChatRoom) => {
    setSelectedRoom(room);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Header minimal />
      
      <div className="flex-grow flex overflow-hidden">
        {/* Mobile sidebar toggle */}
        <button 
          className="md:hidden fixed top-16 left-4 z-20 bg-blue-600 text-white p-2 rounded-full shadow-md"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        {/* Sidebar */}
        <div 
          className={`bg-white w-72 flex-shrink-0 border-r border-gray-200 flex flex-col transition-all duration-300 z-10
                     ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
                     md:translate-x-0 fixed md:static h-[calc(100%-64px)] md:h-auto`}
        >
          <div className="p-4 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search chat rooms..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <div className="flex-grow overflow-y-auto">
            <div className="p-2">
              <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-3 py-2">
                Country Chat Rooms
              </h2>
              <div className="space-y-1">
                {filteredRooms.map(room => (
                  <button
                    key={room.id}
                    onClick={() => handleRoomSelect(room)}
                    className={`w-full flex items-center px-3 py-2 rounded-lg text-left transition-colors duration-200
                              ${selectedRoom?.id === room.id 
                                ? 'bg-blue-100 text-blue-800' 
                                : 'hover:bg-gray-100 text-gray-700'}`}
                  >
                    <img 
                      src={room.icon} 
                      alt={room.name} 
                      className="w-6 h-6 mr-3 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <h3 className="font-medium">{room.name}</h3>
                      <p className="text-xs text-gray-500 truncate">
                        {room.messages.length > 0 
                          ? `${room.messages[room.messages.length - 1].sender.name}: ${room.messages[room.messages.length - 1].content}` 
                          : 'No messages yet'}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200 space-y-2">
            <div className="bg-amber-50 p-3 rounded-md border border-amber-200">
              <p className="text-amber-700 text-sm flex items-start">
                <Lock size={16} className="mr-1 flex-shrink-0 mt-0.5" />
                <span>You're in guest mode with read-only access</span>
              </p>
            </div>
            <button 
              onClick={handleSubscribe}
              className="flex items-center justify-center w-full px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition duration-200"
            >
              Subscribe for Rs. 55/month
            </button>
            <button 
              onClick={() => navigate('/')}
              className="flex items-center justify-center w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition duration-200"
            >
              <LogOut size={18} className="mr-2" />
              Exit Guest Mode
            </button>
          </div>
        </div>
        
        {/* Chat area */}
        <div className="flex-grow flex flex-col">
          {selectedRoom ? (
            <>
              {/* Chat header */}
              <div className="bg-white p-4 border-b border-gray-200 flex items-center shadow-sm">
                <img 
                  src={selectedRoom.icon} 
                  alt={selectedRoom.name} 
                  className="w-8 h-8 rounded-full object-cover mr-3"
                />
                <div className="flex-grow">
                  <h2 className="font-semibold text-gray-800">{selectedRoom.name}</h2>
                  <p className="text-xs text-gray-500">{selectedRoom.participantsCount} participants</p>
                </div>
                <div className="flex items-center text-amber-600 bg-amber-50 px-2 py-1 rounded text-xs">
                  <Lock size={14} className="mr-1" />
                  Read Only
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
                <div className="space-y-4">
                  {selectedRoom.messages.map(msg => (
                    <div 
                      key={msg.id} 
                      className="flex justify-start"
                    >
                      <div className="flex max-w-xs md:max-w-md lg:max-w-lg">
                        <div className="flex-shrink-0 mr-2">
                          <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white font-medium">
                            {msg.sender.name.charAt(0)}
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 mb-1">{msg.sender.name}</p>
                          <div className="bg-white rounded-lg p-3 text-gray-800 border border-gray-200">
                            <p>{msg.content}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              </div>
              
              {/* Message input (disabled for guests) */}
              <div className="bg-white p-4 border-t border-gray-200">
                <div className="flex flex-col">
                  <div className="flex items-center">
                    <input
                      type="text"
                      disabled
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Subscribe to send messages..."
                      className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md bg-gray-100 text-gray-500 cursor-not-allowed"
                    />
                    <button
                      disabled
                      className="bg-gray-400 text-white px-4 py-2 rounded-r-md cursor-not-allowed flex items-center"
                    >
                      <Send size={18} />
                    </button>
                  </div>
                  <div className="mt-2 flex justify-center">
                    <button
                      onClick={handleSubscribe}
                      className="text-sm text-purple-600 hover:text-purple-800 font-medium flex items-center"
                    >
                      <Lock size={14} className="mr-1" />
                      Subscribe for Rs. 55/month to send messages
                    </button>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-grow flex items-center justify-center">
              <p className="text-gray-500">Select a chat room to start browsing messages</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuestChatPage;
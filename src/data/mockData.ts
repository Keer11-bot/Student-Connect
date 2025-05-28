import { ChatRoom } from '../types';
import { formatDistanceToNow, subMinutes, subHours, subDays } from 'date-fns';

// Generate random messages between bots
const generateConversation = (roomName: string) => {
  const botNames = ['Alex', 'Taylor', 'Jordan', 'Sam', 'Riley', 'Morgan', 'Casey', 'Jamie'];
  const conversation = [];
  
  // Generic conversation starters
  const topics = [
    {
      topic: 'University Life',
      messages: [
        "Has anyone started studying for the finals yet?",
        "I've been preparing for weeks. The economics exam looks tough!",
        "Does anyone have Professor Wilson's lecture notes from last week?",
        "I can share mine. I'll send them in the group later.",
        "The campus library is so crowded these days. Any other good study spots?",
        "I usually go to the coffee shop on Main Street. It's quiet and has good wifi.",
      ]
    },
    {
      topic: 'Student Exchange',
      messages: [
        "I'm thinking about applying for the exchange program next semester. Anyone done it before?",
        "I did the exchange to Berlin last year. It was an amazing experience!",
        "How difficult was the application process?",
        "Not too bad, but start early. The recommendation letters take time.",
        "Did you have any issues with credit transfers when you came back?",
        "A few, but the international office was really helpful sorting it out.",
      ]
    },
    {
      topic: 'Accommodation',
      messages: [
        "I'm looking for a new roommate for next semester. Anyone interested?",
        "What area is the apartment in?",
        "It's right near the science building, about a 5-minute walk to campus.",
        "That sounds perfect! How much is the rent?",
        "It's $450 per month, utilities included. The place is furnished too.",
        "I might be interested. Can I come see it sometime this week?",
      ]
    },
    {
      topic: 'Local Events',
      messages: [
        `Anyone going to the ${roomName} cultural festival this weekend?`,
        "I'm planning to go on Saturday. I heard the food stalls are amazing!",
        "What time does it start? I have a morning class.",
        "I think it's from noon until late evening.",
        "Is there an entry fee?",
        "It's free for students if you show your university ID.",
      ]
    }
  ];
  
  // Select a random topic
  const selectedTopic = topics[Math.floor(Math.random() * topics.length)];
  
  // Create time intervals
  const now = new Date();
  const timeIntervals = [
    subMinutes(now, 5),
    subMinutes(now, 8),
    subMinutes(now, 12),
    subMinutes(now, 18),
    subMinutes(now, 24),
    subMinutes(now, 30),
    subHours(now, 1),
    subHours(now, 2),
  ].sort((a, b) => a.getTime() - b.getTime()); // Ensure chronological order
  
  // Generate the conversation
  for (let i = 0; i < selectedTopic.messages.length; i++) {
    const botName = botNames[i % botNames.length]; // Cycle through bot names
    conversation.push({
      id: `msg-${roomName}-${i}`,
      content: selectedTopic.messages[i],
      sender: {
        id: `bot-${i % botNames.length}`,
        name: botName,
        avatar: ''
      },
      timestamp: timeIntervals[i % timeIntervals.length]
    });
  }
  
  return conversation;
};

// Mock chat rooms
export const mockChatRooms: ChatRoom[] = [
  {
    id: 'england',
    name: 'England',
    icon: 'https://flagcdn.com/w40/gb-eng.png',
    participantsCount: 126,
    messages: generateConversation('England')
  },
  {
    id: 'usa',
    name: 'United States',
    icon: 'https://flagcdn.com/w40/us.png',
    participantsCount: 215,
    messages: generateConversation('USA')
  },
  {
    id: 'india',
    name: 'India',
    icon: 'https://flagcdn.com/w40/in.png',
    participantsCount: 187,
    messages: generateConversation('India')
  },
  {
    id: 'canada',
    name: 'Canada',
    icon: 'https://flagcdn.com/w40/ca.png',
    participantsCount: 94,
    messages: generateConversation('Canada')
  },
  {
    id: 'australia',
    name: 'Australia',
    icon: 'https://flagcdn.com/w40/au.png',
    participantsCount: 73,
    messages: generateConversation('Australia')
  },
  {
    id: 'germany',
    name: 'Germany',
    icon: 'https://flagcdn.com/w40/de.png',
    participantsCount: 109,
    messages: generateConversation('Germany')
  },
  {
    id: 'france',
    name: 'France',
    icon: 'https://flagcdn.com/w40/fr.png',
    participantsCount: 88,
    messages: generateConversation('France')
  },
  {
    id: 'japan',
    name: 'Japan',
    icon: 'https://flagcdn.com/w40/jp.png',
    participantsCount: 66,
    messages: generateConversation('Japan')
  },
  {
    id: 'brazil',
    name: 'Brazil',
    icon: 'https://flagcdn.com/w40/br.png',
    participantsCount: 82,
    messages: generateConversation('Brazil')
  },
  {
    id: 'southafrica',
    name: 'South Africa',
    icon: 'https://flagcdn.com/w40/za.png',
    participantsCount: 57,
    messages: generateConversation('South Africa')
  }
];
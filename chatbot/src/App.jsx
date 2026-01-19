import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import { ChatMessages } from './components/ChatMessages';
import './App.css'




     

 function App()
      {
          
        const [chatMsgs, setChatMsgs] =  useState([
              { id: 1, message: "hello from chatbot", sender: "user"},
              { id: 2, message: "how can i help you" , sender: "robot"},
              { id: 3, message: "Can you get me today's date?" , sender: "user"},
              { id: 4, message: "Today's date is 9-01-2026" , sender: "robot"},
            ])

            return (
                    <div className="app-container">      
                      { chatMsgs.length > 0 ? <ChatMessages chatMsgs={chatMsgs} />  : 
                      <div className="welcome-message">Welcome to the chatbot project! Send a message using the textbox below.</div>
                    }
                      <ChatInput chatMsgs={chatMsgs} setChatMsgs={setChatMsgs} />
                    </div>
                );

      }


export default App

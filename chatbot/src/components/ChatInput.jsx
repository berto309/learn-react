import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './css/ChatInput.css'

 export function ChatInput({chatMsgs, setChatMsgs})
      {
        const [inputText, setInputText] = useState('')

        function saveInput(e)
        {
            setInputText(e.target.value)
        }

        async function sendMessage()
        {
          setInputText('')

          const newChatMessages = [
                ... chatMsgs,
                {
                    id: crypto.randomUUID(),
                    message: inputText,
                    sender: 'user'
                }
              ];

          setChatMsgs(newChatMessages)

           setChatMsgs([
            ...newChatMessages,
            {
              message: <img src="./img/loading-spinner.gif" className="loading-spinner" />,
              sender: 'robot',
              id: crypto.randomUUID()
            }
          ]);

          const response = await Chatbot.getResponseAsync(inputText)
         
          setChatMsgs([
                ... newChatMessages,
                {
                    id: crypto.randomUUID(),
                    message: response,
                    sender: 'robot'
                }
              ])

         
        }


          return (
              <div className="chat-input-container">
                  <input  
                  placeholder="Send a message to Chatbot" 
                  value={inputText}
                  className="chat-input"
                  onChange={saveInput}
                  size="30"
                  />
                  <button 
                  onClick={sendMessage}
                  className="send-button"
                  >Send</button>
              </div>
          );
      }

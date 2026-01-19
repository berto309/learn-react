import { useAutoScroll } from "../hooks/useAutoScroll";
import { ChatMessage } from "./ChatMessage";
import './css/ChatMessages.css'
export function ChatMessages({chatMsgs})
      {
         

            const chatMsgsRef = useAutoScroll(chatMsgs);

            return (
              <div className="chat-messages-container" ref={chatMsgsRef}>
                {chatMsgs.map((chat) =>  {
                      return ( 
                        <ChatMessage key={chat.id} message={chat.message} sender={chat.sender} /> 
                      )
                    })
                }
              </div>
            );

      }
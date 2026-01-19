 import './css/ChatMessage.css'
 
 export function ChatMessage({message, sender})
      {
         return (
            <div className={ sender === 'robot' ? 'chat-message-robot' : 'chat-message-user'}>
                { sender === 'robot' && (
                    <img src="/img/robot.png" className="chat-message-profile" />
                ) 
            }
                <div className="chat-message-text">{message}</div>
                { sender !== 'robot' && (
                    <img src="/img/user.png" className="chat-message-profile" /> 
                )
            }
            </div>
        );

      }

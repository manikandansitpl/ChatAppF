import React, { useEffect } from 'react';
import {
  MultiChatWindow,
  MultiChatSocket,
  useMultiChatLogic,
  ChatForm
} from 'react-chat-engine-advanced';

function ChatPages(props) {

  
  const chatProps = useMultiChatLogic(
    '21fee0d3-e5e5-4c5f-9ce6-6117ddd1dfb6',
    props.user.username,
    props.user.secret,
  );
  return (
    <div style={{ height: '100vh' }}>
      {/* <ChatForm
       
        style={{
          boxShadow: '0px 0px 3px 6px rgba(0, 0, 0, 0.1)',
          maxWidth: '400px'
        }}
      /> */}
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow 
      {...chatProps} 
      style={{ height: '100vh' }}  
      onFormSubmit={function noRefCheck(){}}
      />
    </div>
  )
}

export default ChatPages
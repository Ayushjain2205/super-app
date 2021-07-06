import React from 'react'
import { ChatEngine } from 'react-chat-engine'

function Chat() {
  return (
    <div>
      <ChatEngine
        height="100vh"
        userName="ayushjain"
        userSecret="password"
        projectID="4501abc7-55d9-4590-b679-6a088fb2ce8c"
      />
    </div>
  )
}

export default Chat

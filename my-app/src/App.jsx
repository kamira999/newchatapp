// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>
//
//       <div className="ticks"></div>
//
//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>
//
//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }
//
// export default App

import { useState, useEffect, useRef, useLayoutEffect} from 'react';
import './App.css'

function SendUserMessage (){

  function sendMessage(){
    //TODO!!!!!
  }

  return (
      <button type="button" onClick = {sendMessage} className="sendusermessage">Send</button>
  );
}



function ChatRoom ()  {
  return (
      <li><button type="button" className="chatroom">room</button></li>
  );
}

function MessagesContainer()  {
  const [messageCount, updateMessages] = useState();//TODO!!!!
  const ref = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current.scrollIntoView({behavior: "instant"})
  }, [])

  function handleNewMessages() {
    updateMessages(messageCount + 1)

  }

  // console.log(ref.scrollHeight)

  return (
      <div  className="messagescontainer">
        <ol className="messages" ref={ref}>
          <li className="message">
            <h3 className="messageusername">Username1</h3>
            <p className="messagetext">Haiaiaiaiaiai</p>
          </li>
          <li className="message">
            <h3 className="messageusername">Username2</h3>
            <p className="messagetext">Haiaiaiaiaiai</p>
          </li>
          <li className="message">
            <h3 className="messageusername">Username3</h3>
            <p className="messagetext">Haiaiaiaiaiai</p>
          </li>
          <li className="message">
            <h3 className="messageusername">Username4</h3>
            <p className="messagetext">Haiaiaiaiaiai</p>
          </li>
          <li className="message">
            <h3 className="messageusername">Username5</h3>
            <p className="messagetext">Haiaiaiaiaiai</p>
          </li>
          <li className="message">
            <h3 className="messageusername">Username6</h3>
            <p className="messagetext">Haiaiaiaiaiai</p>
          </li>
          <li className="message">
            <h3 className="messageusername">Username7</h3>
            <p className="messagetext">Haiaiaiaiaiai</p>
          </li>
          <li className="message">
            <h3 className="messageusername">Username8</h3>
            <p className="messagetext">Haiaiaiaiaiai</p>
          </li>
          <li className="message">
            <h3 className="messageusername">Username9</h3>
            <p className="messagetext">Haiaiaiaiaiai</p>
          </li>
          <li className="message">
            <h3 className="messageusername">Username10</h3>
            <p className="messagetext">Haiaiaiaiaiai</p>
          </li>
          <li className="message">
            <h3 className="messageusername">Username11</h3>
            <p className="messagetext">Haiaiaiaiaiai</p>
          </li>
          <li className="message">
            <h3 className="messageusername">Username12</h3>
            <p className="messagetext">Haiaiaiaiaiai</p>
          </li>
          <li className="message">
            <h3 className="messageusername">Username13</h3>
            <p className="messagetext">Haiaiaiaiaiai</p>
          </li>
          <div style={{ float:"left", clear: "both" }}
               ref={endRef}>
          </div>
        </ol>
      </div>
  );
};

function ChatPage(){
  return (
      <main>
        <div className="topbar">
          <div><h1>my new chat app</h1></div>
        </div>
        <div className="maindiv">
          <div className="sidebar">
            <ul className="chatroomlist">
              <li className="chatroom">room 1</li>
              <li className="chatroom">room 2</li>
              <li className="chatroom">room 3</li>
              <li className="chatroom">room 4</li>
              <ChatRoom />
            </ul>
          </div>
          <div className="chat">
            <MessagesContainer />
            <div className="usermessagebox">
              <input type="text" className="usermessage" placeholder="Enter message"></input>
              <SendUserMessage />
            </div>
          </div>
        </div>
      </main>
  );
};

function App() {
  return (
      <div className="container">
        <ChatPage />
      </div>
  );
};

// Render App.
// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
export default App
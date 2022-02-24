import { ChatEngine } from "react-chat-engine";

// Components
import ChatFeed from "./componets/ChatFeed";

// Styles
import "./App.css";

import LoginForm from "./componets/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="8077a03c-49d6-44c7-bfdc-b1df5b8a777c"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;

import { useState } from "react";
import ImageUpload from "./ImageUpload";
import { sendMessage } from "./api";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input) return;
    setMessages([...messages, { text: input, sender: "user" }]);
    const response = await sendMessage(input);
    setMessages([
      ...messages,
      { text: input, sender: "user" },
      { text: response, sender: "bot" },
    ]);
    setInput("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="chat-container  h-screen flex-1 flex flex-col max-w-4xl mx-auto w-full p-4">
        <div className="messages flex-1 bg-white rounded-lg shadow-lg p-4 mb-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[70%] rounded-lg p-3 ${
                msg.sender === "user"
                  ? "ml-auto bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <ImageUpload className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 cursor-pointer transition-colors" />

          <div className="flex-1 flex flex-col md:flex-row gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;

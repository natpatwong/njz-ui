"use client";

import { useState, useEffect, useRef } from "react";
import { db } from "../firebase";
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "firebase/firestore";

export default function Chatbox({ username, photoURL }) {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => doc.data());
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    if (message.trim() === "") return;

    try {
      await addDoc(collection(db, "messages"), {
        text: message,
        sender: username,
        senderPhotoURL: photoURL || "", 
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error("Error sending message: ", error);
    }

    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button style={styles.chatButton} onClick={toggleChat}>
        {isOpen ? "🔽 ปิดแชท" : "💬 เปิดแชท"}
      </button>

      {isOpen && (
        <div style={styles.chatbox}>
          <div style={styles.messages}>
            {messages.map((msg, index) => {
              const isOwnMessage = msg.sender === username;
              const avatarSrc = msg.senderPhotoURL || "/default-avatar.png"; // ⭐ ใช้ default avatar

              return (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    justifyContent: isOwnMessage ? "flex-end" : "flex-start",
                  }}
                >
                  {/* รูปโปรไฟล์ฝั่งซ้าย */}
                  {!isOwnMessage && (
                    <img
                      src={avatarSrc}
                      alt="profile"
                      style={styles.avatar}
                    />
                  )}

                  {/* กล่องข้อความ */}
                  <div
                    style={{
                      ...styles.message,
                      backgroundColor: isOwnMessage ? "#c6e2ff" : "#d0f0c0",
                    }}
                  >
                    <div style={{ fontWeight: "bold", marginBottom: "2px" }}>
                      {msg.sender}
                    </div>
                    <div>{msg.text}</div>
                  </div>

                  {/* รูปโปรไฟล์ฝั่งขวา */}
                  {isOwnMessage && (
                    <img
                      src={avatarSrc}
                      alt="profile"
                      style={styles.avatar}
                    />
                  )}
                </div>
              );
            })}
                    <div ref={messagesEndRef} />
                    </div>

          <div style={styles.inputContainer}>
            <input
              style={styles.input}
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
            />
            <button style={styles.sendButton} onClick={handleSend}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  chatButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "#fff",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    zIndex: 1000,
  },
  sendButton: {
    marginLeft: "5px",
    padding: "8px 12px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  chatbox: {
    position: "fixed",
    bottom: "80px",
    right: "20px",
    width: "300px",
    height: "400px",
    backgroundColor: "#e6f0ff",
    border: "1px solid #ccc",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    zIndex: 1000,
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
  },
  messages: {
    flex: 1,
    padding: "10px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  message: {
    padding: "8px 12px",
    borderRadius: "15px",
    maxWidth: "70%",
    fontSize: "14px",
    wordBreak: "break-word",
  },
  inputContainer: {
    display: "flex",
    padding: "10px",
    borderTop: "1px solid #ccc",
    backgroundColor: "#f9f9f9",
  },
  input: {
    flex: 1,
    padding: "8px",
    fontSize: "14px",
  },
  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "50%",
  },
};

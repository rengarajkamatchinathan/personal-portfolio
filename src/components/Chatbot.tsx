"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/app/styles/Chatbot.module.scss";

export default function Chatbot({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Good day. I am S.A.R.A.H — RK's dedicated assistant. How can I help you?." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { from: "bot", text: "Processing command..." },
      ]);
    }, 700);
  };

  return (
    <AnimatePresence>
      <motion.div
        className={styles.chatbot}
        initial={{ opacity: 0, scale: 0.5, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.5, y: 100 }}
        transition={{ duration: 0.4 }}
      >
        <div className={styles.header}>
          <span className={styles.title}>S.A.R.A.H</span>
          <X className={styles.close} onClick={onClose} />
        </div>
        <div className={styles.messages}>
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: msg.from === "bot" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`${styles.message} ${
                msg.from === "bot" ? styles.bot : styles.user
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </div>
        <div className={styles.inputArea}>
          <input
            type="text"
            placeholder="Speak, Sir..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

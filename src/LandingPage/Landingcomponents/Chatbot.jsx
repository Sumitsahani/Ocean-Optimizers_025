import React, { useState } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Chatbot is initially closed
  const [userMessage, setUserMessage] = useState('');
  const [conversation, setConversation] = useState([]);
  const [showWelcomeNote, setShowWelcomeNote] = useState(true); // Show welcome note on first click

  // Sample questions and answers related to invoices and expenses
  const questionsAndAnswers = {
    'How can I create an invoice?': 'You can create an invoice by navigating to the "Create Invoice" section in your dashboard. Fill out the necessary details like client information, services, and payment terms.',
    'How do I track my expenses?': 'To track expenses, go to the "Expenses" tab in your dashboard. There, you can add new expenses, categorize them, and view expense reports.',
    'Can I add taxes to an invoice?': 'Yes, you can add taxes while creating an invoice. There is an option to apply tax rates either globally or on specific line items.',
    'What payment methods are accepted?': 'We accept various payment methods including credit/debit cards, bank transfers, and PayPal.',
    'How do I send an invoice to a client?': 'Once an invoice is created, you can send it directly to the client’s email via the "Send Invoice" button.',
    'How can I generate a financial report?': 'To generate financial reports, visit the "Reports" section. You can generate reports for expenses, income, and profit/loss over specific time periods.',
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowWelcomeNote(true); // Show welcome note when the chatbot is opened
    if (!isOpen) {
      setConversation([]); // Reset conversation if opening the chatbot
    }
  };

  // Handle when a user selects a question from the buttons
  const handleQuestionClick = (question) => {
    const botAnswer = questionsAndAnswers[question] || 'Sorry, I don\'t understand that question.';

    // Update conversation with the selected question and bot answer
    setConversation([...conversation, { user: question, bot: botAnswer }]);
    setShowWelcomeNote(false); // Hide the welcome note after the user sends a message
  };

  const handleUserMessage = () => {
    if (!userMessage.trim()) return;

    const userQuestion = userMessage.trim();
    const botAnswer = questionsAndAnswers[userQuestion] || 'Sorry, I don\'t understand that question.';

    // Update conversation with user question and bot answer
    setConversation([...conversation, { user: userQuestion, bot: botAnswer }]);

    // Clear input field
    setUserMessage('');
    setShowWelcomeNote(false); // Hide the welcome note after the user sends a message
  };

  return (
    <div>
      {/* Floating Chat Button */}
      <div
        className="fixed bottom-5 right-5 bg-blue-500 text-white rounded-full p-4 shadow-lg cursor-pointer hover:bg-blue-600 transition duration-300 z-50"
        onClick={toggleChat}
      >
        💬
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 w-80 h-96 bg-white shadow-lg rounded-lg p-4 border-t-4 border-blue-500 z-50">
          <h3 className="text-xl font-bold text-blue-500">TrackMyBill Assistant</h3>

          <div className="mt-4 h-48 overflow-y-auto">
            {/* Welcome note appears only when the chat is first opened */}
            {showWelcomeNote && (
              <div className="text-gray-700">
                <p>Welcome! How can I assist you with your invoices or expenses today?</p>
                <p>Click on a question below to get started:</p>

                {/* Display buttons for each question */}
                <div className="space-y-2">
                  {Object.keys(questionsAndAnswers).map((question, index) => (
                    <button
                      key={index}
                      className="w-full bg-blue-100 text-blue-700 py-2 px-3 rounded-lg hover:bg-blue-200 transition"
                      onClick={() => handleQuestionClick(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Conversation history */}
            {conversation.map((msg, index) => (
              <div key={index} className="mt-2">
                <p className="text-gray-900 font-semibold">You: {msg.user}</p>
                <p className="text-gray-600">Bot: {msg.bot}</p>
              </div>
            ))}
          </div>

          {/* Input for user questions */}
          <div className="mt-4">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ask me something..."
            />
            <button
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600 transition duration-300"
              onClick={handleUserMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

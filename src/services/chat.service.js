import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

export const sendMessagesToServer = async (message, conversationId) => {
  const response = await axios.post(`${baseURL}/helpdesk`, message, {
    headers: {
      ConversationId: conversationId,
    },
  });

  return response.data;
};

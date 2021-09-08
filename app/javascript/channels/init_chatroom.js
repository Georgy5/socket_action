import consumer from "./consumer";

const initChatroom = () => {
  const messagesContainer = document.getElementById('messages');
  if (messagesContainer) {
    const id = messagesContainer.dataset.chatroomId;

    consumer.subscriptions.create(
      { channel: "ChatroomChannel", id: id },
      {
        received(message) {
          messagesContainer.insertAdjacentHTML('beforeend', message);
        }
      }
    );
  }
}

export { initChatroom };
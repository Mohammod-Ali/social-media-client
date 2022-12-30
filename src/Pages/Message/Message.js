import React from "react";

const Message = () => {
  return (
    <div>
      <h1 className="text-5xl mt-5 "> Messaging System Coming Soon.</h1>
      <div className="chat chat-start m-5 my-20">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="chat bubble" src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">Hi Honey!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-start m-5 my-20">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="chat bubble"  src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">You were the Chosen One!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end  m-5">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="chat bubble"  src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I hate you!</div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
      <div className="chat chat-start m-5 my-20">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="chat bubble"  src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="chat-header">
          Obi-Wan Kenobi
          <time className="text-xs opacity-50">12:45</time>
        </div>
        <div className="chat-bubble">Why do you hate me!</div>
        <div className="chat-footer opacity-50">Delivered</div>
      </div>
      <div className="chat chat-end m-5">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="chat bubble"  src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div className="chat-header">
          Anakin
          <time className="text-xs opacity-50">12:46</time>
        </div>
        <div className="chat-bubble">I have a boy friend thats why I hate you! </div>
        <div className="chat-footer opacity-50">Seen at 12:46</div>
      </div>
    </div>
  );
};

export default Message;

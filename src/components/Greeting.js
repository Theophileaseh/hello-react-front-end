import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMessages } from '../redux/messages';

const Greeting = () => {
  const messages = useSelector((state) => state.messages);

  const dispatch = useDispatch();

  console.log(messages.message);

  useEffect(() => {
    if (messages.length === 0) {
      dispatch(getMessages());
    }
  }, [dispatch, messages.length]);

  return (
    <div className="all-messages">
      <div className="single-message" key={messages.message.id}>
        <p className="message-info">{messages.message.greeting}</p>
      </div>
      <div className="links-section">
        <Link to="/">Go back</Link>
      </div>
    </div>
  );
};

export default Greeting;

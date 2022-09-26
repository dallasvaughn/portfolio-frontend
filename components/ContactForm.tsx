import { useState, SyntheticEvent } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    setName('');
    setEmail('');
    setMessage('');
    try {
      fetch('/api/contact', {
        method: 'post',
        body: JSON.stringify(data),
      });
      setResponse('Thanks, I will get back to you as soon as possible!');
    } catch (error) {
      setResponse(
        'Sorry, an error occurred trying to send this message. Try again later.'
      );
    }
  };

  return (
    <div className="shadow-2xl w-full sm:max-w-screen-sm sm:mx-auto -mt-40 mb-10 -z-10 p-8">
      <p className="lg:text-left mt-40 lg:mt-0 lg:ml-auto lg:w-1/2 font-extralight text-[15px] leading-7">
        If you have any questions for me, want to discuss any work
        opportunities, or simply want to chat about something, feel free to use
        this form to get in touch with me!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full border p-2 mt-6 lg:mt-10 font-extralight text-[15px]"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="w-full border p-2 mt-6 font-extralight text-[15px]"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          className="w-full border p-2 mt-6 font-extralight text-[15px]"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        {response && (
          <p className="mt-2 text-[15px] font-extralight">{response}</p>
        )}
        <button
          className="bg-black hover:bg-slate-700 text-white pt-4 pb-3 px-6 font-bold uppercase mt-4"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

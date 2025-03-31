import { useState } from 'react';

const UseForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setShowModal(true);
        form.reset();
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was a problem submitting the form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        action="https://formsubmit.co/f3cdd39f5dc33d7f0fe63565c8eae728"
        method="POST"
        className="w-[100%] lg:w-[50%] text-[#4F4F4F] mt-6 grid grid-cols-1 gap-x-8 gap-y-8"
      >
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="" /> 

        <div className="">
          <label htmlFor="full-name">Full name</label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="full-name"
              placeholder="Input your full name"
              autoComplete="given-name"
              required
              className="block w-full rounded-md border p-2 text-gray-900 shadow-sm placeholder:text-gray-400 placeholder:text-[0.9rem] focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="email">Input your email</label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Input your mail"
              required
              className="block w-full rounded-md border p-2 text-gray-900 shadow-sm placeholder:text-gray-400 placeholder:text-[0.9rem] focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="mobile-number">Mobile number</label>
          <div className="mt-2">
            <input
              type="tel" 
              name="phone" 
              id="mobile-number"
              autoComplete="tel"
              placeholder="Input your number"
              className="block w-full rounded-md border p-2 text-gray-900 shadow-sm placeholder:text-gray-400 placeholder:text-[0.9rem] focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
            />
          </div>
        </div>
        <div className="">
          <label htmlFor="message">Message to our team</label>
          <div className="mt-2">
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here"
              rows={4}
              required
              className="block w-full rounded-md border p-2 text-gray-900 shadow-sm placeholder:text-gray-400 placeholder:text-[0.9rem] pla focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
            />
          </div>
        </div>
        <button 
          type="submit"
          disabled={isSubmitting}
          className="bg-primary py-2 mt-6 mb-[5rem] text-white rounded-[1.2rem] hover:bg-opacity-90 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Shoot us a mail'}
        </button>
      </form>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold mb-4">Thank You!</h2>
            <p className='text-center'>Your message has been sent successfully. We'll get back to you soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UseForm;
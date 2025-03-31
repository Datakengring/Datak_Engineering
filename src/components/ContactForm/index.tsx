import { useState } from 'react';

const ContactForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/f3cdd39f5dc33d7f0fe63565c8eae728', {
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
        action="https://formsubmit.co/d6193b3572b8bcf400d468e383e5cf84" 
        method="POST"
        className="w-[100%] mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6"
      >
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="" />

        <div className="col-span-3 lg:col-auto">
          <label
            htmlFor="first-name"
            className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text text-[1rem]"
          >
            First name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="first-name"
              id="first-name"
              autoComplete="given-name"
              required
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
            />
          </div>
        </div>

        <div className="col-span-3 lg:col-auto">
          <label
            htmlFor="last-name"
            className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text text-[1rem]"
          >
            Last name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="last-name"
              id="last-name"
              autoComplete="family-name"
              required
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
            />
          </div>
        </div>

        <div className="col-span-3">
          <label
            htmlFor="email"
            className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text text-[1rem]"
          >
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
            />
          </div>
        </div>

        <div className="col-span-3">
          <label
            htmlFor="about"
            className="bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text text-[1rem]"
          >
            About
          </label>
          <div className="mt-2">
            <textarea
              id="about"
              name="about"
              rows={3}
              required
              className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-[1px] focus:ring-solid focus:ring-yellow focus:outline-none"
              defaultValue={""}
            />
          </div>
        </div>

        <button 
          type="submit"
          disabled={isSubmitting}
          className="bg-primary col-span-3 py-2 text-white rounded-[1.2rem] hover:bg-opacity-90 disabled:opacity-50"
        >
          {isSubmitting ? 'Submitting...' : 'Shoot us a mail'}
        </button>
      </form>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-md w-full flex flex-col items-center justify-center ">
            <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-linearOne to-linearTwo inline-block text-transparent bg-clip-text">
              Message Sent!
            </h2>
            <p className="text-gray-700 text-center">Thank you for contacting us. We'll get back to you soon.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-primary text-white py-2 px-4 rounded-[1.2rem] hover:bg-opacity-90"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
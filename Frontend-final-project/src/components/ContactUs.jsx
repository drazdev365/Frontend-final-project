const ContactUs = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          Feel free to contact us with questions, potential partnerships, or media inquiries.
        </p>
        <form className="space-y-4">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="E-mail"
              className="w-1/2 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <textarea
            placeholder="Your text"
            className="w-full p-2 border border-gray-300 rounded h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded hover:bg-gray-800 transition duration-200"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

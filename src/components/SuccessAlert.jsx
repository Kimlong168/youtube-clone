const SuccessAlert = ({ setSuccess }) => {
  return (
    <div className="fixed inset-0 min-h-screen backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white rounded-lg">
        <div className="w-96 border-t-8 border-blue-600 rounded-lg flex">
          <div className="w-1/3 pt-6 flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 text-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
          </div>
          <div className="w-full pt-9 pr-4">
            <h3 className="font-bold text-blue-700">Login successfully!</h3>
            <p className="py-4 text-sm text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              optio.
            </p>
          </div>
        </div>

        <div className="p-4 flex space-x-4">
          <a
            onClick={() => setSuccess(false)}
            href="#"
            className="w-1/2 px-4 py-3 text-center bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-black font-bold rounded-lg text-sm border border-blue-600"
          >
            Cancel
          </a>
          <a
            onClick={() => setSuccess(false)}
            href="#"
            className="disabled w-1/2 px-4 py-3 text-center text-pink-100 bg-blue-600 rounded-lg hover:bg-blue-700 hover:text-white font-bold text-sm"
          >
            Continue
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessAlert;

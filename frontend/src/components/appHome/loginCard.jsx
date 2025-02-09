function LoginCard() {
  return (
    <div className="flex items-center justify-center rounded-lg mt-5">
      <div className=" p-6 shadow-lg w-full max-w-xs">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button className="w-full bg-blue-400 text-white py-2 px-4 rounded-lg hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4">
          Login
        </button>

        <div className="text-center">
          <span className="text-gray-600 text-sm">Not a user? </span>
          <button className="text-blue-500 text-sm hover:underline focus:outline-none">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;
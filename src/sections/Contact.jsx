
export default function Contact() {
  return (
    <div id="contact" className="flex flex-col max-w-6xl mb-10 h-min-screen w-full">
      <h1 className="text-4xl text-blue-500 py-6 underline 
      decoration-green-500 font-bold"
      >
        Contact Me
      </h1>
      <div>
        <div>
          <h1 className="text-2xl font-bold">My Contact</h1>
          <p className="text-lg">Email: ryanwcchan@gmail.com</p>
        </div>
        <div>
          <p className="text-lg">If you have any questions or would like to collaborate, feel free to reach out to me.</p>
        </div>
        <form 
          className='flex flex-col gap-4 mt-4'
        >
          <div className='flex flex-col'>
            <label 
              htmlFor="name" 
              className='block text-lg font-semibold text-black dark:text-white mb-2'
            >Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Your Name"
              className='w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
            />
          </div>
          <div className='flex flex-col'>
            <label 
              htmlFor="email"
              className='block text-lg font-semibold text-black dark:text-white mb-2'
            >
              Email
            </label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              placeholder="Your Email"
              className='w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
            />
          </div>

          <div className='flex flex-col'>
            <label 
              htmlFor="message" 
              className='block text-lg font-semibold text-black dark:text-white mb-2'>
              Message
            </label>
            <textarea 
              name="message" 
              id="message"
              placeholder="Your Message"
              className='w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600'
              rows="5"            
            />
          </div>

          <button 
            type='submit'
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold 
            py-2 px-4 rounded w-64 mx-auto"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}

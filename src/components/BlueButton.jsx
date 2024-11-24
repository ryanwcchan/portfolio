export default function BlueButton({ children }) {
  return (
    <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold 
                py-2 px-4 rounded w-32"
    >
        {children}
    </button>
  )
}

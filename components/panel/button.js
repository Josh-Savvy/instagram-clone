
const Button = ({ children, blacked = false }) => {
  return (
    <button className={`text-xs text-blue-500 font-semibold ${blacked ? 'text-black' : 'text-blue-500'}`}>
      {children}
    </button>
  )
}

export default Button

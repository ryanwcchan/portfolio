export default function SocialMediaIcon({ icon, href, className }) {
  return (
    <i
      className={`fa-brands fa-${icon} text-4xl 
      hover:text-blue-400 cursor-pointer px-4 
      transition-colors duration-300 ease-in-out ${className}`}
      onClick={() => window.open(href, '_blank')}
    />
  )
}

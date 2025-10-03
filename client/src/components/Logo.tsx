// Simple Cute Calculator Logo
function Logo({ size = 50, isFooter = false }) {
  return (
    <svg
      className={isFooter ? "" : "drop-shadow-md"}
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Calculator Body */}
      <rect 
        x="5" 
        y="5" 
        width="40" 
        height="40" 
        rx="8" 
        fill="#FF5733" 
        className="transform-gpu hover:scale-105 transition-transform duration-300"
      />
      
      {/* Calculator Screen */}
      <rect x="10" y="10" width="30" height="10" rx="3" fill="#E0E0E0" />
      
      {/* Calculator Buttons */}
      <rect x="10" y="25" width="6" height="6" rx="2" fill="#FFC300" />
      <rect x="22" y="25" width="6" height="6" rx="2" fill="#FFC300" />
      <rect x="34" y="25" width="6" height="6" rx="2" fill="#FFC300" />
      
      <rect x="10" y="35" width="6" height="6" rx="2" fill="#FFC300" />
      <rect x="22" y="35" width="6" height="6" rx="2" fill="#FFC300" />
      <rect x="34" y="35" width="18" height="6" rx="2" fill="#FFC300" />
      
      {/* Cute Face */}
      <circle cx="20" cy="15" r="1.5" fill="#003366" /> {/* Left eye */}
      <circle cx="30" cy="15" r="1.5" fill="#003366" /> {/* Right eye */}
      <path 
        d="M22 18C22 18 23 20 25 20C27 20 28 18 28 18" 
        stroke="#003366" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      /> {/* Smile */}
    </svg>
  );
}

export default Logo;

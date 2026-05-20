export const ArrowLeft = ({ className = "w-6 h-6", strokeWidth = 2 }) => (
  <svg
  aria-label="prev icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor" // This enables text color control
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);


export const ArrowRight = ({ className = "w-6 h-6", strokeWidth = 2 }) => (
  <svg
  aria-label="next icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      d="M9 5l7 7-7 7"
    />
  </svg>
);
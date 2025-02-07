export function Card({ className, children, ...props }) {
    return (
      <div
        className={`bg-white border border-gray-200 rounded-lg shadow-md w-full max-w-4xl mx-auto h-auto min-h-[120px] ${className}`}
        {...props}
      >
        {children}
      </div>
    )
  }
  
  export function CardContent({ className, children, ...props }) {
    return (
      <div className={`p-4 ${className}`} {...props}>
        {children}
      </div>
    )
  }
  
  
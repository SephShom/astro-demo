import { FaArrowRight } from "react-icons/fa6";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function SmallButton({ children, className, ...rest }: ButtonProps) {
  return(
    <button
      {...rest}
      className='w-max items-center rounded-lg p-2 bg-accent-all text-md font-medium text-color-900 transition-colors hover:bg-color-900 hover:text-accent-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50'
    >
      {children}
      <FaArrowRight size={20} />
    </button>
  )
}
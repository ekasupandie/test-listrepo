import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { type } from 'os'
export default function Button({type,isLoading}:Props) {
  const Loading = () => {
    return(
      <div className='flex justify-center'>
        <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white'></div>
      </div>
    )
  }
    return(
    <div>
      <button type={type} className="bg-black h-6 w-6 text-white hover:bg-zinc-400 aspect-square rounded-[8px]">
        {isLoading? <Loading/> : <MagnifyingGlassIcon className='w-6 h-6' />}
      </button>
    </div>
    )

}
interface Props{
  type?: 'button' | 'submit' | 'reset' | undefined;
  isLoading?: boolean;
}
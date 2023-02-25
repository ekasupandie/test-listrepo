export default function Form({value,onChange}:Props) {
    return(
        <input placeholder='search repo' 
        className='border border-zinc-100-[10px] rounded-[50px]'
        value={value}
        onChange={onChange}
        />
    )

}

interface Props{
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
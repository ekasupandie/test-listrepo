import Layout from "@/components/Layout";
import Form from "@/components/Form";
import Button from "@/components/Button";
import Repolist from "@/components/Repolist";
import { useState } from 'react';
import { User } from '../types/User';

export default function Repository() {

    const [isLoading,setIsLoading]=useState(false)
    const [search,setSearch]=useState("")
    const [result,setResult] = useState<SearchRes | null>(null)
    const onSubmitSearch=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        if(search){
            setIsLoading(true)
            fetch(`https://api.github.com/search/users?q=${search}&per_page=20`)
                  .then(res=>res.json())
                  .then(data=>{
                     const users : User[] = data.items
                     const searchRes:SearchRes={
                      search:search,
                      users:users
                     }
                    setResult(searchRes)
                  }).finally(()=>{
                    setIsLoading(false)
                  })
         }
    }

    return(
        <Layout>
        <div>
        <form className='flex place-self-center space-x-3' onSubmit={onSubmitSearch}>
            <Form value={search} onChange={(e)=>setSearch(e.target.value)}/>
            <Button type='submit' isLoading={isLoading}/>
        </form>
        {result && <Repolist result={result}/>}
        </div>
        </Layout>
        )
}
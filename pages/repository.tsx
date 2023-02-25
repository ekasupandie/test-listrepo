import Layout from "@/components/Layout";
import Form from "@/components/Form";
import Button from "@/components/Button";

export default function Repository() {
    return(
        <Layout>
        <div>
         <form>
            <Form />
            <Button type='submit' isLoading={false}/>
         </form>
        </div>
        </Layout>
        )
}
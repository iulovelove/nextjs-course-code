import { useRouter } from "next/router"

function selectedClientProjectPage(){

    const router = useRouter();

    console.log(router.query)
    return <div>
        <h1>the project page for a specific project for a selected client</h1>
    </div>
}

export default selectedClientProjectPage
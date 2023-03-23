import {useRouter} from 'next/router';


function PortfolioProjectPage(){
    const router = useRouter();
    
    console.log(router.pathname)
    // 可以访问路径中的url参数  
    console.log(router.query)

    // send a request to some backend server
    // to fetch the piece of data with an id of router.query.projectId
    
    return <div>
        <h1>
            The Portfolio project page
        </h1>
    </div>
}


export default PortfolioProjectPage
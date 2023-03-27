import Link from 'next/link'

function clientPage(){
    const clients = [
        {id:"max",name:"Maximilian"},
        {id:"manu",name:"Manuel"},
    ]

    return <div>
        <h1>The client page</h1>
        <ul>
            {/* <li>
                <Link href="/client/max">Maximilian</Link>
                <Link href="/client/manu">Manuel</Link>
            </li> */}
            {clients.map(client => 
            <li key={client.id}>
                {/* <Link href={`/clients/${client.id}`}>
                    {client.name}
                </Link> */}
                <Link href={{
                    pathname:"/clients/[id]",
                    query:{id: client.id}
                }}>
                    {client.name}
                </Link>
            </li>)}
        </ul>
    </div>
}


export default clientPage
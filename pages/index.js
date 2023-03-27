import Link from 'next/link';


function HomePage () {
    return (
        <div>
            <h1> this is home page</h1>
            <ul>
                <li>
                    <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="/clients">clients</a>
                </li>
            </ul>
        </div>
    )
}


export default HomePage;
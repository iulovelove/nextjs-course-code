import { getFeaturedEvents } from "../dummy-data"
import EventList from "../components/events/event-list";


function HomePage (){
    const featuredEvents = getFeaturedEvents();

    return (
    <div>
        <EventList items={featuredEvents}/>
        <h1>The Home Page</h1>
    </div>)
}

export default HomePage
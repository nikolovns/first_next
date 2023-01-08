import { Event, Events } from "../components/@types/events";
import { EventsList } from "../components/events/EventsList";
import axios from 'axios';
import { GetServerSideProps } from "next";

function HomePage({ events }: Events) {

    return (
        <div>
            <h2>Events list</h2>
            <EventsList events={events} />
        </div>
    )
}

export const getServerSideProps: GetServerSideProps<{ events: Events }> = async () => {

    const res = await axios.get('http://localhost:3001/events');
    const events: Events = await JSON.parse(JSON.stringify(res.data))

    return {
        props: {
            events: events
        },
    }
}

export default HomePage;
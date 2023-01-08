import axios from "axios";
import { GetServerSideProps, GetStaticProps } from "next";
import { Events } from "../../components/@types/events";
import { EventsList } from "../../components/events/EventsList";

function AllEventsPage({ events }: Events) {

    return (
        <div>
            <h2>All Events List</h2>
            <EventsList events={events} />
        </div>
    )
}

export const getStaticProps: GetStaticProps<{ events: Events }> = async () => {
    const res = await axios.get('http://localhost:3001/events');
    const events = JSON.parse(JSON.stringify(res.data))

    return {
        props: {
            events: events
        }
    }
}

export default AllEventsPage;
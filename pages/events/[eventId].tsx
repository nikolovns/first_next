import { useRouter } from "next/router";
import { EventsList } from "../../components/events/EventsList";
import { EventsItem } from "../../components/events/EventsItem";

import { Event } from "../../components/@types/events";
import { GetStaticProps } from "next";
import axios from "axios";


const EventDetailsPage = ({ event }: { event: Event }) => {

    return (
        <div>
            <EventsItem {...event} />
        </div>
    )
}

export const getStaticPaths = async () => {

    const res = await axios.get(`http://localhost:3001/events`)
    const events: Event[] = JSON.parse(JSON.stringify(res.data))

    const paths = events.map((event: Event) => ({
        params: { eventId: event.id?.toString() },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.eventId
        const res = await axios.get(`http://localhost:3001/events/${id}`);
        const event: Event = JSON.parse(JSON.stringify(res.data));

        return {
            props: { event }
        }
    } catch (error) {
        throw new Error
    }

}



// export const getStaticProps: GetStaticProps = async ({params}) => {

//     const id = params?.id


//     //     // const getEventById = (id: any) => {
//     //     //     const eventById = events.filter((event) => {
//     //     //         return event.id == id
//     //     //     })

//     //     //     return eventById
//     //     // }

//     //     // const id = router.query.eventId;
//     //     // const res = await axios.get(`http://localhost:3001/events/${id}`)
//     //     // const event: Event = JSON.parse(JSON.stringify(res.data))

//     return {
//         props: {
//             // event
//         }
//     }
// }

export default EventDetailsPage;
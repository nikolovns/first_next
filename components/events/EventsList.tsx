import { EventsItem } from "./EventsItem"
import { Event, Events } from "../@types/events"

export const EventsList: React.FC<Events> = ({ events }) => {

    const eventsList = events.map((event: Event) => {
        return (
            <EventsItem key={event.id} {...event} />
        )
    })

    return (
        <div>
            <div>
                <ul>
                    {eventsList}
                </ul>
            </div>
        </div>
    )
}
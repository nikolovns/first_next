import { Event } from "../@types/events"
import Link from "next/link"

export function EventsItem({ name, address, date, id }: Event) {

    const splitStringByComma = (stringLine: string) => {
        return stringLine.split(', ').map((item: string, index: number) => {
            return (<p key={index}>{item}</p>)
        })
    }

    const eventDate = new Date(date)

    return (
        <li>
            <div>
                <div>
                    <img src={`https://picsum.photos/seed/${id}/300/200`} alt="" />
                </div>
                <h3>{name}</h3>
                <div>
                    <address>{splitStringByComma(address)}</address>
                </div>
                <div>{`${eventDate.getDate()}.${eventDate.getMonth() + 1}.${eventDate.getFullYear()}`}</div>
                <div>
                    <Link href={`/events/${id}`}>
                        more details
                    </Link>
                </div>
            </div>
        </li>
    )
}
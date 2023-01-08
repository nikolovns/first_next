export interface Event {
    id?: number,
    name: string,
    address: string,
    date: Date,
}

export interface Events {
    events: Event[]
}
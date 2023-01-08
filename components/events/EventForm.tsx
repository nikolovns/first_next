import React, { useRef } from "react";

export const EventForm: React.FC = () => {
    const dateRef = useRef<HTMLInputElement | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(dateRef.current?.value)
    }

    return (
        <div>
            <form>
                <input ref={dateRef} type="date" onChange={handleChange} />
            </form>
        </div>
    )
}
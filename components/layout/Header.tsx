import Link from "next/link"
import { Navigation } from "./Navigation"

export const Header = () => {
    return (
        <div>
            <div>
                <span><Link href="/">LOGO</Link></span>
                <Navigation />
            </div>
        </div>
    )
}
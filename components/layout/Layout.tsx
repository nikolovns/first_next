import React, { Fragment, ReactNode } from "react";
import { Header } from "./Header";

type ChildrenProps = {
    children?: ReactNode
}

const Layout = ({ children }: ChildrenProps): JSX.Element => {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout
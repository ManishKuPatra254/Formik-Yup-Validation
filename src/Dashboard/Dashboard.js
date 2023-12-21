import React, { Fragment } from 'react'
import './Dashboard.css';

export function Dashboard() {
    return (
        <Fragment>
            <div className="main_dash">
                <h1>Manish</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </Fragment>
    )
}

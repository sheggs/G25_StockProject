import React, { Component } from 'react'
import '../css/Header.css'
export default class Header extends Component {
    render() {
        let links = [['Home', '#', ""], ['View Stocks', '#', ""], ['Open Account', '#', "btn btn-orange"], ['Login', '#', "btn btn-primary"]]
        const items = []
        for (const [k, v] of links.entries()) {
            items.push(<span className="a_container"><a key={k} href={v[1]} className={v[2]} >{v[0]}</a>                    </span>
            )
        }
        return (
            <div className="nav_section">
                <h1 class="logo">G25_Stock</h1>
                <div className="navigation">
                    {items}
                </div>
            </div>
        )
    }
}

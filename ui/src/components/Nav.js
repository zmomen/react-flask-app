import React from 'react';
import 'spectre.css'

const Nav = () => {

    return (
        <header class="navbar">
            <section class="navbar-section">
                <a href="https://google.com" class="btn btn-link">Docs</a>
                <a href="https://google.com" class="btn btn-link">Examples</a>
            </section>
            <section class="navbar-center">
                {/* <!-- centered logo or brand --> */}
  </section>
            <section class="navbar-section">
                <a href="https://google.com" class="btn btn-link">Twitter</a>
                <a href="https://google.com" class="btn btn-link">GitHub</a>
            </section>
        </header>
    )
};

export default Nav;
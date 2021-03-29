import React from 'react'

import {
    HashRouter,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <main className="main-content">
            <section className="section">
                <div className="container">
                    <div className="section__inner">
                        <h1 className="section__title">Geography quizzes</h1>
                        <div className="section__content">
                            {/* Cards */}
                            <div className="cards-list">
                                <Link to="/quiz" className="card">
                                    <div className="card__mask"></div>
                                    <p className="card__title">
                                        Capitals <br/>
                                        <span>- of -</span> <br/>
                                        Europe</p>
                                </Link>
                                <a href="/#" className="card">
                                <p className="card__title">
                                        Capitals <br/>
                                        <span>- of -</span> <br/>
                                        Asia</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="container">
                    <div className="section__inner">
                        <h1 className="section__title">Another quizzes</h1>
                        <div className="section__content">
                            {/* Cards */}
                            <div className="cards-list">
                                <a href="/#" className="card">
                                    <div className="card__title">Something</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Home

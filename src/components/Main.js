import React from 'react'

const Main = () => {
    return (
        <main className="main-content">
            <section className="section">
                <div className="container">
                    <div className="section__inner">
                        <h1 className="section__title">Quizzes</h1>
                        <div className="section__content">
                            {/* Cards */}
                            <div className="cards-list">
                                <a href="/#" className="card">
                                    <div className="card__title">Europe</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main

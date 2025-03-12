import React from 'react'

function LatestNews() {
    const news = [
        {
            img: "https://placehold.co/600x400",
            title: "Brownies and Coffee",
            description: "Quis autem velis et reprehender etims quiste voluptate velit esse quam nihil etsa illum sedit consequatur quias voluptas sit netsum.",
            link: "#",
        },
        {
            img: "https://placehold.co/600x400",
            title: "Oldest London Pub",
            description: "Quis autem velis et reprehender etims quiste voluptate velit esse quam nihil etsa illum sedit consequatur quias voluptas sit netsum.",
            link: "#",
        },
        {
            img: "https://placehold.co/600x400",
            title: "New Cooking Recipes",
            description: "Quis autem velis et reprehender etims quiste voluptate velit esse quam nihil etsa illum sedit consequatur quias voluptas sit netsum.",
            link: "#",
        },
        
    ]
    return (
        <div className='LatestNews container-fluid p-0'>
            <div className="container text-center p-5">
                <h3>Latest News</h3>
                <h1>Delicious Recipes</h1>
                <div className="cards_news mt-5">
                    {news.map((item, index) => (
                        <div className="card_new">
                            <div className="header">
                                <img src={item.img} alt=""/>
                            </div>
                            <div className="body">
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                                <a href={item.link} className="btn btn-new">DISCOVER MORE</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LatestNews

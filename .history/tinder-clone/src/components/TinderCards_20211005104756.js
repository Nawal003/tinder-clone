import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import '../App.css'

function TinderCards() {
    const [people, setPeople] = useState([{
        name: "Elon Musk",
        url: "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/d/9/a/d9a1058910_50163142_elon-musk1.jpg"
    },
    {
        name: "Jeff Bezos",
        url: "https://www.forbes.fr/wp-content/uploads/2021/04/gettyimages-950750900-1.jpg"
    }
    ]);

    const swiped = (direction, nameToDelete) => {
        // console.log("removing" + nameToDelete)
    };

    const outOfFrame = (name) => {
        // console.log(name) + "left the screen"
    };


    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">

                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}



                    >
                        <div
                            style={{ backgroundImage: `url(${person.url})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>


                    </TinderCard>

                ))}
            </div>

        </div>
    )
}

export default TinderCards

import React from 'react';
import Characters from "./Characters";
import Locations from "./Locations";
import './Content.css';


export default function Content(props) {
    const landing =
        <div className='landingText'>
            I'd like to order one large phone with extra phones please. cell phone, no no no rotary... and payphone on half. Well let me check my list of powers and weaknesses: ability to do anything, but only whenever I want. Yeah, that sounds like a job for me. Prepare to be emancipated from your own inferior genes! There's a lesson here and I'm not going to be the one to figure it out. <br />
            <br />
            Congratulations on making it into print media. Real bright future there. I'm sorry, Morty. It's a bummer. In reality you're as dumb as they come. Lemme hear everybody say hey-yo! All the ladies say yeaaah! Everybody over thirty do this with your hand! Everybody with a red shirt jump up and down! Yo, everyone whose first name begins with an L who isn't hispanic, walk in a circle the same number of times as the square root of your age times teeenn! Rick, the only connection between your unquestionable intelligence and the sickness destroying your family is that everyone in your family, you included, use intelligence to justify sickness. You seem to alternate between viewing your own mind as an unstoppable force and as an inescapable curse. And I think it's because the only truly unapproachable concept for you is that it's your mind within your control. You chose to come here, you chose to talk to belittle my vocation, just as you chose to become a pickle. You are the master of your universe, and yet you are dripping with rat blood and feces. Your enormous mind literally vegetating by your own hand. I have no doubt that you would be bored senseless by therapy, the same way I'm bored when I brush my teeth and wipe my ass. Because the thing about repairing, maintaining, and cleaning is it's not an adventure. There's no way to do it so wrong you might die. It's just work. And the bottom line is, some people are okay going to work, and some people... well, some people would rather die. Each of us gets to choose. <br />
            <br />
            Don't be trippin dog we got you. You look it up, you don't- you don't even know what it means. You know what a vole is, Morty? You know what a vole is? Meeseeks don't usually have to exist for this long. It's gettin' weeeiiird. <br />
            <br />
            Nice one, Ms Pancakes. Did you just come into the cafeteria through a portal? Yo! What up my glip glops! Not MY fault this is happening.
        </div>

    const characters = <Characters />

    const locations = <Locations />

    let content;

    switch (props.page) {
        case "Characters":
            content = characters;
            break;
        case "Locations":
            content = locations;
            break;
        default:
            content = landing;
            break;
    }

    return (
        <div className='content'>{content}</div>
    );
}
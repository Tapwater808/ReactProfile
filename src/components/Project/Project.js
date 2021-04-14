import React from "react";
import BarTriviaSim from "../../assets/BarTriviaSimSS.png";
import NoteTaker from "../../assets/NoteTaker.gif";
import dndHelperImage from "../../assets/char-sheet.png";
import WorkoutTracker from "../../assets/WorkoutTracker.jpg";

function Projects() {
    return(
        <>
        <section id="portfolio">
            <h2>Portfolio</h2>
            <p>Take a look at some of my work.</p>

            <article>
                <h2>Bar Trivia Simulator</h2>

                <img src={BarTriviaSim} alt=""/>

                <p>
                    A Bar Trivia Siumulator with digital Jukebox and Quiz Game!
                </p>

                <a class="external-button" href="https://github.com/Tapwater808/bar-trivia-simulator">GitHub</a>
                <a class="external-button" href="https://joshrehanek.github.io/bar-trivia-simulator/">Deployed Application</a>
            </article>

            <article>
                <h2>Dynamic Note Taking App</h2>

                <img src={NoteTaker} alt="" />

                <p>
                    A Dynamic Note taking application for ease of use
                </p>

                <a class="external-button" href="https://github.com/Tapwater808/notetaker">GitHub</a>
                <a class="external-button" href="https://notetaker-mason.herokuapp.com/">Deployed Application</a>
            </article>

            <article>
                <h2>Dungeons & Dragons Helper</h2>

                <img src={dndHelperImage} alt="" />

                <p>
                    An application to help quickly build an easy-to-read character sheet for Dungeons & Dragons 5th edition.
                </p>

                <a class="external-button" href="https://github.com/Tapwater808/DungeonsAndDragonsHelper">GitHub</a>
                <a class="external-button" href="https://aqueous-fortress-78837.herokuapp.com/">Deployed Application</a>
            </article>

            <article>
                <h2>Workout Tracker</h2>

                <img src={WorkoutTracker} alt="" />

                <p>
                    A workout tracker for keeping record of your exercises
                </p>

                <a class="external-button" href="https://github.com/Tapwater808/WorkoutTracker">GitHub</a>
                <a class="external-button" href="https://workout-tr.herokuapp.com/">Deployed Application</a>
            </article>
        </section>
        </>
    )
}

export default Projects;
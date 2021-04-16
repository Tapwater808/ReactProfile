import React from "react";

function Bio() {
    return(
        <>
        <main id="about">
            <h1>Mason miyamoto</h1>
            <div class="square"></div>

            <div>
                <h2 class="text">Hello!</h2>
                <p class="text">
                    My name is <span class="bold">Mason</span>. I am a full-stack web developer with experience in <span class="bold">HTML</span>, <span class="bold">CSS</span>, <span class="bold">JavaScript</span>, <span class="bold">node.js</span>, <span class="bold">MySQL</span>, <span class="bold">Sequelize</span>, <span class="bold">MongoDB</span>, <span class="bold">Mongoose</span>, and <span class="bold">React JSX</span>.
                </p>

                <p class="text">
                    I've always been tech savy and learning coding has always been more fun than an acutal job for me! I have a passion for expanding my knowledge base and learning new technology!  I love to keep up to date with the newest advancements and learn new languages as they come out! 
                </p>

                <h2 class="text">Find me on:</h2>
                <a class="external-button margin" href="https://github.com/Tapwater808">GitHub</a>
                <a class="external-button button" href="https://www.linkedin.com/in/mason-miyamoto-17a5a91b3/">LinkedIn</a>
            </div>
        </main>
        </>
    )
}

export default Bio;
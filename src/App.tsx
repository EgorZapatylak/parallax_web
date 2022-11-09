import React from 'react';
import './App.css';
import './components/js/app';

function App() {
    return (
        <div className="App">
            <link rel="stylesheet" href="./components/css/main.css"/>
            <script src={'./components/libs/gsap/gsap.min.js'} defer></script>
            <script src={'./components/libs/gsap/ScrollTrigger.min.js'} defer></script>
            <script src={'./components/libs/gsap/ScrollSmoother.min.js'} defer></script>
            <script src="./components/js/app.js" defer></script>
            <header className="main-header">
                <div className="layers">
                    <div className="layers_header">
                        <div className="layers_caption">Welcome to Parallax</div>
                        <div className="layers_title">Fairy Forest</div>
                    </div>
                    <div className="layer layers_base"></div>
                    <div className="layer layers_middle"></div>
                    <div className="layer layers_front"></div>
                </div>
            </header>
            <article className="main-article">
                <div className="main-article_content">
                    <h2 className="main-article_header">To be CONTINUED</h2>
                    <p className={'main-article_p'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium alias autem, deleniti esse ex excepturi illo illum ipsum
                        laboriosam maiores minus modi molestiae provident quasi
                        reiciendis sapiente tempora tempore voluptas!32</p>
                </div>
                <div className={'copy'}>© WebDesign Master</div>
            </article>
        </div>
    );
}

export default App;

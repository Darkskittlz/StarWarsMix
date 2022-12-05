import { 
    Container, 
    GridContainer,
    ButtonContainer
 } from "./Styles/CreateStyles";


const App = () => {
    (async () => {
        await loadStarsPreset(tsParticles); 

        await tsParticles.load("tsparticles", {
          preset: "stars",
        });

    })()
    return (
        <GridContainer>
            <Container>
                <h1>Star Wars</h1>
                <iframe width="350" height="255" src="https://www.youtube.com/embed/Zy00_VUgsCA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <ButtonContainer>
                    <button><a href="https://illlilred.bandcamp.com/music">illilred</a></button>
                </ButtonContainer>
            </Container>
        </GridContainer>    
    );
};

export default App;
import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./RecipeList";

function App() {
  return (//only return onething
    //<> <header><section> </>
    
    // <div>
    //   <NavBar/> 
    //   <Title/>
    // </div>

    <>
    <header>
      <NavBar/>
      <Title/>
      <RecipeList/>

    </header>
    <main>

    </main>
    </>

  );
}

export default App;

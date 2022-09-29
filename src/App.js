import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./RecipeList";
import Search from "./Seaech";
import NewRecipe from "./NewRecipe";

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
      <Search/>
      <NewRecipe/>

    </header>
    <main>

    </main>
    </>

  );
}

export default App;

const RecipeList = () => {

        const cakes = [
            {
                cakeName: "Lemon Drizzle",
                ingredients: ["eggs", "butter", "lemon  zest", "sugar", "self-raising flour"],
                rating: 5
            },
            {
                cakeName: "Tea Loaf",
                ingredients: ["eggs", "oil", "dried fruit", "sugar", "self-raising flour", "strong tea"],
                rating: 3
            },
            {
                cakeName: "Brownie",
                ingredients: ["chocolate", "eggs", "flour", "butter", "walnuts"],
                rating: 4
            },
            {
                cakeName: "Carrot Cake",
                ingredients: ["carrots", "walnuts", "oil", "cream cheese", "flour", "sugar"],
                rating: 5
            },
            {
                cakeName:"Test",
                ingredients : ["Testing ingredients"],
                rating:100

            }
        ]

        const total_rating = cakes.reduce((total,cakes) => (total + cakes.rating), 0) / cakes.length;
        
        return(
            <>
                <section>
                    {
                        cakes.map((cake,index) => {
                            return(
                                <div key = {index}>
                                    <h3>{cake.cakeName}</h3>
                                    <ul>
                                        {cake.ingredients.map((ingredients,index) => {
                                            return(
                                                <li key = {index}>{ingredients}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })
                    }
                </section>

                <section>
                    <div>
                        <h2>Average Rating: total_rating</h2>
                    </div>
                    
                </section>
            </>
        )

}

export default RecipeList;
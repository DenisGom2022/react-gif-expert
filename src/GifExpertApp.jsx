import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one Punch']);

    const onAddCtaegory = ( newCategory ) => {
        if(categories.includes(newCategory)) return;
        setCategories(cat => [newCategory, ...cat])
    }

    return(
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            
            <AddCategory 
                onNewCategory={ value => onAddCtaegory(value) }
            />
                { categories.map( category => <GifGrid key={ category } category={ category } />) }
        </>
    )

}
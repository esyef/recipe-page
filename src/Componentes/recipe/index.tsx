import Cover from './Cover';
import recipeJson from '../../../data.json'
import {CardOverview, CardPreparation} from './Card';

export default function Recipe() {

    const recipe = recipeJson.recipe
    const recipeOverview = {
        title: recipe.title,
        desc: recipe.description
    }

    const prepratation = {
        total : recipe.preparation_time.total,
        preparation: recipe.preparation_time.preparation,
        cooking: recipe.preparation_time.cooking
    }



    return (
        <section>
            <Cover img={recipe.img.src} alt={recipe.img.alt}/>
            <CardOverview {...recipeOverview}/>
            <CardPreparation title='Preparation Time' data={prepratation}/>
        </section>

    )
}{}
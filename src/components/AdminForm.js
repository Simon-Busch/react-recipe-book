import React from 'react'

const AdminForm = ({
  id: key, //give id the name "key"
  updateRecipe,
  recipes
}) => {
  const recipe = recipes[key]

  const handleChange = (e,key) => {
    const {name,value} = e.target
    const recipe = recipes[key]
    recipe[name] = value
    updateRecipe(key, recipe)
  }

  return (
    <div class="card">
        <form className="admin-form">
          <input name="nom" 
                onChange={e => handleChange(e, key)}
                value={recipe.nom}
                type="text" 
                placeholder="Recipe name"/>
          <input name="image" 
                onChange={e => handleChange(e, key)}
                value={recipe.image}
                type="text" 
                placeholder="Image" />
          <textarea name="ingredients" 
                onChange={e => handleChange(e, key)}
                value={recipe.ingredients}
                rows="3" 
                placeholder="Ingredient list" />
          <textarea name="instructions" 
                onChange={e => handleChange(e, key)}
                value={recipe.instructions}
                rows="15" 
                placeholder="Instructions list" />
          <button>Delete</button>
        </form>
      </div>
  ) 
}

export default AdminForm
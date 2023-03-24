import { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'Messi']);


  const onAddCategory = (newCategory) =>{

    const currentCategoriesUpperCase = categories.map(cat=> cat.toUpperCase());

    if(currentCategoriesUpperCase.includes(newCategory.toUpperCase())) return;
  
    setCategories([...categories, newCategory]);

  }

  return (
    <>
        
      <h1>Gif Expert App</h1>
        
      <AddCategory onNewCategory={(e) => onAddCategory(e)} />
        
        
       
      {categories.map(category => 
        (
          <GifGrid key={category} category={category} />
        )
      )}

        

        
    </>
  )
}

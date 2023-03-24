import { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([]);


  const onAddCategory = (newCategory) =>{

    const currentCategoriesUpperCase = categories.map(cat=> cat.toUpperCase());

    if(currentCategoriesUpperCase.includes(newCategory.toUpperCase())) return;

    function toUpper(str) {
      return str
          .toLowerCase()
          .split(' ')
          .map(function(word) {
              console.log("First capital letter: "+word[0]);
              console.log("remain letters: "+ word.substr(1));
              return word[0].toUpperCase() + word.substr(1);
          })
          .join(' ');
       }
  
    setCategories([toUpper(newCategory), ...categories]);

  }

  return (
    <>
        
      <h2>Gif Expert App</h2>
        
      <AddCategory onNewCategory={(e) => onAddCategory(e)} />
        
        
       
      {categories.map(category => 
        (
          <GifGrid key={category} category={category} />
        )
      )}

        

        
    </>
  )
}

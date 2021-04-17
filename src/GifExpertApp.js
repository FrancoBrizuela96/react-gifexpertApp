import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import { GifGrid } from './components/GiftGrid';

export const GifExpertApp = () => {

    
    const [categories, setCategories] = useState(['One Piece']);

    //const handleAdd = () => {
       // setCategories( e => [ ...e, 'One Piece']);
    //}
    
    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories} />
            <hr />

            

            <ol>
                {
                    categories.map( category  => 
                        <GifGrid 
                            key = {category}
                            category = {category}
                        />
                    )}
                
            </ol>
        </div>
    )
}
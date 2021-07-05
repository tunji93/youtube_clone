import React,{useState} from 'react'

import  '../Styles/_CategoriesBar.scss'



const CategoriesBar = () => {
    const [selected, setSelected] = useState("All")

    const handleClick = (value)=> setSelected(value)
    const list = [
        "All",
        "Coding",
        "Vue",
        "React",
        "Angular",
        "Python",
        "Javascript",
        "Algorithms",
        "Channels Tv",
        "Arise Tv",
        "Football",
        "Nigeria",
        "Man United",
        "EPL",
        "Messi",
        "Jollof Rice",
        "Sahel Region"
    ].map((val,i)=>{
        return <span className = {selected===val? "selected": ''} onClick={()=>{handleClick(val)}} key={i}>{val}</span>
    })
    
    return (
        <div className="categoriesbar">
            {list}
        </div>
    )
}

export default CategoriesBar

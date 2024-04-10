import { Accordion, AccordionDetails, AccordionSummary, Button, Checkbox, FormGroup, FormControlLabel } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

/*const ingredients=[
    {
        category:"Nuts & Seeds",
        ingredients:"Cashews"
    },
    {
        category:"Protein",
        ingredients:"Chicken Strips"
    },
    {
        category:"Bread",
        ingredients:"Hamburger buns"
    },
    {
        category:"Vegetables",
        ingredients:"Lettuce"
    }
]*/

const demo=[
    {
        category:"Nuts & Seeds",
        ingredients:["Cashews"]
    },
    {
        category:"Protein",
        ingredients:["Chicken Strips"]
    },
    {
        category:"Bread",
        ingredients:["Hamburger buns"]
    },
    {
        category:"Vegetables",
        ingredients:["Lettuce", "Tomato slices", "Onion Slices"]
    }
]

const MenuCard = () => {
    const handleCheckBoxChange=(value)=>{
        console.log("value")
    }
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
               <img
                className='w-[7rem] h-[7-rem] object-cover'
                src="https://cdn.pixabay.com/photo/2024/04/06/07/47/cheeseburger-8678826_640.jpg" 
                alt="" 
                /> 
                <div className='space-y-1 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>Burger</p>
                    <p>₹499</p>
                    <p className='text-gray-400'>A burger is a sandwich consisting of a patty (typically meat or a meat substitute) served inside a bun, often accompanied by various toppings and condiments.</p>
                </div>
            </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div className='felx gap-5 flex-wrap'>
                {
                   demo.map((item)=> (
                   <div>
                    <p>{item.category}</p>
                    <FormGroup>
 {item.ingredients.map((item) => (
 <FormControlLabel control={<Checkbox onChange={()=>handleCheckBoxChange(item)}/>} label={item} />
 ))}
</FormGroup>
                    </div>
                   ))}
            </div>
          </form>
          <div className='pt-5'>
            <Button variant='contained' disabled={true} type='submit'>{true?"Add to Cart":"Out of Stock"}</Button>
          </div>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard
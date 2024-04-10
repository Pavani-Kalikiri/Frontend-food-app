import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MenuCard from './MenuCard';


const categories=[
    "pizza",
    "biryani",
    "burger",
    "chiken",
    "rice"
];
const foodTypes=[
    {label:"All",value:"all"},
    {label:"Vegetarian only", value:"vegetarian"},
    {label:"Non-Vegetarian", value:"non-vegetarian"},
    {label:"Seasonal", value:"seasonal"}
];
const menu=[1,1,1,1,1,1]

const RestaurantDetails = () => {
    const [foodType,setFoodTpe]=useState("all")

    const handleFilter=(e)=>{
        console.log(e.target.value,e.target.name)
    }
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food/3</h3>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img
                        className='w-full h-[40vh] object-cover'
                         src="https://cdn.pixabay.com/photo/2022/11/14/10/37/chinese-lanterns-7591296_1280.jpg" 
                         alt=""/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img
                        className='w-full h-[40vh] object-cover'
                         src="https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_1280.jpg" 
                         alt=""/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img
                        className='w-full h-[40vh] object-cover'
                         src="https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_640.jpg" 
                         alt=""/>
                    </Grid>
                </Grid>
            </div>
            <div className='pt-3 pb-5'>
                <h1 className='text-4xl font-semibold'>Indian Fast Food</h1>
                <p className='text-gray-500 mt-1'>An Indian fast food restaurant serves quick and flavorful Indian dishes for those craving authentic flavors in a convenient dining experience.</p>
                <div className='space-y-3 mt-3'>
                <p className='text-gray-500 flex items-center gap-3'>
                    <LocationOnIcon/>
                    <span>
                        Mumbai, Maharastra
                    </span>
                </p>
                </div>
                
                <p className='text-gray-500 flex items-center gap-3'>
                    <CalendarTodayIcon/>
                    <span>
                        Mon-Sun: 9:00 AM - 9:00 PM (Today)
                    </span>
                </p>
            </div>
        </section>
        <Divider/>
        <section className='pt-[2rem] lg:flex relative'>
            <div className='space-y-10 lg:w-[20%] filter'>
                <div className='box space-y-5 lg:sticky top-28 d'>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>

                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                {foodTypes.map((item)=>(
                                <FormControlLabel 
                                key={item.value}
                                value={item.value} 
                                control={<Radio />} 
                                label={item.label} 
                                />))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider/>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}}>
                            Food Category
                        </Typography>

                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name="food_type" value={foodType}>
                                {categories.map((item)=>(
                                <FormControlLabel 
                                key={item}
                                value={item} 
                                control={<Radio />} 
                                label={item} 
                                />))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                {menu.map((item)=><MenuCard/>)}
            </div>

        </section>
        
    </div>
  )
}

export default RestaurantDetails
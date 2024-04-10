import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5'>
        <div className='flex items-center space-x-5'>
            <img 
            className='h-16 w-16'
            src="https://cdn.pixabay.com/photo/2022/03/02/12/40/dish-7043064_640.jpg" 
            alt="" />
            <div>
                <p>Biryani</p>
                <p>₹399</p>
            </div>
        </div>
        <div>
            <Button disabled className='cursor-not-allowed'>completed</Button>
        </div>

    </Card>
  )
}

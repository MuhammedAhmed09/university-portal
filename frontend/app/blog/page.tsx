import { Button } from '@/components/ui/button'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex text-center justify-center items-center'>
        <Button>
            <h2 className='text-base px-4'>{"It's comming soon!"}</h2>
        </Button>
    </div>
  )
}

export default page
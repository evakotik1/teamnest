'use client'

import { useState } from 'react';
import { Star } from 'lucide-react';

export default function StarButton() {
    const [isFilled, setIsFilled] = useState(false)

    const toggleStar = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setIsFilled(!isFilled)
    }

    return(
        <button onClick={toggleStar} className='cursor-pointer'>
            <Star color={isFilled ? "#EAB308" : "gray"} fill={isFilled ? "#EAB308" : "none"} />
        </button>
    )
}
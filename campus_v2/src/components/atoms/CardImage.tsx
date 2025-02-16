import React from 'react'

interface cardImageProps {
    image: string;
    name: string;
}

const CardImage:React.FC<cardImageProps> = ({image, name}) => {
  return (
    <div
    className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    style={{ backgroundImage: `url(${image})` }}
    title={name}
  ></div>
  )
}

export default CardImage
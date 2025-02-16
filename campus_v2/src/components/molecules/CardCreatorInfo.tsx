import React from 'react'
import AvatarImage from '../atoms/AvatarImage';

interface creatroAndInfoProps{
    image: string;
    name: string;
}

const CardCreatorInfo: React.FC<creatroAndInfoProps> = ({image}) => {
  return (
    <div className="flex items-center">
    <div className='w-10 h-10 mr-4'>
    <AvatarImage image={image} />
    </div>

    <div className="text-sm">
      <p className="text-gray-900 leading-none">Jonathan Reinink</p>
      <p className="text-gray-600">Aug 18</p>
    </div>
  </div>
  )
}

export default CardCreatorInfo
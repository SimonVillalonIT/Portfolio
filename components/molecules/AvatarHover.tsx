import React from 'react'
import { useAvatar } from '../../hooks/useAvatar'
import Avatar from '../atoms/Avatar'
import AvatarTongue from '../atoms/AvatarTongue'

function AvatarHover({ height, width, className }) {
  const { avatarState, handleMouseOver, handleMouseLeave } = useAvatar()
  return (
    <div
      className={`${className} hover:scale-110 duration-150 xl:scale-125 xl:hover:scale-[1.4] 2xl:scale-150 2xl:hover:scale-[1.7]`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {avatarState ? (
        <AvatarTongue width={width} height={height} />
      ) : (
        <Avatar width={width} height={height} />
      )}
    </div>
  )
}

export default AvatarHover

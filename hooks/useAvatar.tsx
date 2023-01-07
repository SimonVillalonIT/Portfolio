import { useState } from 'react'

export const useAvatar = () => {
  const [avatarState, setAvatarState] = useState(false)

  const handleMouseOver = () => {
    setAvatarState(true)
  }
  const handleMouseLeave = () => {
    setAvatarState(false)
  }

  return {
    avatarState,
    handleMouseOver,
    handleMouseLeave
  }
}

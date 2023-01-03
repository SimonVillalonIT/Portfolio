import React from "react";
import { useAvatar } from "../../hooks/useAvatar";
import Avatar from "../atoms/Avatar";
import AvatarTongue from "../atoms/AvatarTongue";

function AvatarHover({ height, width, className }) {
  const { avatarState, handleMouseOver, handleMouseLeave } = useAvatar();
  return (
    <div
      className={`${className} hover:scale-110 duration-150`}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {avatarState ? (
        <AvatarTongue width={width} height={height} />
      ) : (
        <Avatar width={width} height={height} />
      )}
    </div>
  );
}

export default AvatarHover;

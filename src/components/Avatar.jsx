import React from 'react';
import "./Avatar.css"

const Avatar = ({className, src, alt, ...props}) => {
  return (
    <div>
    {src? (
      <img className={`defaultClass ${className}`}
        src={src}
        alt={alt}
      />
    ) : (
      <img
        {...props} //If we want to use other images
        className={`defaultClass ${className}`}
        src={"https://i.pinimg.com/736x/49/f7/25/49f725a9f2b62ea80603f3fe51289735--le-design-icon-design.jpg"}
        alt={alt}
      />
    )}
    </div>
  );
}

export default Avatar

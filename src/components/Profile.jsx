import React from 'react'

const Profile = ({ data }) => {
  const { picture, name, email } = data;
  console.log(data);
  return (
    <>
        <figure><img src={picture} alt={name} height="100" width="100" className='rounded-circle' /></figure>
        <h2>{name}</h2>
        <p>{email}</p>
    </>
  )
}

export default Profile

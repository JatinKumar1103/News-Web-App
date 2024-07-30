import React, { useState } from 'react'

function Category({setCategory,isLoggedIn,setIsLoggedIn}) {
  
  
  const changeCategory = (category) => {
    setCategory(category);
   
    
  };
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      flexWrap: 'wrap',
      // margin: '1rem auto',
      position: 'fixed',
      top: '4rem', // Adjust as needed
      left: '0',
      width: '100%',
      zIndex: '1000',
      backgroundColor:'#F6F5FD' ,
      
    }} className='border p-2 rounded fixed-top'>
      <button type="button" style={{

        borderRadius: '2rem',
        padding: '.4em 2em',
        textAlign: 'center',
        // color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease',
       }}
      className={`btn btn-outline-dark ${isLoggedIn?'':'disabled'} mt-1`}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
       
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
       
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }} 
      
      onClick={()=>changeCategory("general")} >General</button>
       <button type="button" style={{
        borderRadius: '2rem',
        padding: '.5em 1em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease', // Add color transition
        
      }}
      className={`btn btn-outline-dark ${isLoggedIn?'':'disabled'} mt-1`}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }} onClick={()=>changeCategory("health")}>Health</button>
      <button type="button" value="health" style={{
        borderRadius: '2rem',
        padding: '.5em 2em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease' // Add color transition
      }}
      className={`btn btn-outline-dark ${isLoggedIn?'':'disabled'} mt-1`}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }}onClick={()=>changeCategory("business")}>Business</button>
      <button type="button" style={{
        borderRadius: '2rem',
        padding: '.5em 2em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease' // Add color transition
      }}
      className={`btn btn-outline-dark ${isLoggedIn?'':'disabled'} mt-1`}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }} onClick={()=>changeCategory("entertainment")}>Entertainment</button>
      <button type="button" style={{
        borderRadius: '2rem',
        padding: '.5em 2em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease' // Add color transition
      }}
      className={`btn btn-outline-dark ${isLoggedIn?'':'disabled'} mt-1`}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }} onClick={()=>changeCategory("sports")}>Sports</button>
      <button type="button" style={{
        borderRadius: '2rem',
        padding: '.5em 2em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease' // Add color transition
      }}
      className={`btn btn-outline-dark ${isLoggedIn?'':'disabled'} mt-1`}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }} onClick={()=>changeCategory("technology")}>Technology</button>
      <button type="button" style={{
        borderRadius: '2rem',
        padding: '.5em 2em',
        textAlign: 'center',
        color: 'black', // Set initial text color to black
        background: 'red', // default color
        backgroundImage: 'linear-gradient(to left,  white 50%, black 50%)',
        backgroundPosition: 'right',
        backgroundSize: '200%',
        transition: 'background-position 0.5s ease-out, color 0.5s ease' // Add color transition
      }}
      className={`btn btn-outline-dark ${isLoggedIn?'':'disabled'} mt-1`}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundPosition = 'left';
        e.currentTarget.style.color = 'white'; // Change text color on hover
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundPosition = 'right';
        e.currentTarget.style.color = 'black'; // Reset text color on mouse out
      }} onClick={()=>changeCategory("science")} >Science</button> 

    </div>
  )
}

export default Category


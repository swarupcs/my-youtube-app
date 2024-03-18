import React from 'react'
import Button from "./Button";

const ButtonList = () => {
  const buttonList = ["All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller", "New to you", "Computer Programming", "Netlify", "Coding"];
  return (
    <div className="flex">
    <Button name="All" />
    <Button name="Gaming" />
    <Button name="Songs" />
    <Button name="Live" />
    <Button name="Soccer" />
    <Button name="Cricket" />
    <Button name="Cooking" />
    <Button name="Cricket" />
    <Button name="Valentines" />
    <Button name="Cricket" />
    <Button name="Cooking" />
    <Button name="Cricket" />
  </div>

  )
}

export default ButtonList;


/**
 * 
 *    <div className="flex">
        {
          buttonList.map((buttonName, index) => {
            return (
              <div key={index}>
                <button className='bg-gray-200'><span className="whitespace-nowrap">{buttonName}</span></button>
              </div>
            )
          })
        }
    </div>
*/



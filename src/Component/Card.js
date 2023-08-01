import React from "react";
import star from '../Images/Star 1.png'

function Card(props)
{
    console.log(props.country)
    let badgeText
    if(props.openSpots === 0)
    {
        badgeText = 'SOLD OUT'
    }else if (props.country === 'Online')
    {
        badgeText = 'ONLINE'
    }

    return (
        

        <div className="card" >
            { badgeText &&  <div className='card--badge'>{badgeText} </div>}
            <img src= {`/Images/${props.img}`} 
            className="card--image" />
                    <div className="card--stats">
                    <img className="card-star" src={star} />
                    <span>  {props.rating} </span>
                    <span className="grey">(6) . </span>
                    <span className="grey">{props.country}</span>
                    </div>
                    <p>{props.title}</p>
                    <p><span className="bold">From ${props.price}</span> / person</p>
            
        </div>
    )
}
export default Card;
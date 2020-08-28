import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import classes from "./LeftSideBars.module.css"


function LeftSideBars(props) {
    // console.log(props.global)
    const cases = props.global.cases
    const deaths = props.global.deaths
    const recovered = props.global.recovered
    
return (
        <div>
            <div>
            <div>
            <div className={classes.Categories} >
                <div>
                    <p className={classes.CatagoryListItem1}>
                        <div className={classes.Text1}>
                            <h1>Global Cases</h1>
                            {cases} 
                        </div>
                    </p>
                </div>
                </div>
                <div>
                <div >
                    <p className={classes.CatagoryListItem2}
                    onClick={(e) => props.handleMouseHover(e)} name="deaths">
                        <div className={classes.Text1}>
                            <h1>Global Deaths</h1>
                            {deaths} 
                        </div>
                    </p>
                </div>
                </div>
         <div>
                <div >
                    <p className={classes.CatagoryListItem3}
                    onClick={(e) => props.handleMouseHover(e)} name="recovered">
                        <div className={classes.Text1}>
                            <h1>Global Recovered</h1>
                            {recovered} 
                        </div> 
                    </p>
                </div>
                </div>
                </div>
            </div>
        </div>         
    )
}

export default LeftSideBars
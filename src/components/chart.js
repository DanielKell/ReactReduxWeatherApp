/*This component was created to simplify the creation of graphs for the app.
Since we will be rendering many of these, we just need to make a dumb component
that will inherit props from the parent WeatherList and be displayed to the 
screen.
*/

import _ from 'lodash';
import React from 'react';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';


function average(data) {
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
    return (
        <div>
            <Sparklines height={120} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="mean"/>
            </Sparklines>
            <div>Average: {average(props.data)} {props.units}</div>
        </div>
    );
}
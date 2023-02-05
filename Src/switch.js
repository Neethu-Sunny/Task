var day='Friday';
switch(day)
{
    case'monday':console.log('monday');
    break;
    case'tuesday':console.log('tuesday');
    break;
    case'wednesday':console.log('wednesday');
    break;
    case'thursday':console.log('thursday');
    break;
    case'Friday':console.log('Friday');
    break;
    case'saturday':console.log('saturday');
    break;
    case'sunday':console.log('sunday');
    break;
    default:console.log('not a day');
}

var weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var d=new Date();
var day = weekday[d.getDay()];

switch(day)
{
    case'Monday':console.log('Monday');
    break;
    case'Tuesday':console.log('Tuesday');
    break;
    case'Wednesday':console.log('Wednesday');
    break;
    case'Thursday':console.log('Thursday');
    break;
    case'Friday':console.log('Friday');
    break;
    case'Saturday':console.log('Saturday');
    break;
    case'Sunday':console.log('Sunday');
    break;
    default:console.log('not a day');
}



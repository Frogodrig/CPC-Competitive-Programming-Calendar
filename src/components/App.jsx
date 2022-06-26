import React, {useState, useEffect} from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Filter from './Filter';
import FilterButton from './FilterButton';
import TodayButton from './TodayButton';
import callAPI from '../api/api';
import ContestDisplay from './ContestDisplay';

//Platforms to be shown as checkboxes 
export const platforms = ['CodeChef', 'CodeForces', 'GeeksForGeeks', 'HackerEarth', 'LeetCode',  'TopCoder', 'AtCoder', 'Google'];

function App() {

    //Filter button state tracking
    const [filter, setFilter] = useState(true);


    //Today button state tracking
    const [today, setToday] = useState(false);


    //Tracking state of the render button
    const [renderButton, setRenderButton] = useState(false);

    
    //Tracking the state of data in the form of an object fetched from API/localstorage ({Data: {Meta: , Objects:[]}})
    const [contestData, setContestData] = useState({
        data: {objects: [
            {
                href:"",
                resource:"",
                start: "",
                end:"",
                event:"",
                date:"",
                time:"",
                duration:""
            }
        ]}
    });


    //To track the state of checkbox (whether clicked or not and store as boolean)
    const [checkedStates, setCheckedStates] = useState(
        [false,false,false,false,false,false,false,false]
    );


    //handling checkbox clicks
    function handleOnClick(position) {
        const temp = checkedStates;
        temp[position] = !temp[position];
        setCheckedStates(temp);
    }


    //handling today/upcoming clicks
    function handleToday() {
        setToday(!today);
    }


    //setting the state of a dummy button named render to trigger re-render
    function handleRenderButton() {
        setRenderButton(!renderButton);
    }
    

    //So that the app wont crash on the very first run (Meaning when the localstorage is null)
    useState(() => {
        if(localStorage.getItem('hosts') === null) {
            var initialHosts = ['CodeChef', 'CodeForces'];
            var initialHostsDomain = ['codechef.com', 'codeforces.com'];
            localStorage.setItem('hosts', JSON.stringify(initialHosts));
            localStorage.setItem('hostsToFilter', JSON.stringify(initialHostsDomain));
            setCheckedStates([true,true,false,false,false,false,false,false]);
        }
    })
    
   
    //Get the data from API and store in localstorage ()=>{}
    const init = () => {


        //Today's date with time set to 00:00:00 hrs
        var todayStart = new Date();
        todayStart.setHours(0, 0, 0);


        //Storing the time of when the data was fetched
        const TS = new Date(localStorage.getItem("timeStamp"));


        //Checking if contest data is already present or if the contest data has become old (fetched before 00:00 hrs)
        if (localStorage.getItem("contests") === null || TS < todayStart) {
            callAPI()
                .then(data => {
                    var tempData = data;
                    const timeStamp = new Date();
                    localStorage.setItem("contests", JSON.stringify(tempData));
                    setContestData(tempData);
                    localStorage.setItem("timeStamp", timeStamp);
                })
            } else {
                var tempDataText = localStorage.getItem('contests');
                var tempData = JSON.parse(tempDataText);
                setContestData(tempData);
            }
    }


    //Similar to componentDidMount (Runs after Render, async functions should be placed here)
    useEffect(() => {
        init();
    },[]);
    
    
    return(
        <div>
            <Header />
            <FilterButton onClick={() => {setFilter(!filter)}} state={filter} />
            <div className={filter ? 'show' : 'hide'}>
                <div className='filter'>
                    {platforms.map((platform, index) => {
                        return (
                                <Filter onClick={() => {handleOnClick(index)}} key={index} platform={platform} index={index} state={checkedStates[index]} />
                            );
                    })}
                </div>
            </div>
            <TodayButton onClick={handleToday} today={today}  />
            <button onClick={handleRenderButton} className=' render-button btn mx-4'>RENDER</button>
            <div className='contest-container'>
                {contestData.data.objects.map((contest, index) => {
                    return(<ContestDisplay key={index} index={index} href={contest.href} resource={contest.resource} start={contest.start} end={contest.end} event={contest.event}  date={contest.date} time={contest.time} duration={contest.duration} today={today} />);
                })}    
            </div>
            <Footer />
        </div>
    );

}

export default App;
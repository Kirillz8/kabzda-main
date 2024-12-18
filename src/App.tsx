import React, {useState} from 'react';
import './App.css';
import {Rating} from './components/Rating/Rating';
import {Accordion} from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import {UnControlledOnOff} from './components/UnControlledOnOff/UnControlledOnOff';
import {UnControlledAccordion} from './components/UnControlledAccordion/UnControlledAccordion';
import {UnControlledRating} from './components/UnControlledRating/UnControlledRating';
import {Clock} from './components/Clock/Clock';

type PagePropsType = {
    title: string
}

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

function App() {

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [switchOn, setSwitchOn] = useState<boolean>(false)
    const changeCollapse = () => setAccordionCollapsed(!accordionCollapsed)

    return (
        <div className="App">
            <PageTitle title="This is App Component"/>
            <PageTitle title="My friends"/>
            Article 1

            <Rating value={ratingValue} onClick={setRatingValue}/>

            <UnControlledAccordion titleValue="Menu"/>
            <UnControlledAccordion titleValue="Users"/>


            {/*<UnControlledRating />*/}
            Article 2
            <Rating value={0} onClick={() => {
            }}/>
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UnControlledOnOff onChange={setSwitchOn}/>
            {switchOn.toString()}

            <Clock/>
        </div>
    );
}

function PageTitle({title}: PagePropsType) {
    return <h3>{title}</h3>
}


export default App;

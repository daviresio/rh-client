import React, {useState} from 'react';

const TabCard = ({tabTitle, color, content, start}) => {

    const [tabActive, changeTab] = useState(0);

    return (
        <div className={'card-borda'}>

            <div className={`card-borda-header ${color}`}>
                <div className={'card-tab-header'}> {tabTitle.map((v, i)=>
                    <div key={v} onClick={()=> changeTab(i)} className={`card-tab-title ${tabActive === i ? 'card-tab-active' : ''}`}>{v}</div>)}</div>
            </div>

            <div className={start ? 'card-borda-body card-borda-body-start' : 'card-borda-body'}>
                {content[tabActive]}
            </div>


        </div>
    );
};

export default TabCard;

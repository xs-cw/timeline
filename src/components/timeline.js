import React, { useEffect, useState } from 'react';
import { Timeline, Radio } from 'antd';
import axios from 'axios';
import 'antd/dist/antd.css';
import CardInfo from './cardinfo';

let url = "http://localhost:8080/v1/getlist"

function GetList() {
    const [list, setList] = useState([])
    useEffect(() => {
        queryList();
    }, [])
    const queryList = () => {
        axios.get(url)
            .then((response) => { setList(response.data) })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        list.map((card, i) => {
            console.log(card);
            return (
                <Timeline.Item key={i} label={card.time}>
                    <CardInfo value={card} />
                    {/* {card.info} */}
                </Timeline.Item>
            );
        })
    );

}

function TimelimeLabel() {
    const [mode, setMode] = useState('left');

    const onChange = e => {
        setMode(e.target.value);
    };

    return (
        <>
            <Radio.Group
                onChange={onChange}
                value={mode}
                style={{
                    marginBottom: 20,
                }}
            >
                <Radio value="left">Left</Radio>
                <Radio value="right">Right</Radio>
                <Radio value="alternate">Alternate</Radio>
            </Radio.Group>
            <Timeline mode={mode}>
                {GetList()}
            </Timeline>
        </>
    );
}

export default TimelimeLabel;
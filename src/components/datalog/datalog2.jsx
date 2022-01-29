import React, { useState, useEffect } from "react";
import { Table } from "semantic-ui-react";
import axios from 'axios';
import "./datalog2.css"
export default function Datalog2() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [APIdata, setAPIdata] = useState([]);
    const [refresh, setRefresh] = useState([]);

    useEffect(()=>{
        axios.get('https://sheet.best/api/sheets/904d1e7c-bf4c-49e5-8971-d587ce5d1514')
        .then((incomingData) => {
            setAPIdata(incomingData.data);
        })
    }, [])
    return (
        <div>
        <Table className="table" fixed style={{"borderWidth":"10px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell className="Temp">Temperature</Table.HeaderCell>
            <Table.HeaderCell className="Humid">Humidity</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

    <Table.Body>
     {APIdata.map((data) => {
         return (
             <Table.Row>
                <Table.Cell className="Tempdata">{data.temp}</Table.Cell>
                <Table.Cell className="Humiddata">{data.humid}</Table.Cell>
            </Table.Row>
         )
     })}
    </Table.Body>
  </Table>
        </div>
    )
}

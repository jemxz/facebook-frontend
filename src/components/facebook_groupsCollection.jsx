import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { getFullDb } from '../services/fullDbService';
class GroupsCollection extends Component {
    state = { 
        groupsCollection: []
     };

     async componentDidMount() {
        const { data } = await getFullDb()
        console.log(data); 
        const groupsCollection = [ ...data];
        this.setState({groupsCollection})
     }

    render() { 
        return ( 
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th># id</th>
                        <th>Date of Scrape</th>
                        <th>Number Of Groups</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.groupsCollection.map(groupsItems => (
                            <tr>
                                <td>{groupsItems._id}</td>
                                <td>{groupsItems.date}</td>
                                <td>{groupsItems.groups.length}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>         
            </div>
         );
    }
}
 
export default GroupsCollection;
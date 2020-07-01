import React, { Component } from 'react';

import TableHead from '../TableHead/TableHead';
import TableBody from '../TableBody/TableBody';

class Table extends Component {
    render() {
        let student = this.props.studen.map((students, index) => {
            return <TableBody key={index} name={students.name} age={students.age} sex={students.sex} address={students.address} />
        })
        return (
            <div>
                <table>
                    <TableHead />
                    {student}
                </table>
            </div>
        );
    }
}

export default Table;

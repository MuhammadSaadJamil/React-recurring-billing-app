import React from 'react';
import './subscription.css'
import Table from "react-bootstrap/Table";

function Subscription({plan}) {
    return (
        <div className="subscription-card">
            <div className="card-head">
                <h2>{plan.name}</h2>
            </div>
            <div className="card-detail">
                <Table>
                    <tbody>
                    <tr>
                        <th>Monthly Fee</th>
                        <td>{plan.monthly_fee}$</td>
                    </tr>
                    <tr>
                        <th>Features</th>
                        <td>
                            <ul>
                                {plan.features.map(feature => <li key={feature.id}>{feature.name}</li>)}
                            </ul>
                        </td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default Subscription;
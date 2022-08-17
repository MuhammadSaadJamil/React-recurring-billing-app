import React from 'react';
import './buyer.css'
import Layout from "../layout/Layout";
import Table from "react-bootstrap/Table";
import useAxios from "../../hooks/useAxios";
import {fullNameOrNA} from './helper';
import active from '../../assets/active.png'
import inactive from '../../assets/inactive.png'

function Buyer(props) {
    const [data, error, empty] = useAxios('buyers')
    return (
        <Layout heading={"Buyers"}>
            {error
                ? <div className="alert alert-danger">{error.message}</div>
                : <Table borderless hover className={'scroll-table'}>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Active</th>
                        <th>Joining Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!empty &&
                        data.map((entry, no) => (
                                <tr key={entry.id}>
                                    <td>{no + 1}</td>
                                    <td>{entry.email}</td>
                                    <td>{fullNameOrNA(entry.first_name, entry.last_name)}</td>
                                    <td>{entry.is_active
                                        ? <img src={active} alt="Active" className="icon-img"/>
                                        : <img src={inactive} alt="Active" className="icon-img"/>
                                    }
                                    </td>
                                    <td>{new Date(entry.date_joined).toDateString()}</td>
                                </tr>
                            )
                        )
                    }

                    </tbody>
                </Table>
            }
        </Layout>
    );
}

export default Buyer;
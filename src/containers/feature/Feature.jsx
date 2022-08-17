import React from 'react';
import './feature.css'
import useAxios from "../../hooks/useAxios";
import Table from "react-bootstrap/Table";
import Layout from "../layout/Layout";

function Feature(props) {
    const [data, error, empty] = useAxios('features', true)
    return (
        <Layout heading={"Features"}>
            {error
                ? <div className="alert alert-danger">{error.message}</div>
                : <Table borderless hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Max Unit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {!empty &&
                        data.map((entry, no) => (
                                <tr key={entry.id}>
                                    <td>{no + 1}</td>
                                    <td>{entry.name}</td>
                                    <td>{entry.unit_price}$</td>
                                    <td>{entry.max_unit_limit}</td>
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

export default Feature;
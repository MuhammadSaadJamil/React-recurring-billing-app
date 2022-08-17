import React from 'react';
import './home.css'
import Layout from "../layout/Layout";
import useAxios from "../../hooks/useAxios";
import {Subscription} from "../../components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Home(props) {
    const [data, error, empty] = useAxios('plans')
    console.log(data)
    return (
        <Layout heading={'Subscriptions'}>
            {error
                ? <div className="alert alert-danger">{error.message}</div>
                : <Row>
                    {!empty && data.map((entry) => (
                        <Col md={4} sm={12} key={entry.id}>
                            <Subscription plan={entry}/>
                        </Col>
                    ))}
                </Row>
            }
        </Layout>
    );
}

export default Home;
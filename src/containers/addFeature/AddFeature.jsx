import React from 'react';
import './addFeature.css'
import {FeatureForm} from "../../components";
import Layout from "../layout/Layout";

function AddFeature(props) {
    return (
        <Layout heading={"Add Feature"}>
            <FeatureForm/>
        </Layout>
    );
}

export default AddFeature;
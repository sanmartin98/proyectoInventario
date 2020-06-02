import React, {Component} from 'react';
import Axios from 'axios';
import RecordList from './RecordList';

export default class View extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount(){
        Axios.get('http://localhost/inventarioPhpCrud/getProducts.php')
        .then(response => {
            this.setState({ products:response.data });
            console.log(this.state.products);
        })
        .catch(function (error){
            console.log(error);
        })
    }

    productList(){
        return this.state.products.map(function(object, i){
            return <RecordList obj = {object} key = {i} />;
        });
    }

    render(){
        return(
            <div>
                <h3 align = "center">Lista de productos</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>PRECIO</th>
                            <th>PESO</th>
                            <th>CATEGORIA</th>
                            <th>STOCK</th>
                            <th>FECHA CREACION</th>
                            <th>FECHA ULTIMA VENTA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.productList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
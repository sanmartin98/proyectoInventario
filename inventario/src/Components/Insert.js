import React, {Component} from 'react';
import Axios from 'axios';

export default class Insert extends Component {
    constructor(props){
        super(props);
        this.onChangeNombre = this.onChangeNombre.bind(this);
        this.onChangeRef = this.onChangeRef.bind(this);
        this.onChangePrecio = this.onChangePrecio.bind(this);
        this.onChangePeso = this.onChangePeso.bind(this);
        this.onChangeCategoria = this.onChangeCategoria.bind(this);
        this.onChangeStock = this.onChangeStock.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            nombre: '',
            ref: '',
            precio: '',
            peso: '',
            categoria: '',
            stock: ''
        }

    }

    onChangeNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }

    onChangeRef(e){
        this.setState({
            ref: e.target.value
        })
    }

    onChangePrecio(e){
        this.setState({
            precio: e.target.value
        })
    }

    onChangePeso(e){
        this.setState({
            peso: e.target.value
        })
    }

    onChangeCategoria(e){
        this.setState({
            categoria: e.target.value
        })
    }

    onChangeStock(e){
        this.setState({
            stock: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();

        let date = new Date()

        let day = date.getDate()
        let month = date.getMonth() + 1
        let year = date.getFullYear()
        let fec =  ""

        if(day<10){
            day = "0" + day
        }
        if(month < 10){
            fec = year + "0" + month + day 
        }else{
            fec = year + month  + day
        }

        const obj = {
            nombre: this.state.nombre,
            ref: this.state.ref,
            precio: this.state.precio,
            peso: this.state.peso,
            categoria: this.state.categoria,
            stock: this.state.stock,
            fechaCreacion: fec,
            fechaVenta: fec
        };
        
        Axios.post('http://localhost/inventarioPhpCrud/insertProducts.php', obj)
        .then(res => console.log(res.data));

        this.setState = {
            nombre: '',
            ref: '',
            precio: '',
            peso: '',
            categoria: '',
            stock: ''
        }
        
    }

    render(){
        return(
            <div style={{marginTop:10}}>
            <h2>Insertar nuevo producto</h2>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="inputName">Nombre del producto</label>
                    <input type="text" value={this.state.nombre} className="form-control" id="inputName" placeholder="Nombre" onChange={this.onChangeNombre}></input>
                </div>
                <div className="form-group">
                    <label htmlFor="inputRef">Referencia del producto</label>
                    <input type="text" value={this.state.ref} className="form-control" id="inputRef" placeholder="Referencia" onChange={this.onChangeRef}></input>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPrecio">Precio del producto</label>
                        <input type="number" value={this.state.precio} className="form-control" id="inputPrecio" placeholder="Precio" onChange={this.onChangePrecio}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputPeso">Peso del producto</label>
                        <input type="number" value={this.state.peso} className="form-control" id="inputPeso" placeholder="Peso" onChange={this.onChangePeso}></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputCategoria">Categoria del producto</label>
                        <input type="text" value={this.state.categoria} className="form-control" id="inputCategoria" placeholder="Categoria" onChange={this.onChangeCategoria}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputStock">Stock del producto</label>
                        <input type="number" value={this.state.stock} className="form-control" id="inputStock" placeholder="Stock" onChange={this.onChangeStock}></input>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Registrar producto</button>
            </form>

            </div>
        )
    }
}
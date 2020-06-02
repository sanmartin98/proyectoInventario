import React, { Component } from 'react';

export default class RecordList extends Component {
    render(){
        return (
            <tr>
                <td>
                    {this.props.obj.id}
                </td>
                <td>
                    {this.props.obj.nombre}
                </td>
                <td>
                    {this.props.obj.precio}
                </td>
                <td>
                    {this.props.obj.peso}
                </td>
                <td>
                    {this.props.obj.categoria}
                </td>
                <td>
                    {this.props.obj.stock}
                </td>
                <td>
                    {this.props.obj.fecha_creacion}
                </td>
                <td>
                    {this.props.obj.fecha_ult_venta}
                </td>
                <td>
                    <button className="btn btn-primary">Editar</button>
                </td>
                <td>
                    <button className="btn btn-danger">Eliminar</button>
                </td>
            </tr>
        );
    }
}
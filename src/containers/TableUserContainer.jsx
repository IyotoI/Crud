import React from "react";
import TableUserComponent from "../components/TableUserComponent";
import HeaderComponent from "../components/HeaderComponent";

const styles = { width: '400px'}

const TableUserContainer = (props) => {
  const deleteUser = (id) => {
    const option = window.confirm("¿Esta seguro?");
    if (option) {
      props.deleteUser(id);
    }
  };

  const editUser = (item) => {
    props.setItemSelected(item);
    props.setRoute("formUser");
    props.setModeEdition(true);
  };

  return (<article>
    <HeaderComponent textH1="Usuarios" textBtn="Formulario" action={() => props.setRoute("formUser")}/>
    <table className="table table-dark table-striped">
      <thead >
        <tr className='d-block '>
          <th style={styles} scope="col">Nombre</th>
          <th style={styles} scope="col">Editar</th>
          <th style={styles} className=''  scope='col'>Eliminar</th>
        </tr>
      </thead>
      <tbody className='d-block' style={{height: '300px', overflow: 'auto'}}>
        {props.users.map((u) => (<TableUserComponent styles={styles} deleteUser={deleteUser} editUser={editUser} user={u} key={u.id}/>))}
      </tbody>
    </table>

  </article>);
};

export default TableUserContainer;

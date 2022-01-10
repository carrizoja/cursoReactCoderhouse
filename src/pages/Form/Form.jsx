import React, { useState} from "react";
import { Link } from "react-router-dom";
import "firebase/firestore";
import {useCartContext } from '../../components/CartContext/CartContext.jsx'
import {  addDoc, collection,getFirestore, Timestamp, writeBatch, doc} from "firebase/firestore"
import '../Form/Form.scss'

function Field({
  name,
  inputLabel,
  nameField,
  style,
  type,
  id,
  placeholder,
  valueInput,
  onChange,
}) {
  return (
    <>
      <div className="col-sm-6">
        <label
          htmlFor={inputLabel}
          name={name}
          className="form-label"
          style={style}
        >
          {nameField}
        </label>
        <input
          type={type}
          value={valueInput}
          className="form-control"
          id={id}
          placeholder={placeholder}
          required
          onChange={onChange}
        ></input>
      </div>
    </>
  );
}

const Form = () => {
  const { cartList, totalPrice, deleteShoppingCart } = useCartContext();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [sent, setSent] = useState(false);
  const [idOrder, setIdOrder] = useState('')
  

  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  };
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onEmailConfirmChange = (event) => {
    setEmailConfirm(event.target.value);
  };

  // Validador de los campos de Email
  function emailValidation(){
  
   //eslint-disable-next-line
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if(regex.test(email) === false){    
        return false;
    }
    return true;
}

// Validador del campo nombre
function nameValidation(){
  const regex = /^[a-zA-Z\s]*$/;
  if(regex.test(name) === false){    
      return false;
  }
  return true;
}

  async function createOrder() {

    setSent(true);
  
    // Nuevo objeto
    let order = {}
    order.date = Timestamp.fromDate(new Date())
    order.buyer ={name:name,phone:phone,email:email}
    order.total = totalPrice();
    
    // Calculo items
    order.items = cartList.map(cartItem => {
      const id = cartItem.id;
      const name = cartItem.name;
      const price = cartItem.price * cartItem.quantity;
      const quantity = cartItem.quantity;
      return { id, name, price, quantity }

    }) 

    // actualizar stock

  function updateStock() {
    const batch = writeBatch(db)
      order.items.map (itemUpdate => { 
      
      const docUpdate = doc(db, 'items', itemUpdate.id)
      const currentStock = cartList.find(item => item.id === itemUpdate.id).stock
      batch.update(docUpdate, {
        stock: currentStock - parseInt(itemUpdate.quantity) 

      });
      return {currentStock}
    })

    batch.commit()
  }

 /*  cartList.forEach(item => {
    counter += item.quantity;
}); */

    // Generar la orden 
    
    const db = getFirestore()
    const orderColection = collection(db, 'orders')
    addDoc(orderColection, order)
    .then(resp => setIdOrder(resp.id))
    .catch(err => console.log(err))
    .finally(()=> {
      deleteShoppingCart()
      updateStock()
  })



  }
  if (idOrder) {
    return (
      <>
        <div className="container">
          <div className="py-5 text-center mt-5">
            <h2 className="mt-5 txtConfirm">¡Gracias por elegirnos!</h2>
            <h4 className="my-5">La compra se ha realizado exitosamente.</h4>
            <strong>El ID de tu compra es {idOrder}</strong>
            <p className="txtConfirm">iJac IT Solutions</p>
            <Link className="btn btn-outline-primary m-3" to={`/`}>
              <strong>Ir a comprar</strong>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="text-center py-5 mt-5">
          <h4 className="mt-5">
            Completa el formulario con tus datos para confirmar la compra.
          </h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="row g-3">
                <Field
                  inputLabel="inputName"
                  name="name"
                  nameField="Nombre y Apellido"
                  valueInput={name}
                  style={{ paddingTop: "5px" }}
                  type="text"
                  id="inputName"
                  placeholder="Nombre y Apellido"
                  onChange={onNameChange}
                />
                <Field
                  inputLabel="inputPhone"
                  name="phone"
                  nameField="Teléfono"
                  valueInput={phone}
                  style={{ paddingTop: "10px" }}
                  type="number"
                  id="inputPhone"
                  placeholder="1133445566"
                  onChange={onPhoneChange}
                />
                <Field
                  inputLabel="inputEmail"
                  name="email"
                  nameField="Email"
                  valueInput={email}
                  style={{ paddingTop: "10px" }}
                  type="email"
                  id="inputEmail"
                  placeholder="mail@ejemplo.com"
                  onChange={onEmailChange}
                />
                <Field
                  inputLabel="inputConfirmEmail"
                  name="email"
                  nameField="Confirmar Email"
                  valueInput={emailConfirm}
                  style={{ paddingTop: "10px" }}
                  type="email"
                  id="inputConfirmEmail"
                  placeholder="mail@ejemplo.com"
                  onChange={onEmailConfirmChange}
                />
              </div>
              <button
                className="btn btn-outline-success btn-lg btn-block mt-5 btnConfirm"
                type="submit"
                disabled={
                  !name || !phone || !email || emailConfirm !== email || sent || emailValidation() === false || nameValidation() === false
                }
                onClick={createOrder}
                
              >
                <strong>Confirmar</strong>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

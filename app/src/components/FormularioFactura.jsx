import React from "react";
export function FormularioFactura(){
    return(
        <>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">NOMBRE USUARIO</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
        </>
    );
}
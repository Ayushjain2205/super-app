import React, { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import "react-bootstrap-country-select/dist/react-bootstrap-country-select.css";
import CountrySelect from "react-bootstrap-country-select";

function WalletForm() {
  const user = useContext(UserContext);
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <div className='container'>
      <div className='row mb-3'>
        <div class='col-sm'>
          <label className='form-label' htmlFor=''>
            First Name
          </label>
          <input className='form-control' type='text' name='' id='' />
        </div>
        <div class='col-sm'>
          <label className='form-label' htmlFor=''>
            Last Name
          </label>
          <input className='form-control' type='text' name='' id='' />
        </div>
        <div class='col-sm'>
          <label className='form-label' htmlFor=''>
            Email
          </label>
          <input className='form-control' type='email' name='' id='' />
        </div>
      </div>
      <div className='row mb-3'>
        <div class='col-sm'>
          <label className='form-label' htmlFor=''>
            Phone no.
          </label>
          <input className='form-control' type='phone' name='' id='' />
        </div>
        <div class='col-sm'>
          <label className='form-label' htmlFor=''>
            Date of birth
          </label>
          <input className='form-control' type='time' name='' id='' />
        </div>
      </div>

      <div className='row mb-3'>
        <div class='col-sm'>
          <label className='form-label' htmlFor=''>
            Address
          </label>
          <textarea
            className='form-control'
            type='date'
            name=''
            id=''
            rows='3'
          />
        </div>
      </div>

      <div className='row mb-3'>
        <div class='col-sm'>
          <label className='form-label' htmlFor=''>
            City
          </label>
          <input className='form-control' type='text' name='' id='' />
        </div>
        <div class='col-sm'>
          <label className='form-label' htmlFor=''>
            State
          </label>
          <input className='form-control' type='text' name='' id='' />
        </div>
      </div>

      <div className='row mb-3'>
        <div class='col-sm'>
          <label className='form-label' htmlFor=''>
            Country
          </label>
          <CountrySelect value={value} onChange={setValue} valueAs='id' />
        </div>
        <div class='col-sm'>
          <label className='form-label' htmlFor=''>
            Zipcode
          </label>
          <input className='form-control' type='text' name='' id='' />
        </div>
      </div>
    </div>
  );
}

export default WalletForm;

import React from "react";
import FAB from "../common/FAB";

import createWallet from "../../services/createWallet";
import deleteWallet from "../../services/deleteWallet";
// import walletTransactions from "../../services/walletTransactions";

function Mywallet() {
  return (
    <div className='container'>
      <FAB />
      <h1 className='page-name'>My Wallet</h1>
      <h5 className='wallet-id'>
        ID : 01019812391043 <i class='fas fa-copy'></i>
      </h5>
      <div className='split-money'>Split money with your frends</div>
      <p className='split-sub'>Add your friends using EmailID or WalletID</p>
      <div className='split-sections'>
        <div className='split-left'>
          <div className='row mb-3'>
            <div class='col-sm'>
              <label className='form-label' htmlFor=''>
                Email ID
              </label>
              <div className='input-split-field'>
                <input className='form-control' type='email' name='' id='' />
                <span className='invite-text'>Invite</span>
              </div>
            </div>
          </div>
          <div className='split-or'>Or</div>
          <div className='row mb-3'>
            <div class='col-sm'>
              <label className='form-label' htmlFor=''>
                Ewallet ID
              </label>
              <div className='input-split-field'>
                <input className='form-control' type='text' name='' id='' />
                <span className='invite-text'>Invite</span>
              </div>
            </div>
          </div>
        </div>
        <div className='split-right'>
          <h5>Wallet settings</h5>
          <div>
            <button className='wallet-btn category-btn btn btn-primary'>
              <span>Update Wallet Details</span>
              <span className='end-open'>
                <i class='fas fa-angle-right'></i>
              </span>
            </button>
          </div>
          <div>
            <button className='wallet-btn category-btn btn btn-primary'>
              <span>Add Funds</span>
              <span className='end-open'>
                <i class='fas fa-angle-right'></i>
              </span>
            </button>
          </div>
          <div>
            <button className='wallet-btn category-btn btn btn-primary'>
              <span>Delete Wallet</span>
              <span className='end-open'>
                <i class='fas fa-angle-right'></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mywallet;

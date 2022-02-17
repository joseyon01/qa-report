import React, { Fragment, useEffect } from 'react';

export const Report = () => {
  
  useEffect(() => {
    (function () {
      'use strict'
    
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')
    
      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            }
    
            form.classList.add('was-validated')
          }, false)
        })
    })()
  }, [])

  return (
    <Fragment>
      <div className="container">
        <main>
          <div className="py-3 text-center">
            {/*  <img
              className="d-block mx-auto mb-4"
              src="/docs/5.1/assets/brand/bootstrap-logo.svg"
              alt
              width={72}
              height={57}
            />
            <h2>Checkout form</h2>
            <p className="lead">
              Below is an example form built entirely with Bootstrap’s form
              controls. Each required form group has a validation state that can
              be triggered by attempting to submit the form without completing
              it.
            </p> */}
          </div>
          <div className="row g-5">
            {/* <div className="col-md-5 col-lg-4 order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Product name</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Second product</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Third item</h6>
                    <small className="text-muted">Brief description</small>
                  </div>
                  <span className="text-muted">$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between bg-light">
                  <div className="text-success">
                    <h6 className="my-0">Promo code</h6>
                    <small>EXAMPLECODE</small>
                  </div>
                  <span className="text-success">−$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>
              <form className="card p-2">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Promo code"
                  />
                  <button type="submit" className="btn btn-secondary">
                    Redeem
                  </button>
                </div>
              </form>
            </div> */}
            <div className="col-md-8 col-lg-8">
              <h4 className="mb-3">
                ENC NEW AND REFURBISHED OVENS QUALITY ASSURANCEB CHECKLIST
              </h4>
              <form className="needs-validation" noValidate>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="dateName" className="form-label">
                      Date
                    </label>
                    <input
                      type="date"
                      data-date-format="MM DD YYYY"
                      className="form-control"
                      id="dateName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid date is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      Inspected By:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="ovenName" className="form-label">
                      Oven S/N:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="ovenName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid first name is required.
                    </div>
                  </div>

                  <hr className="my-4" />

                  {/*FIRST INSPECTION*/}
                  <h5 className="mb-3">
                    VISUAL INSPECTION: DO NOT APPLY POWER TO OVEN
                  </h5>
                  <div className="my-3">
                    <p>
                      A - Check Consumables and Accesories to comply with proper
                      Packaging Kit.
                    </p>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="credit">
                        ACC
                      </label>

                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        
                        required
                      />
                    </div>
                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="debit">
                        NOT ACC
                      </label>
                    </div>
                  </div>

                  <div className="my-3">
                    <p>
                      B - Remove the Bubble wrap and insert the Oven
                      Rackinsuring flush contact with all surface.
                      <br />
                      Check IR Element lies flat Clips/Standoffs are tight and
                      in correct position. <br />
                      Check Waveguide Covers (at the ends only) by squezzing
                      with hands for looseness.
                    </p>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="credit">
                        ACC
                      </label>

                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        
                        required
                      />
                    </div>
                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="debit">
                        NOT ACC
                      </label>
                    </div>
                  </div>

                  <div className="my-3">
                    <p>
                      C - Check wiring CC & IR Heathers, Mag1 & 2, Dual SSr,
                      Mag, EC Fans, Convection Blower.
                      <br />
                      Hi-Limit and Control circuits.
                    </p>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="credit">
                        ACC
                      </label>

                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        
                        required
                      />
                    </div>
                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="debit">
                        NOT ACC
                      </label>
                    </div>
                  </div>

                  <div className="my-3">
                    <p>
                      D - Check for loose hardware and debris on floor of the
                      oven cabinet.
                    </p>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="credit">
                        ACC
                      </label>

                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        
                        required
                      />
                    </div>
                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="debit">
                        NOT ACC
                      </label>
                    </div>
                  </div>

                  <div className="my-3">
                    <p>
                      E - Check for Door flush to the Oven Flange (no pinching
                      on bottom), doors clears Louvered Panel?.
                    </p>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="credit">
                        ACC
                      </label>

                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        /* defaultChecked */
                        required
                      />
                    </div>
                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="debit">
                        NOT ACC
                      </label>
                    </div>
                  </div>

                  <div className="my-3">
                    <p>
                      F - Are the CC Heater Terminal Posts insulated with
                      Silicone Caps and Mica Disks?.
                    </p>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="credit">
                        ACC
                      </label>

                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        
                        required
                      />
                    </div>
                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="debit">
                        NOT ACC
                      </label>
                    </div>
                  </div>

                  <div className="my-3">
                    <p>
                      G - Split open insulation over Hi-Limit Capillary, is it
                      mounted in the correct position?.
                    </p>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="credit">
                        ACC
                      </label>

                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        
                        required
                      />
                    </div>
                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="debit">
                        NOT ACC
                      </label>
                    </div>
                  </div>

                  <div className="my-3">
                    <p>
                      H - Are Interlock Switches adjusted with actuator rotation
                      if door is colesd slowly,
                      <br />
                      are the switch arms .020&deg; to .030&deg; from swiotch
                      body? Is the Actuator at 87&deg; &#177; 2? .
                    </p>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="credit">
                        ACC
                      </label>

                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                    </div>
                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="debit">
                        NOT ACC
                      </label>
                    </div>
                  </div>

                  <hr className="my-4" />

                  {/*SECOND INSPECTION*/}
                  <h5 className="mb-3">
                    OPERATIONAL INSPECTION: DO NOT APPLY POWER TO OVEN
                  </h5>

                  <p>
                    A - Using the OHMS function on your meter Measure and
                    Recoird the resistances between the: <br />
                    i) Frame and the Ground Pin on the Plug:
                  </p>

                  <div className="col-12">
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <br />

                  <p>
                    B - Remove the fastons from the Primary and the Secondary of
                    the High Voltage and the Filament XFMRs. <br />
                  </p>
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      ii) HV : XFMR #1 Primary (terminal 1 & 2)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      (terminal 1 & 3)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>
                  <br />

                  <p>
                    <b />
                  </p>
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      iii) HV : XFMR #1 Secondary (terminal and the frame)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      iv) HV : XFMR #2
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <p>
                    <b />
                  </p>
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      v) Filament XFMR #1 Primary (terminal 1 & 2)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      (terminal 1 & 3)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <p>
                    <b />
                  </p>
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      vi) Filament XFMR #2 Primary (terminal 1 & 2)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      (terminal 1 & 3)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <p>
                    <b />
                  </p>
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      vii) Filament XFMR #1 Secondary (terminal #4 & #5)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      viii) Filament XFMR #2 Secondary (terminal #4 & #5)
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <div className="my-3">
                    <br />
                    <p>
                      C- Open fuse #1, #2 and #3 and check rating. Class CC ATMR
                      12. ATMR 12 and ATMR 15 respectively.
                    </p>

                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="debit">
                        YES
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="debit">
                        NO
                      </label>
                    </div>
                  </div>

                  <p>
                    <b />
                    D - Plug in the oven, as the Display Boots, check for <b>displayed</b> software version:
                  </p>
                  <div className="col-sm-12">
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      placeholder="123456"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      Display Voltage: <b>VAC</b>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      S/N :
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <div className="my-3">
                    <br />
                    <p>DOES THE I/D PLATE HAVE CORRECT VOLTAGE RATING?</p>

                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="debit">
                        YES
                      </label>
                    </div>

                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="debit">
                        NO
                      </label>
                    </div>
                  </div>

                  <p>
                    <b />
                    E- Set you meter to Volts AC: Measure the AC voltage at EMI Filter Terminals. <b>(VAC)</b>
                  </p>

                  <div className="col-sm-6">
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>
                  
                  <div className="my-3">
                    <br />
                    <p>
                    F- Using an insulated screwdriver check the EC Cooling Fan by bridging between the terminals on the "Close on Rise"
                    <br />
                    Switch, wich controls the EC cooling fan.
                    </p>
                    <div className="form-check">
                      <label className="form-check-label" htmlFor="credit">
                        Pass
                      </label>

                      <input
                        id="credit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                    </div>
                    <div className="form-check">
                      <input
                        id="debit"
                        name="paymentMethod"
                        type="radio"
                        className="form-check-input"
                        required
                      />
                      <label className="form-check-label" htmlFor="debit">
                        Fail
                      </label>
                    </div>
                  </div>

                  <p>            
                      G- Water Rise Test: Place Oven into the "UNIT" mode, and the scroll down to "Microwave" on the first screen.
                      <br />
                  </p>

                  <div className="col-sm-12">
                    <label htmlFor="firstName" className="form-label">
                      i) Using Graduate Cylinder measure 1 liter &#177; 5ml of water While in graduate cylinder, measure and the<br/>
                       record the temp, <b>Tinitial =</b>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <p>Enter temperature "T initial" via Keypad.</p>
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <p>            
                    ii)- Immediately pour water into 1000 ml vessel, place into Cook Chamber and close the door.
                      <br />
                  </p>

                  <p>            
                    iii)- Press "ENTER". The microwave will run for 30 seconds.
                      <br />
                  </p>

                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      iv)  While tes runnig, Verify the current is 9.2amps &#177; 2amps. (208V)  -    <b>(W)</b>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <p>(10.64 amps &#177; 1.6 amps for the unit tested with 240V).</p>
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <br />
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      v) When the timer reaches Zero, immediately measure Tfinal while stirring to blend water as to have 
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <p>one tempearture throughout vesse. <b>Tfinal (&#8451;)</b> Enter Tfinal via Keypad.</p>
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      vi) The power output will show for 5 seconds. Record microwave oven output power  <b>(W)</b>
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>
                      
                  <p>            
                    <b><em><u> Output Power must be &ge; 1600 W. But if it's more than 2000 W, repeat this test </u></em></b>
                      <br />
                  </p>

                  <p>
                    I) Push "BACK" until display reads: "OVEN OFF" and the push the "OVEN ON" smart key and let the oven warm <br />
                    to its preset temperature. Record time oven start warm up: (Time Start). Once the Oven and then record the time <br />
                    (Time Final). This time should be <b>15 minutes or less!</b>. Let Oven "heat soak" for 1 hour.
                  </p>

                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      Time Start
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      Time Final
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      MENU #
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="firstName"
                      required
                    />
                    
                    <div className="invalid-feedback">
                      Valid inspected name is required.
                    </div>
                  </div>

                  <p>
                    <br />
                    <u>NOTES</u>
                    
                  </p>

                  <div className="col-sm-12">
                    <textarea name="notes" id="notes" cols="80" rows="20"></textarea>

                  </div>
                  
                  
                  
                  <div className="col-12">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <div className="input-group has-validation">
                      <span className="input-group-text">@</span>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Username"
                        required
                      />
                      <div className="invalid-feedback">
                        Your username is required.
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="you@example.com"
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address for shipping updates.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="1234 Main St"
                      required
                    />
                    <div className="invalid-feedback">
                      Please enter your shipping address.
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="address2" className="form-label">
                      Address 2 <span className="text-muted">(Optional)</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address2"
                      placeholder="Apartment or suite"
                    />
                  </div>
                  <div className="col-md-5">
                    <label htmlFor="country" className="form-label">
                      Country
                    </label>
                    <select className="form-select" id="country" required>
                      <option value>Choose...</option>
                      <option>United States</option>
                    </select>
                    <div className="invalid-feedback">
                      Please select a valid country.
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="state" className="form-label">
                      State
                    </label>
                    <select className="form-select" id="state" required>
                      <option value>Choose...</option>
                      <option>California</option>
                    </select>
                    <div className="invalid-feedback">
                      Please provide a valid state.
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="zip" className="form-label">
                      Zip
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      required
                    />
                    <div className="invalid-feedback">Zip code required.</div>
                  </div>
                </div>
                <hr className="my-4" />
                {/* <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="same-address"
                  />
                  <label className="form-check-label" htmlFor="same-address">
                    Shipping address is the same as my billing address
                  </label>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="save-info"
                  />
                  <label className="form-check-label" htmlFor="save-info">
                    Save this information for next time
                  </label>
                </div>
                <hr className="my-4" />
                <h4 className="mb-3">Payment</h4>
                <div className="my-3">
                  <div className="form-check">
                    <input
                      id="credit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      defaultChecked
                      required
                    />
                    <label className="form-check-label" htmlFor="credit">
                      Credit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="debit"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" htmlFor="debit">
                      Debit card
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      id="paypal"
                      name="paymentMethod"
                      type="radio"
                      className="form-check-input"
                      required
                    />
                    <label className="form-check-label" htmlFor="paypal">
                      PayPal
                    </label>
                  </div>
                </div>
                <div className="row gy-3">
                  <div className="col-md-6">
                    <label htmlFor="cc-name" className="form-label">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-name"
                      placeholder
                      required
                    />
                    <small className="text-muted">
                      Full name as displayed on card
                    </small>
                    <div className="invalid-feedback">
                      Name on card is required
                    </div>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="cc-number" className="form-label">
                      Credit card number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-number"
                      placeholder
                      required
                    />
                    <div className="invalid-feedback">
                      Credit card number is required
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-expiration" className="form-label">
                      Expiration
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-expiration"
                      placeholder
                      required
                    />
                    <div className="invalid-feedback">
                      Expiration date required
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label htmlFor="cc-cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cc-cvv"
                      placeholder
                      required
                    />
                    <div className="invalid-feedback">
                      Security code required
                    </div>
                  </div>
                </div>
                <hr className="my-4" /> */}
                <button className="w-100 btn btn-primary btn-lg" type="submit">
                  Continue to checkout
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

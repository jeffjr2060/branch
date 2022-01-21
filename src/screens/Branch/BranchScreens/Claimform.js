import React, { useState } from 'react'
import { Field, Form, Formik } from 'formik';
import '../BranchStyles/claimform.css'

function Claimform() {

  const [carRegistration, setCarRegistration] = useState('');
  const [name, setName] = useState('');
  const [hirePurchaseCompany, setHirePurchaseCompany] = useState('');
  const [tellno, setTellno] = useState('');
  const [address, setAddress] = useState('');
  const [occupation, setOccupation] = useState('');
  const [make, setMake] = useState('');
  const [cc, setCC] = useState('');
  const [capacity, setCapacity] = useState('');
  const [trailerReg, setTrailerReg] = useState('');
  const [trailerCapacity, setTrailerCapacity] = useState('');
  const [chassisNumber, setChassisNumber] = useState('');
  const [ownersName, setOwnersName] = useState('');
  const [ownersAddress, setOwnersAddress] = useState('');
  const [manufactureYear, setManufactureYear] = useState('');
  const [dol, setDol] = useState('');

  const arr = [{
    Policyno: '077/084/1/000202/2010/09',
    Carreg: 'KAQ 057C',
    Name: 'Benson Kariuki',
    Address: 'Nakuru',
    Tellno: '0722774531',
    cc: 1500,
    Occupation: 'Businessman',
    Periodfrom: new Date(2022, 1, 1),
    Periodto: new Date(2023, 1, 1),
    Hirepurchase: 'T.B.A',
    Make: 'TOYOTA HIACE',
    Yearofmanufacture: new Date(2005, 1, 1),
    carryingCapacity: 14,
    TrailerRegno: 'N/A',
    chasisno: 'SV30-0169266'
  }];

  const handleCarRegInput = (e) => {
    setCarRegistration(e.target.value);
    const val = e.target.value
    const policy = arr.find(o => o.Carreg === val);

    if (policy) {
      setName(policy.Name);
      setHirePurchaseCompany(policy.Hirepurchase);
      setTellno(policy.Tellno);
      setAddress(policy.Address);
      setOccupation(policy.Occupation);
      setMake(policy.Make);
      setCC(policy.cc);
      setCapacity(policy.carryingCapacity);
      setTrailerReg(policy.TrailerRegno);
      setTrailerCapacity(0);
      setOwnersName(policy.Name);
      setOwnersAddress(policy.Address);
      setChassisNumber(policy.chasisno);
    } else {
      setName('');
      setHirePurchaseCompany('');
      setTellno('');
      setAddress('');
      setOccupation('');
      setMake('');
      setCC('');
      setCapacity('');
      setTrailerReg('');
      setTrailerCapacity('');
      setOwnersName('');
      setManufactureYear();
      setOwnersAddress('');
      setChassisNumber('');
    }

    console.log(carRegistration);
  }


  const validateClaim = (date) => {
    const date_loss = new Date(date);
    let policy = arr[0];

    let periodFrom = policy.Periodfrom;
    let periodTo = policy.Periodto;

    console.log(date_loss < periodTo);
    if (date_loss > periodFrom && date_loss < periodTo) {
      console.log("During date of loss Policy was not expired");
    } else {
      console.log("During date of loss Policy was expired");
    }
  }


  return (
    <div className='container'>
      <div className='containerHolder'>
        <Formik>
          <Form className='formContainer'>
          <div className='firstColumn'>
            <div className='left'>
            <label htmlFor="person">Who is reporting</label>
            <Field id="person " as="select" name="Person">
              <option value="Insured">Insured</option>
              <option value="ThirdParty">Third Party</option>
              <option value="Agent">Agent</option>
            </Field>
            </div>
          <div className='center'>
          <label htmlFor="dol">Enter Date of Loss</label>
                 <input
                    id="dol"
                    type="date"
                    name='DOL'
                  />
            </div> 
          <div className='Right'>       
            <label htmlFor="carreg"> Enter the Car Registration</label>
            <input
              id="carreg"
              name="Car Reg"
              type="text"
              value={carRegistration}
              onChange={handleCarRegInput}
            />
            </div>
            </div>
         <div>POLICY DETAILS</div>
           <div className='secondColumn'>
            <label htmlFor="expiry">Policy Expiry Date</label>
            <input
              id="expiry"
              name="Expiry"
              type="Date"
            />
          <label htmlFor='carreg'>Car Registration</label>
                  <input 
                    id='carreg'
                    type='text'
                    name='Carreg'
          />
            <label htmlFor="hirepurchase">Name of hire purchase of finance company</label>
            <input
              id="hirepurchase"
              name="hire purchase"
              type="text"
              value={hirePurchaseCompany}
            />
          </div>
          <div className='firstColumn'>
          <label htmlFor="tellno"> Policy Holder's Tell No.</label>
            <input
              id="tellno"
              name="Tell"
              type="number"
              value={tellno}
            />
            <label htmlFor="name">Enter Name</label>
            <input
              id="name"
              name="Name"
              type="text"
              value={name}
            />
          
            <label htmlFor="address">Address</label>
            <input
              id="address"
              name="Address"
              type="text"
              value={address}
            />
            <label htmlFor="occupation">Business/Occupation</label>
            <input
              id="occupation"
              name="Address"
              type="text"
              value={occupation}
            />
            </div> 
            {/**VEHICLE */}
            <div>VEHICLE</div>
            <label htmlFor="make">Make & Model</label>
            <input
              id="make"
              name="Make"
              type="text"
              value={make}
            />
            <label htmlFor="hp/cc">HP / CC</label>
            <input
              id="hp/cc"
              name="HPCC"
              type="text"
              value={cc}
            />
            <label htmlFor="year">Year of Manufacture</label>
            <input
              id="year"
              name="Year"
              type="date"
              value={manufactureYear}
            />
            <label htmlFor="regno">Reg. No. of Vehicle</label>
            <input
              id="regno"
              name="Regno"
              type="text"
              value={carRegistration}
            />
            <label htmlFor="capacity">Carrying Capacity</label>
            <input
              id="capacity"
              name="Capacity"
              type="number"
              value={capacity}
            />
            <label htmlFor="trailer">Reg. No. of Trailer</label>
            <input
              id="trailer"
              name="Trailer"
              type="text"
              value={trailerReg}
            />
            <label htmlFor="capacity">Trailer Carrying Capacity</label>
            <input
              id="capacity"
              name="Capacity"
              type="number"
              value={trailerCapacity}
            />
            <label htmlFor="owner">Name of Owner</label>
            <input
              id="owner"
              name="Owner"
              type="text"
              value={ownersName}
            />
            <label htmlFor="address">Address of Owner</label>
            <input
              id="address"
              name="Addresss"
              type="text"
              value={ownersAddress}
            />
            <label htmlFor="Chassis">Chassis No</label>
            <input
              id="chassis"
              name="Chassis"
              type="text"
              value={chassisNumber}
            />
            <label htmlFor="Chassis">Date of Loss</label>
            <input
              id="chassis"
              name="Chassis"
              type="date"
              value={dol}
              onChange={e => {
                setDol(e.target.value);
                validateClaim(e.target.value);
              }}
            />
            {/**Vehicle ends */}
            {/**Use start */}
            <div>USE</div>
            <label htmlFor="person">State the exact puropse for which the Vehicle was being used at the time of accident</label>
            <Field id="person" as="select" name="Use">
              <option value="Own">Own use/ Private Use</option>
              <option value="PSV">PSV -ferrying Passengers</option>
              <option value="PARCKED">Packed</option>
              <option value="AnyOther">Any Other</option>
            </Field>
            {/**Use ends */}
            <div>FOR COMMERCIAL VEHICLE</div>
            <label htmlFor="description">Description of goods being carried</label>
            <input
              id="description"
              name="Description"
              type="text"
            />
            <label htmlFor="ownerdescription">Name of Owner of goods</label>
            <input
              id="ownerdescription"
              name="Ownerdescription"
              type="text"
            />
            <label htmlFor="ownerdescription">Was a trailer attached</label>
            <Field id="ownerdescription" as="select" name="Commercial">
              <option value="yes" name="Yes">Yes</option>
              <option value="no" name="No">No</option>
            </Field>
            <label htmlFor="weight">Weight of load on Vehicle</label>
            <input
              id="weight"
              name="Weight"
              type="text"
            />
            <label htmlFor="Tweight">Weight of load on Trailer</label>
            <input
              id="Tweight"
              name="TWeight"
              type="text"
            />
            {/**commercial ends */}
            {/**Driver section */}
            <div>DRIVER</div>
            <label htmlFor="driver">Name</label>
            <input
              id="driver"
              name="drivername"
              type="text"
            />
            <label htmlFor="driveroccupation">Occupation</label>
            <input
              id="driveroccupation"
              name="Driveroccupation"
              type="text"
            />
            <label htmlFor="dob">Actual Date of Birth</label>
            <input
              id="dob"
              name="DOB"
              type="date"
            />
            <label htmlFor="pobox">P.O.BOX</label>
            <input
              id="pobox"
              name="DOB"
              type="text"
            />
            <label htmlFor="code">Code</label>
            <input
              id="code"
              name="CODE"
              type="number"
            />
            <label htmlFor="phoneno">Phone.No.</label>
            <input
              id="phoneno"
              name="Phoneno"
              type="number"
            />
            <label htmlFor="employed">Is he / she employed by you ?</label>
            <Field id="employed" as="select" name="Employed">
              <option value="yes" name="Yes">Yes</option>
              <option value="no" name="No">No</option>
              <option value="NA" name="na">N/A</option>
            </Field>
            <label htmlFor="period">How long has he / she been in your service ?</label>
            <Field id="period" as="select" name="Period">
              <option value="less" name="Less">Less than a year</option>
              <option value="over" name="Over">Over one Year</option>
              <option value="NA" name="na">N/A</option>
            </Field>
            <label htmlFor="permission">Was he / she driving with your permission ?</label>
            <Field id="permission" as="select" name="Permission">
              <option value="yes" name="Yes">Yes</option>
              <option value="no" name="No">No</option>
              <option value="NA" name="na">N/A</option>
            </Field>
            <label htmlFor="experience">How long has he / she been driving the motor Vehicle ?</label>
            <Field id="experience" as="select" name="Experience">
              <option value="less" name="Less">Less than a year</option>
              <option value="over" name="Over">Over one Year</option>
              <option value="NA" name="na">N/A</option>
            </Field>
            <label htmlFor="blame">Was he / she in any way to blame for the accident?</label>
            <Field id="blame" as="select" name="Blame">
              <option value="no" name="No">No</option>
              <option value="yes" name="Yes">Yes</option>
              <option value="NA" name="na">N/A</option>
            </Field>
            <label htmlFor="liability">Did he / she admit liability ?</label>
            <Field id="liability" as="select" name="Liability">
              <option value="no" name="No">No</option>
              <option value="yes" name="Yes">Yes</option>
              <option value="NA" name="na">N/A</option>
            </Field>
            <label htmlFor="accident">Has he / she had any previous accident ?</label>
            <Field id="accident" as="select" name="Accident">
              <option value="no" name="No">No</option>
              <option value="yes" name="Yes">Yes</option>
              <option value="NA" name="na">N/A</option>
            </Field>
            <label htmlFor="conviction">Has he / she had any conviction for any offence in connection with any motor Vehicle or any charges pending ?</label>
            <Field id="conviction" as="select" name="Conviction">
              <option value="no" name="No">No</option>
              <option value="yes" name="Yes">Yes</option>
              <option value="NA" name="na">N/A</option>
            </Field>
            <label htmlFor="licence">Does he / she hold a full or provisional licence to drive the Vehicle ?</label>
            <Field id="licence" as="select" name="Licence">
              <option value="yes" name="Yes">Yes</option>
              <option value="no" name="No">No</option>
              <option value="NA" name="na">N/A</option>
            </Field>
            <label htmlFor="motovehicle">Does he / she own a Motor Vehicle ?</label>
            <Field id="motovehicle" as="select" name="Licence">
              <option value="yes" name="Yes">Yes</option>
              <option value="no" name="No">No</option>
              <option value="NA" name="na">N/A</option>
            </Field>
            {/**drivers details end */}
            <div>ACCIDENT DETAILS</div>
            <label htmlFor="road">Type of road surface </label>
            <Field id="road" as="select" name="Road">
              <option value="tarmac" name="Tarmac">Tarmac</option>
              <option value="marum" name="Marum">Marum</option>
            </Field>
            <label htmlFor="visibility">Visibility</label>
            <Field id="visibility" as="select" name="Visibility">
              <option value="light" name="Light">Day / Light</option>
              <option value="dark" name="Dark">Night / Dark </option>
            </Field>
            <label htmlFor="wetordry">Wet or Dry</label>
            <Field id="wetordry" as="select" name="WetorDry">
              <option value="wet" name="Light">Wet</option>
              <option value="dry" name="Dark">Dry</option>
            </Field>
            <label htmlFor="lights">What lights were showing on your Vehicle ?</label>
            <Field id="lights" as="select" name="Lights">
              <option value="deam" name="Deam">Deam Lights</option>
              <option value="full" name="Full">Full Lights</option>
            </Field>
            <label htmlFor="warning">What warning did your driver give ?</label>
            <input
              id="warning"
              name="Warning"
              type="text"
            />
            <label htmlFor="speed">Estimated speed before accident</label>
            <input
              id="speed"
              name="Speed"
              type="text"
            />
            <label htmlFor="weather">Weather conditions</label>
            <input
              id="weather"
              name="Weather"
              type="text"
            />
            <label htmlFor="police">Did Police take particulars</label>
            <input
              id="police"
              name="Police"
              type="text"
            />
            <label htmlFor="policestation">To which Police Station was the accident reported</label>
            <input
              id="policestation"
              name="Policestation"
              type="text"
            />
            <label htmlFor="attached">Attach copy Notice of Intended Prosecution if any</label>
            <input
              id="attached"
              name="Attached"
              type="file"
            />
          </Form>
        </Formik>
      </div>
    </div>
  )
}

export default Claimform


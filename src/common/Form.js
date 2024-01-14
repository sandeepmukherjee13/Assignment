import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [formData, setFormData] = useState({});
  const router = useNavigate();
  const getInputData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };
  const verifyUser = () => {
    if (formData.uname === 'test' && formData.pass === 'test') {
      router('/dashboard');
    } else {
      alert('Wrong Email Id or Password');
    }
  };
  return (
    <>
      <div>
        <input
          className="textBox"
          type="text"
          placeholder="Enter Your Name"
          name="uname"
          onChange={getInputData}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <input
          className="textBox"
          type="password"
          placeholder="Enter Your Password"
          name="pass"
          onChange={getInputData}
        />
      </div>
      <div>
        <button onClick={() => verifyUser()}> Submit</button>
      </div>
    </>
  );
};

export default Form;

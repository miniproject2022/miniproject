import React, { useRef, useState } from 'react';
import { ajaxOperations } from '../../utils/ajax';
import { config } from '../../utils/config';
export const Complain = () => {
  const subject = useRef('');
  const name = useRef('');
  const enrollment = useRef('');
  const mobile = useRef('');
  const emailid = useRef('');
  const programme = useRef('');
  const comments = useRef('');

  const [message, setMessage] = useState('');

  const addComplain = () => {
    const complainObject = {
      subject: subject.current.value,
      name: name.current.value,
      enrollment: enrollment.current.value,
      mobile: mobile.current.value,
      emailid: emailid.current.value,
      programme: programme.current.value,
      comments: comments.current.value,
    };

    console.log('Complain Object is', complainObject);

    const promise = ajaxOperations.post(
      config.URLS.COMPLAIN_ADD_URL,
      complainObject
    );
    promise
      .then((response) => {
        setMessage(response.data);
        console.log('Data in Added', response);
      })
      .catch((err) => {
        //setMessage(err);
        console.log('Error in Add', err);
      });
  };

  return (
    <>
      <div className="complain-main">
        <div className="complain-second">
          <h3>Add Complain</h3>
          <p>{message}</p>

          <div className="form-group">
            <label for="cars">Choose a car:</label>
            <select ref={subject} id="cars">
              <option value="Assignment">Assignment</option>
              <option value="Degree">Degree</option>
              <option value="Projects">Projects</option>
              <option value="Admission">Admission</option>
            </select>
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input
              ref={name}
              type="text"
              className="form-control"
              id="inputName"
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <label>Enrollment No.</label>
            <input
              ref={enrollment}
              type="text"
              className="form-control"
              id="inputEnrollment"
            />
          </div>
          <div className="form-group">
            <label>Mobile No.</label>
            <input
              ref={mobile}
              type="text"
              className="form-control"
              id="inputMobile"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              ref={emailid}
              type="email"
              className="form-control"
              id="inputEmail"
            />
          </div>
          <div className="form-group">
            <label>Programme</label>
            <input
              ref={programme}
              type="text"
              className="form-control"
              id="inputProgramme"
            />
          </div>
          <div>
            <label>Comments</label>
            <textarea
              ref={comments}
              type="text"
              className="form-control"
              id="inputComments"
            />
          </div>

          <button
            onClick={addComplain}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

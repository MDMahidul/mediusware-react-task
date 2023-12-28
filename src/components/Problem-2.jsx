import React, { useEffect, useState } from 'react';

const Problem2 = () => {
    const [contacts, setContacts] = useState([]);
      const handleAllContacts=() => {
        fetch("https://contact.mediusware.com/api/contacts/")
          .then((res) => res.json())
          .then((data) => {
            setContacts(data.results);
            //setFilterData(data);
            console.log(data.results);
          });}

      const handleUSAContacts=() => {
        fetch("https://contact.mediusware.com/api/country-contacts/United%20States/")
          .then((res) => res.json())
          .then((data) => {
            setContacts(data.results);
            //setFilterData(data);
            console.log(data.results);
          });}

    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex justify-content-center gap-3">
            <button
              className="btn btn-lg btn-outline-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#allcontactsModal"
              onClick={handleAllContacts}
            >
              All Contacts
            </button>
            <button
              className="btn btn-lg btn-outline-warning"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#allcontactsModal"
              onClick={handleUSAContacts}
            >
              US Contacts
            </button>
          </div>
        </div>

        <div
          className="modal fade"
          id="allcontactsModal"
          tabIndex={-1}
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="myModalLabel">
                  <div className="d-flex justify-content-center gap-3">
                    <button
                      className="btn btn-sm"
                      style={{ backgroundColor: "#46139f", color: "white" }}
                      type="button"
                      onClick={handleAllContacts}
                    >
                      All Contacts
                    </button>
                    <button
                      className="btn btn-sm"
                      style={{ backgroundColor: "#ff7f50", color: "white" }}
                      type="button"
                      onClick={handleUSAContacts}
                    >
                      US Contacts
                    </button>
                  </div>
                </h5>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-primary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
              <div className="modal-body">
                <table className="table table-striped ">
                  <thead>
                    <tr>
                      <th scope="col">SL</th>
                      <th scope="col">Name</th>
                      <th scope="col">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {contacts.map((contact) => (
                      <tr key={contact.id}>
                        <td scope="col">{contact.id}</td>
                        <td scope="col">{contact.phone}</td>
                        <td scope="col">{contact.country.name}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Problem2;
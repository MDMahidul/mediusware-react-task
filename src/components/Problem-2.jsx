import React, { useEffect, useState } from 'react';
import './Problem-2.css';

const Problem2 = () => {
    const [contacts, setContacts] = useState([]);
    const [onlyEven, setOnlyEven] = useState(false);
    const [filterData, setFilterData] = useState(contacts);
    const [activeButton, setActiveButton] = useState(null);

      const handleAllContacts=() => {
        fetch("https://contact.mediusware.com/api/contacts/")
          .then((res) => res.json())
          .then((data) => {
            setContacts(data.results);
            setFilterData(data.results);
            setActiveButton("allContacts");
          });}

      const handleUSAContacts=() => {
        fetch("https://contact.mediusware.com/api/country-contacts/United%20States/")
          .then((res) => res.json())
          .then((data) => {
            setContacts(data.results);
           setFilterData(data.results);
            setActiveButton("usaContacts");
          });}

          /* handel even number */
          const handleEvenSerial = () => {
            setOnlyEven((items) => !items);
            if (!onlyEven) {
              const updatedItems = items.filter((item) => item.id % 2 === 0);
              setFilterData(updatedItems);
            } else {
              setFilterData(contacts);
            }
          };

          // Update filterData when contacts change
          useEffect(() => {
            setFilterData(
              onlyEven ? contacts.filter((item) => item.id % 2 === 0) : contacts
            );
          }, [contacts, onlyEven]);

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
                      className={` btn-sm ${
                        activeButton === "allContacts"
                          ? "all-contacts-active"
                          : "all-contacts"
                      }`}
                      //style={{ backgroundColor: "#46139f", color: "white" }}
                      type="button"
                      onClick={handleAllContacts}
                    >
                      All Contacts
                    </button>
                    <button
                      className={` btn-sm ${
                        activeButton === "usaContacts"
                          ? "usa-contacts-active"
                          : "usa-contacts"
                      }`}
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
                    {filterData.map((contact) => (
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
                <div className="text-gray-700 flex items-center gap-2">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="onlyEvenCheckbox"
                      onChange={handleEvenSerial}
                      checked={onlyEven}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="onlyEvenCheckbox"
                    >
                      Only Even
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Problem2;
import React, {useState} from 'react';

const Problem1 = () => {
    const data = [];
    const [items,setItems] = useState(data);
    const [filterData, setFilterData] = useState(items);
    const [show, setShow] = useState('all');

    /* insert input field data to the data array */
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const status = form.status.value;
      const newItem = { id: items.length + 1, name: name, status: status };
      //console.log(newItem);
      setItems((items) => [...items, newItem]);
      setFilterData((filterData) => [...filterData, newItem]);
      form.reset();
    };

    const handleClick = (val) =>{
        const updatedItems = items.filter((item) => {
            return item.status === val;
        });
        setShow(val);
        setFilterData(updatedItems);
    }

    return (
      <div className="container">
        <div className="row justify-content-center mt-5">
          <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
          <div className="col-6 ">
            <form
              className="row gy-2 gx-3 align-items-center mb-4"
              onSubmit={handleSubmit}
            >
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  required
                />
              </div>
              <div className="col-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Status"
                  name="status"
                  required
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-8">
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item">
                <button
                  className={`nav-link ${show === "all" && "active"}`}
                  type="button"
                  onClick={() => {
                    handleClick("all");
                    setFilterData(items);
                  }}
                >
                  All
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${show === "active" && "active"}`}
                  type="button"
                  onClick={() => handleClick("active")}
                >
                  Active
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${show === "completed" && "active"}`}
                  type="button"
                  onClick={() => handleClick("completed")}
                >
                  Completed
                </button>
              </li>
            </ul>
            <div className="tab-content"></div>
            <table className="table table-striped ">
              <thead>
                {filterData.map((item) => (
                  <tr key={item.id}>
                    <th scope="col">{item.name}</th>
                    <th scope="col">{item.status}</th>
                  </tr>
                ))}
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default Problem1;
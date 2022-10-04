import React, { useEffect, useState } from "react";

const Home = () => {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setTodo(data);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row g-lg-5">
        <div className="col-lg-2">
          <button className="btn btn-info w-100 mb-2">man</button>
          <button className="btn btn-info w-100 mb-2">woman</button>
          <button className="btn btn-info w-100 mb-2">children</button>
          <button className="btn btn-info w-100 mb-2">t-shrt</button>
          <button className="btn btn-info w-100 mb-2">food</button>
        </div>

        <div className="col-lg-10">
          <div className="row">
            {todo &&
              todo.map((t) => {
                return (
                  <div className="col-lg-4 mb-2 text-center" key={t.id}>
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">{t.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                          {t.email}
                        </h6>
                        <p>{t.address.city}</p>
                        <p>{t.address.zipcode}</p>
                        <button className="btn btn-outline-dark">ADD</button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

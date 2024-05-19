import { Fragment, useState } from "react";

const BookingModal = ({ isNavItem = false, btnClassNames = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Fragment>
      <div className={`modal ${isOpen ? "is-active" : ""}`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title has-text-centered has-text-weight-bold">
              Booking Instructions
            </p>
            <button
              className="delete"
              aria-label="close"
              onClick={closeModal}
            />
          </header>
          <section
            className="modal-card-body"
            style={{
              borderBottomLeftRadius: "var(--bulma-modal-card-head-radius)",
              borderBottomRightRadius: "var(--bulma-modal-card-head-radius)",
            }}
          >
            <ul className="ml-5 is-size-5" style={{ listStyle: "none" }}>
              <li className="mb-2">
                <b>Step 1:</b> Text <b>650-580-6961</b> with:
                <ul style={{ listStyle: "inside" }} className="ml-5 is-size-6">
                  <li>Your name</li>
                  <li>Your pet's name</li>
                  <li>Breed, size & age</li>
                  <li>Spayed / neutered status</li>
                  <li>Desired booking dates and dropoff time</li>
                  <li>Any add-ons you'd like to include</li>
                  <li>Any additional info you'd like for me to know!</li>
                </ul>
              </li>
              <li className="mb-2">
                <b>Step 2:</b> I will confirm the quote for your pup's services
              </li>
              <li className="mb-2">
                <b>Step 3:</b> Send a deposit to secure the booking
              </li>
              <li className="mb-2">
                <b>Step 4:</b> Remaining payment will be due upon dropoff
              </li>
              <li className="mb-2">
                <b>Step 5:</b> Feel relieved that your pup will be in great
                care! :)
              </li>
            </ul>
          </section>
        </div>
      </div>

      {isNavItem ? (
        <a className="navbar-item" onClick={openModal}>
          Book
        </a>
      ) : (
        <button
          onClick={openModal}
          className={`button is-dark is-rounded ${btnClassNames}`}
        >
          Book Now!
        </button>
      )}
    </Fragment>
  );
};

export default BookingModal;
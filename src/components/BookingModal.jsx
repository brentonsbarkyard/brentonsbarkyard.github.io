import { Fragment, useState } from "react";

const BookingModal = ({ isNavItem = false, btnClassNames = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Fragment>
      <div className={`modal ${isOpen ? "is-active" : ""} has-text-dark`}>
        <div className="modal-background" onClick={closeModal}></div>
        <div className="modal-card" style={{ height: "95vh" }}>
          <header className="modal-card-head" style={{ padding: "1rem" }}>
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
              padding: "1.5rem",
              borderBottomLeftRadius: "var(--bulma-modal-card-head-radius)",
              borderBottomRightRadius: "var(--bulma-modal-card-head-radius)",
            }}
          >
            <ul className="is-size-6 mb-4" style={{ listStyle: "none" }}>
              <li className="mb-1">
                <b>Step 1:</b> Fill out the form below
              </li>
              <li className="mb-1">
                <b>Step 2:</b> I will confirm the quote for your pup's services
              </li>
              <li className="mb-1">
                <b>Step 3:</b> Send a 50% deposit to secure the booking
              </li>
              <li className="mb-1">
                <b>Step 4:</b> Remaining payment will be due upon dropoff
              </li>
              <li className="mb-1">
                <b>Step 5:</b> Feel relieved that your pup will be in great
                care! :)
              </li>
            </ul>
            <b className="is-size-6">Accepted Payment Methods:</b>
            <div>
              Venmo:{" "}
              <a href="https://account.venmo.com/u/brenton-yu" target="_blank">
                @Brenton-Yu
              </a>
            </div>
            <div>Apple Pay or Zelle: 650-580-6961</div>

            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfYV-TSZBtfrHaSzpW-aRpJhVZF4d12pbG37n2TFSgqkTp89w/viewform?embedded=true"
              frameborder="0"
              marginheight="0"
              marginwidth="0"
              style={{ width: "100%", height: "100%", marginTop: "2rem" }}
            >
              Loading…
            </iframe>
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

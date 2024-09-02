import { useRef } from "react";

export default function Register() {
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Want to arrange a tour?</h1>
      <p>
        Make sure to grab your spot for this year's campus tour! We love
        technology and consistently work towards being the premier provider of
        technology education that connect the world.
      </p>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" ref={emailRef} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
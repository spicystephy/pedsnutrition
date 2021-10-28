import React from "react";

function Referrals() {
  return (
    <div>
      <h1>Referrals</h1>
      <h2>
        Fill out the following. We will contact the client within 2 business
        days to schedule an appointment.
      </h2>

      <form action="/Referrals" method="GET" autoComplete="on">
        <label>
          Child's First and Last Name:
          <input type="text" name="child" />
        </label>
        <label>
          Child's Date of Birth:
          <input type="date" name="dob" />
        </label>
        <label>
          Reason for Referral:
          <textarea type="text" name="referral" rows="5" cols="30" />
        </label>
        <label>
          Your First and Last Name:
          <input type="text" name="parent" />
        </label>
        <p>Your preferred email or phone number</p>
        <label>
          Your Phone Number:
          <input
            type="tel"
            name="phone"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </label>
        <label>
          Your Email Address:
          <input type="email" name="email" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Referrals;

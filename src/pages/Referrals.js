import React from "react";

function Referrals() {
  return (
    <div>
      <h1>Referrals</h1>
      <h2>
        Fill out the following. We will contact the client within 2 business
        days to schedule an appointment.
      </h2>

      <form action="skinnyskittles@hotmail.com" method="POST" autoComplete="on">
        <h3>
          Child's Name{" "}
          <span class="required" aria-hidden="true">
            *
          </span>
        </h3>
        <label>
          First Name:
          <input type="text" name="fname" />
        </label>
        <label>
          Last Name:
          <input type="text" name="lname" />
        </label>
        <br></br>
        <h3>
          Child's Date of Birth{" "}
          <span class="required" aria-hidden="true">
            *
          </span>
        </h3>
        <label>
          <input type="date" name="dob" />
        </label>
        <br></br>
        <h3>
          Reason for Referral{" "}
          <span class="required" aria-hidden="true">
            *
          </span>
        </h3>
        <label>
          <textarea type="text" name="referral" rows="5" cols="30" />
        </label>
        <br></br>
        <h3>
          Your Name and Preferred Contact Method{" "}
          <span class="required" aria-hidden="true">
            *
          </span>
        </h3>
        <label>
          If you prefer to emailed, please provide one:
          <textarea type="text" name="contact" rows="5" cols="30" />
        </label>
        <br></br>
        <h3>
          Phone{" "}
          <span class="required" aria-hidden="true">
            *
          </span>
        </h3>
        <label>
          <input
            type="tel"
            name="phone"
            placeholder="123-456-7890"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </label>
        <br></br>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
export default Referrals;

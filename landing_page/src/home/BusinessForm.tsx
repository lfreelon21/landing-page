import './BusinessForm.css';
import RedButton from '../RedButton';

export default function BusinessForm() {
  return (
    <form className="form-container">
      <div className="first-row">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Name"/>

        <label htmlFor="phone">Phone Number</label>
        <input id="phone" name="phone" type="text" placeholder="Phone Number" />
      </div>

      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="text" placeholder="Email" />

      <label htmlFor="select-service">Select Service</label>
      <select name="select-service" id="select-service" defaultValue="">
        <option value="" disabled hidden>Select Service...</option>
        <option value="service1">Placeholder Service</option>
      </select>

      <label htmlFor="message">Message</label>
      <input id="message" name="message" type="text" placeholder="Message" />

      <div className="button-container">
        <RedButton text="Submit"/>
      </div>

    </form>
  )
}
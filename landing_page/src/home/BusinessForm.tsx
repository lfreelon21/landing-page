export default function BusinessForm() {
  return (
    <form>
      <label>Name</label>
      <input type="text"/>
      <label>Phone Number</label>
      <input type="text"/>
      <label>Email</label>
      <input type="text"/>
      <select name="select-service" id="select-service"></select>
      <label>Message</label>
      <input type="text"/>
    </form>
  )
}
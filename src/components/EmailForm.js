
const EmailForm = () => {
    return(
      <form >
          <strong> signup for updates </strong>
          <label htmlFor="name">Username: </label>
          <input type="text" id="name" name="username"/>
          <label htmlFor="name">Email: </label>
          <input type="submit" value="signup" />
      </form>
    )
}
export default EmailForm
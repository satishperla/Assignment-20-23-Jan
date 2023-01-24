import React from 'react';

function Form1(){
    return(
        <form>
            <input type="text" id="fname" placeholder="First Name" name='fname'></input>
            <input type="text" id="lname" placeholder="Last Name" name='lname'></input><br></br>
            <input type="email" id="mail" placeholder="Email" name='mail'></input>
            <input type="password" id="pwd" placeholder="Password" name='pwd'></input>
            <input type="password" id="pwd" placeholder="Confirm Password" name='pwd'></input>
            <input type="checkbox" id="terms">I accept <a href="#">Terms of Use</a> </input>
            <button type="submit">REGISTER NOW</button>


        </form>
    )
}

export default Form1;
function ContactCard () {
    return (
        <div className="container-fluid">
            <div id="maintitle" className="row">
                <div className="col-sm-12">
                    <h3>- hit me up -</h3>
                </div>
            </div>
            <hr/>
            <form id="contactme">
                <div className="form-group">
                    <label for="nameInput">First & Last Name</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Name"/>
                    <small id="nameInputSmall" className="form-text text-muted"></small>
                </div>
                <div className="form-group">
                    <label for="emailInput">Your Email</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <label for="messageInput">Message</label>
                    <input type="text" className="form-control" id="messageInput" placeholder="Message"/>
                </div>
                <button className="sendbutton" type="submit" onclick="formSubmit()">Send</button>
            </form>
        </div> 
    )
};

export default ContactCard;
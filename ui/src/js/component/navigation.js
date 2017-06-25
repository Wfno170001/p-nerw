const React = require('react');

function NavbarNav() {
    return (
        <ul className="nav navbar-nav">
            <li className="active"><a href="/">Home</a></li>
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
        </ul>
    );
}

function NavbarForm() {
    return (
        <form className="collapse navbar-collapse navbar-form navbar-right" role="search">
            <div className="input-group input-group-sm">
                <input type="text" className="form-control" placeholder="Search"/>
                <span className="input-group-btn">
                <button type="button" className="btn btn-default">Go</button>
             </span>
            </div>
        </form>
    );
}

class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-static-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="/">Brand</a>
                    </div>
                    <div>
                        <NavbarNav />
                        <NavbarForm />
                    </div>
                </div>
            </nav>
        )
    }
}

module.exports =  {Navigation};

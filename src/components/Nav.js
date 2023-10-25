import {Link} from "react-router-dom";

function Nav(){

    return(

        <nav class="navbar bg-warning">

           <Link class="navbar-brand mx-3" to="/">CRUD operations</Link>
            <div class="nav">
                <Link class="nav-link" to="/create-student">create student</Link>
                <Link class="nav-link" to="/student-list">Student list</Link>

            </div>

        </nav>
    )
}

export default Nav;
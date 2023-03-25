import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import './Navigation.style.scss';
const Navigation = () => {
    return (
        <Fragment  >
            <div className='navigation'>
                <Link to='/'>
                    <div> <img src='https://www.khelmart.com/assets/images/loader.gif' className="logo-container" /> </div>
                </Link>

                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/contact'>
                        CONTACT
                    </Link>
                    <Link className='nav-link' to='/login'>
                        LOG-IN
                    </Link>
                </div>
            </div>

            <Outlet />
        </Fragment>
    );
};
export default Navigation;

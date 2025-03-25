import './Navbar.css'

export default function Navbar () {
    return (
        <>
            <header className="header">

            {/* Logo and text-Elitebank */}
            <div className="logo-container">    
                <img src='../src/images/logotriotech.png' alt='logoTrioTech' className='logo' />
                <div className="text">
                    <h1 className='top'>Elite</h1>
                    <h1 className='bottom'>Bank</h1>
                </div>
            </div>

            {/* Navigation List */}
            <nav className="nav-container">
                <ul className='first-list'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>About Us</li>
                    <li>Security</li>
                    <li>Admin</li>
                </ul>
            </nav>

            {/* Login/Sign Up */}
            <div className="auth-container">
                <ul className='second-list'>
                    <li>Login</li>
                    <li>Sign Up</li>
                </ul>
            </div>
        </header>
        </>
    )
}
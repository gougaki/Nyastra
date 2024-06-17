import React from 'react'
import '../styles/footer.scss'

export const Footer = () => {
  return (
    <footer>
        <div class="footer-container">
            <div class="footer-about">
                <h2>About</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div class="footer-contact">
                <h2>Contact</h2>
                <p>Email: info@example.com</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 Main Street, Anytown, USA</p>
            </div>
        </div>
    </footer>
  )
}

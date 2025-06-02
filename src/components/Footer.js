import React from 'react'
import '../styles/footer.scss'

export const Footer = () => {
  return (
    <footer>
        <div class="footer-container">
            <div class="footer-about">
                <h2>About</h2>
                <p>
                Selamat datang di situs kami, tempat di mana Anda dapat dengan mudah mengubah teks dari aksara Latin ke aksara Bali. Kami mengutamakan pelafalan dari bahasa Inggris untuk memastikan hasil transliterasi yang akurat dan mudah dipahami. Situs ini diprakarsai oleh I Wayan Mulyawan, seorang dosen sastra Inggris yang berdedikasi dalam melestarikan budaya dan bahasa Bali. Gunakan alat kami yang sederhana dan efisien untuk memudahkan konversi teks Anda.
                </p>
            </div>
            <div class="footer-contact">
                <h2>Contact</h2>
                <p>Email: info_nyastra@nyastra.co.id</p>
                <p>Phone: +62 812-3917-724</p>
                <p>Address: Desa/Kelurahan Kuta, Kec. Kuta, Kab. Badung, Provinsi Bali</p>
            </div>
        </div>
    </footer>
  )
}

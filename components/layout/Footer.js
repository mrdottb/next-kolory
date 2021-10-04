import React from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.container} id="footerSection">
      <div className={classes.footerWrapper}>
        <div className={classes.logoColumn}>
          <div className={classes.logo}>
            <Link href="/">
              <a href="/">
                <Image
                  src="/logo-white.svg"
                  width={242}
                  height={70}
                  layout="fixed"></Image>
              </a>
            </Link>
          </div>
          <p>Dobopack Trading sp. z o.o.</p>
        </div>
        <address className={classes.secondColumn}>
          <a
            href="https://maps.google.com/?q=Ludwika Rydygiera 8, 01-793 Warszawa"
            className={classes.footerRow}>
            <div className={classes.footerImage}>
              <Image
                src="/footer-location.svg"
                width={14}
                height={20}
                layout="fixed"></Image>
            </div>
            <div className={classes.rowContent}>
              Rydygiera 8, 01-793 Warszawa
            </div>
          </a>
          <a href="tel:+22-633-96-26" className={classes.footerRow}>
            <div className={classes.footerImage}>
              <Image
                src="/footer-phone.svg"
                width={19}
                height={22}
                layout="fixed"></Image>
            </div>
            <div className={classes.rowContent}>22 633 96 26</div>
          </a>
          <a href="fax:+22-633-86-96" className={classes.footerRow}>
            <div className={classes.footerImage}>
              <Image
                src="/footer-fax.svg"
                width={20}
                height={20}
                layout="fixed"></Image>
            </div>
            <div className={classes.rowContent}>22 633 86 96</div>
          </a>
        </address>
        <address className={classes.thirdColumn}>
          <a href="tel:48-508-135-525" className={classes.footerRow}>
            <div className={classes.footerImage}>
              <Image
                src="/footer-mobile.svg"
                width={18}
                height={18}
                layout="fixed"></Image>
            </div>
            <div className={classes.rowContent}>48 508 135 525</div>
          </a>
          <a href="tel:48-507-033-685" className={classes.footerRow}>
            <div className={classes.footerImage}>
              <Image
                src="/footer-mobile.svg"
                width={18}
                height={18}
                layout="fixed"></Image>
            </div>
            <div className={classes.rowContent}>48 507 033 685</div>
          </a>
          <a href="mailto:biuro@kolory.com" className={classes.footerRow}>
            <div className={classes.footerImage}>
              <Image
                src="/footer-mail.svg"
                width={20}
                height={16}
                layout="fixed"></Image>
            </div>
            <div className={classes.rowContent}>biuro@kolory.com</div>
          </a>
        </address>
      </div>
      <p className={classes.copyright}>
        @2021 Dobopack | <Link href="/polityka">Polityka prywatności</Link>
      </p>
    </footer>
  );
}

export default Footer;
import s from "./footer.module.css";

export default function footer() {
  return (
    <footer className={s.footerContainer}>
      <div className={s.footerInner}>
        {/* <div className={s.footerLargeTitle}>Waka</div> */}

        <div className="flex space-between align-center">
          <div className="flex flex-column">
            <span>Photography Portfolio</span>
          </div>
          <div className="flex flex-column">
            <span>Email</span>
            <span>Behance</span>
            <span>Instagram</span>
          </div>
          <div className="flex flex-column">
            <span>London</span>
            <span>+44 758 2092 422</span>
          </div>
          <div className="flex flex-column">
            <span>Jahnavii Sharma</span>
            <span>2020</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

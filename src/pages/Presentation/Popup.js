/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// src/components/Popup.js
export default function Popup({ onClose, image }) {
    return (
        <div style={styles.overlay}>
            <div style={styles.popup}>
                <button style={styles.closeBtn} onClick={onClose}>✕</button>
                {/* <a href="/pages/landing-pages/contact-us"> */}
                <a href="mailto:kian@bngeospatial.com">
                <img
                    src={image}
                    alt="popup"
                    style={{
                        width: "90vw",
                        maxWidth: "1200px",
                        height: "auto",
                        borderRadius: "10px"
                    }}
                />
                </a>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
    },
    popup: {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        position: "relative",
    },
    closeBtn: {
        position: "absolute",
        top: "5px",
        right: "8px",
        fontSize: "20px",
        background: "transparent",
        border: "none",
        cursor: "pointer",
    }
};

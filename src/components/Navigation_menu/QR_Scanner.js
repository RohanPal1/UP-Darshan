import React, { useEffect } from "react";
import { Html5Qrcode, Html5QrcodeScannerState } from "html5-qrcode";

const QR_Scanner = ({ onClose }) => {
  useEffect(() => {
    const qrId = "qr-reader";
    const qr = new Html5Qrcode(qrId);
    let isScannerRunning = false;

    const startScanner = async () => {
      const isSecure =
        window.isSecureContext || window.location.hostname === "localhost";

      if (!isSecure) {
        alert(
          "❗ Camera access only works on HTTPS or localhost. Please switch to a secure connection."
        );
        onClose();
        return;
      }

      try {
        const devices = await Html5Qrcode.getCameras();

        if (!devices || devices.length === 0) {
          alert("❗ No camera devices found.");
          onClose();
          return;
        }

        await qr.start(
          { facingMode: "environment" },
          { fps: 10, qrbox: { width: 250, height: 250 } },
          async (decodedText) => {
            if (isScannerRunning) {
              await qr.stop();
              isScannerRunning = false;

              if (decodedText.startsWith("http")) {
                onClose();
                window.location.href = decodedText;
              } else {
                alert("✅ Scanned: " + decodedText);
                onClose();
              }
            }
          },
          (errorMessage) => {
            console.warn("QR scan error:", errorMessage);
          }
        );

        isScannerRunning = true;
      } catch (error) {
        console.error("Camera initialization error:", error);
        alert(
          "❌ Unable to access the camera. Please check your browser settings and permissions."
        );
        onClose();
      }
    };

    startScanner();

    return () => {
      if (
        isScannerRunning &&
        qr.getState() === Html5QrcodeScannerState.SCANNING
      ) {
        qr.stop().catch(() => {});
      }
    };
  }, [onClose]);

  return (
    <div className="qr-modal">
      <div className="qr-modal-content">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <h3>Scan QR Code</h3>
        <div id="qr-reader" style={{ width: 300, margin: "auto" }} />
      </div>
    </div>
  );
};

export default QR_Scanner;

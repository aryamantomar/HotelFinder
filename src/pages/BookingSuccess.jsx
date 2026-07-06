import { Link, useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";

function BookingSuccess() {

    const { state } = useLocation();

    if (!state) {
        return (
            <div style={{ textAlign: "center", marginTop: "100px" }}>
                <h2>No Booking Found</h2>

                <Link to="/">Go Home</Link>
            </div>
        );
    }

    const bookingId =
        "HF" +
        Math.floor(100000 + Math.random() * 900000);

    const bookingDate =
        new Date().toLocaleString();

    const nights = (() => {

        if (!state.checkIn || !state.checkOut)
            return 0;

        const start = new Date(state.checkIn);

        const end = new Date(state.checkOut);

        const diff = end - start;

        return diff > 0
            ? diff / (1000 * 60 * 60 * 24)
            : 0;

    })();

    const totalPrice = nights * 3200;

    function downloadPDF() {

        const doc = new jsPDF();

        doc.setFontSize(22);

        doc.text("HotelFinder", 20, 20);

        doc.setFontSize(18);

        doc.text("Booking Confirmation Receipt", 20, 35);

        doc.setFontSize(12);

        doc.line(20, 40, 190, 40);

        let y = 55;

        const addLine = (title, value) => {
            doc.text(`${title}: ${value}`, 20, y);
            y += 10;
        };

        addLine("Booking ID", bookingId);
        addLine("Booking Date", bookingDate);

        y += 5;

        addLine("Guest Name", state.name);
        addLine("Email", state.email);
        addLine("Phone", state.phone);

        y += 5;

        addLine("Check In", state.checkIn);
        addLine("Check Out", state.checkOut);
        addLine("Guests", state.guests);
        addLine("Room Type", state.roomType);

        y += 5;

        addLine("Nights", nights);
        addLine("Price Per Night", "Rs. 3200");
        addLine("Total Amount", `Rs. ${totalPrice}`);

        y += 10;

        doc.setTextColor(0, 150, 0);

        doc.text("BOOKING CONFIRMED", 20, y);

        y += 15;

        doc.setTextColor(0, 0, 0);

        doc.text(
            "Thank you for choosing HotelFinder.",
            20,
            y
        );

        doc.save(`Booking-${bookingId}.pdf`);

    }

    return (

        <div
            style={{
                maxWidth: "900px",
                margin: "50px auto",
                background: "#fff",
                borderRadius: "20px",
                padding: "40px",
                boxShadow: "0 15px 40px rgba(0,0,0,.15)"
            }}
        >

            <h1
                style={{
                    color: "#16a34a"
                }}
            >
                ✅ Booking Confirmed
            </h1>

            <p>
                Your hotel booking has been confirmed.
            </p>

            <hr />

            <h2>Booking Receipt</h2>

            <table
                style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    marginTop: "20px"
                }}
            >

                <tbody>

                <tr>

                    <td><b>Booking ID</b></td>

                    <td>{bookingId}</td>

                </tr>

                <tr>

                    <td><b>Booking Date</b></td>

                    <td>{bookingDate}</td>

                </tr>

                <tr>

                    <td><b>Guest Name</b></td>

                    <td>{state.name}</td>

                </tr>

                <tr>

                    <td><b>Email</b></td>

                    <td>{state.email}</td>

                </tr>

                <tr>

                    <td><b>Phone</b></td>

                    <td>{state.phone}</td>

                </tr>

                <tr>

                    <td><b>Check In</b></td>

                    <td>{state.checkIn}</td>

                </tr>

                <tr>

                    <td><b>Check Out</b></td>

                    <td>{state.checkOut}</td>

                </tr>

                <tr>

                    <td><b>Guests</b></td>

                    <td>{state.guests}</td>

                </tr>

                <tr>

                    <td><b>Room Type</b></td>

                    <td>{state.roomType}</td>

                </tr>

                <tr>

                    <td><b>Nights</b></td>

                    <td>{nights}</td>

                </tr>

                <tr>

                    <td><b>Price / Night</b></td>

                    <td>₹3200</td>

                </tr>

                <tr>

                    <td><b>Total Amount</b></td>

                    <td
                        style={{
                            color: "#2563eb",
                            fontWeight: "bold"
                        }}
                    >
                        ₹{totalPrice}
                    </td>

                </tr>

                <tr>

                    <td><b>Status</b></td>

                    <td
                        style={{
                            color: "green",
                            fontWeight: "bold"
                        }}
                    >
                        Confirmed
                    </td>

                </tr>

                </tbody>

            </table>

            <div
                style={{
                    display: "flex",
                    gap: "20px",
                    marginTop: "40px"
                }}
            >

                <button

                    onClick={downloadPDF}

                    style={{
                        flex: 1,
                        padding: "15px",
                        border: "none",
                        background: "#2563eb",
                        color: "#fff",
                        borderRadius: "10px",
                        cursor: "pointer",
                        fontSize: "16px"
                    }}

                >

                    Download PDF Receipt

                </button>

                <Link

                    to="/"

                    style={{
                        flex: 1,
                        textAlign: "center",
                        textDecoration: "none",
                        padding: "15px",
                        background: "#16a34a",
                        color: "#fff",
                        borderRadius: "10px"
                    }}

                >

                    Back to Home

                </Link>

            </div>

        </div>

    );

}

export default BookingSuccess;
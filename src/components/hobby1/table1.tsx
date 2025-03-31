import "../Nia.css"; // Ensure this CSS file exists for styling

export default function Table() {
    return (
        <>
            <h2>My Weekly Workout Schedule</h2>
            <table className={"collapse"}>
                <caption>Schedule</caption>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Exercise</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Monday</td><td>Push</td><td>1-2 hours</td></tr>
                    <tr><td>Tuesday</td><td>Pull</td><td>1-2 hours</td></tr>
                    <tr><td>Wednesday</td><td>Legs</td><td>1-2 hours</td></tr>
                    <tr><td>Thursday</td><td>Push</td><td>1-2 hours</td></tr>
                    <tr><td>Friday</td><td>Pull</td><td>1-2 hours</td></tr>
                    <tr><td>Saturday</td><td>Legs</td><td>1-2 hours</td></tr>
                    <tr><td>Sunday</td><td>Cardio (Elliptical/Treadmill/StairMaster)</td><td>1-2 hours</td></tr>
                </tbody>
            </table>
        </>
    )
}
export default function Table2() {
    return (
        <>
            <table className={"collapse"}>
                <caption>A Little More Info</caption>
                <tbody>
                <tr>
                    <th>Team Name</th>
                    <th>Home City</th>
                    <th>My Relation to the Team</th>
                </tr>
                <tr>
                    <td>Seattle Sounders FC</td>
                    <td>Seattle, WA</td>
                    <td>Been supporting ever since I can remember, they're my home professional team.</td>
                </tr>
                <tr>
                    <td>Ballard FC</td>
                    <td>Ballard, Seattle, WA</td>
                    <td>USL 2 team in Ballard (neighborhood of Seattle) that my previous coach at Seattle Celtic led
                        to their first ever national title.
                    </td>
                </tr>
                <tr>
                    <td>Manchester United</td>
                    <td>Manchester, UK</td>
                    <td>My Premier League team of choice. There wasn't really any reason for this other than
                        they used to be much better than they are now.
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    )
}
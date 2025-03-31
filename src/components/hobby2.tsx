import React from "react";
import "./Alden.css"; // Ensure this CSS file exists for styling

const Hobby2: React.FC = () => {
    return (
        <div className="content">

            <h1>Alden Cutler - Soccer as a hobby</h1>
            <img src="/src/assets/sounders.png"
                 alt="Sounders supporters"/>

            <p>
                Hi, my name is Alden. I'm a junior CS major at WPI. I play soccer and I like video games and computers.
                Outside of school, I live in Seattle, WA, where I like hiking and skiing. I also play a lot of online
                chess
                and am almost 1500 ELO on chess.com.
            </p>

            <p>
                One of my favorite hobbies is playing soccer. I've been playing since I was very small, through Capitol
                Hill
                Soccer
                (my neighborhood), then Emerald City FC, and finally Seattle Celtic. I play in the midfield, usually as
                a
                central
                attacking midfielder (CAM) or a central defensive midfielder (CDM). I also play a lot of FIFA in my free
                time.
                Since coming to WPI, I've joined a semi-professional team called the New England Combine, which plays in
                the
                UPSL (United Premier Soccer League). We play against teams from all over New England, and it's been a
                great
                experience so far.
            </p>

            <div>
                <h2>
                    My Top 5 Favorite Teams
                </h2>
                <ul>
                    <li className="first-item">Sounders FC</li>
                    <li>Ballard FC</li>
                    <li>Manchester United</li>
                    <li>Seattle Reign</li>
                    <li>Tacoma Defiance</li>
                </ul>
            </div>

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

            <form className={"input-form"}>
                <h2>Contact Me!</h2>
                <div className="button-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/><br/><br/>
                </div>

                <div className="button-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email"/><br/><br/>
                </div>

                <div>
                    <label>Favorite Sport:</label><br/>
                    <div className="button-group">
                        <input type="checkbox" id="soccer" name="sport" value="soccer"/>
                        <label htmlFor="soccer">Soccer</label><br/>
                    </div>
                    <div className="button-group">
                        <input type="checkbox" id="basketball" name="sport" value="basketball"/>
                        <label htmlFor="basketball">Basketball</label><br/>
                    </div>
                    <div className="button-group">
                        <input type="checkbox" id="tennis" name="sport" value="tennis"/>
                        <label htmlFor="tennis">Tennis</label><br/>
                    </div>
                    <br/>
                </div>

                <div>
                    <label>Favorite League:</label><br/>
                    <div className="button-group">
                        <input type="radio" id="mls" name="league" value="mls"/>
                        <label htmlFor="mls">MLS</label><br/>
                    </div>
                    <div className="button-group">
                        <input type="radio" id="nba" name="league" value="nba"/>
                        <label htmlFor="nba">NBA</label><br/>
                    </div>
                    <div className="button-group">
                        <input type="radio" id="epl" name="league" value="epl"/>
                        <label htmlFor="epl">EPL</label><br/>
                    </div>
                    <br/>
                </div>

                <label htmlFor="comments">Comments:</label><br/>
                <textarea id="comments" name="comments" rows={4} cols={50}></textarea><br/><br/>

                <label htmlFor="team">Favorite Team:</label>
                <select id="team" name="team">
                    <option value="">Select a team</option>
                    <option value="sounders">Seattle Sounders FC</option>
                    <option value="lakers">Los Angeles Lakers</option>
                    <option value="manutd">Manchester United</option>
                </select><br/><br/>

                <button id="form-button">Submit</button>
            </form>
        </div>
    );
};

export default Hobby2;
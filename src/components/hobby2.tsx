import React from "react";
import "../App.css"; // Ensure this CSS file exists for styling

const Hobby2: React.FC = () => {
    return (
        <div className="hobby-container">
            {/* Navigation */}
            <nav className="navbar">
                <ul className="nav-links">
                    <li>
                        <a href="https://www.fourfourtwo.com/us/features/soccer-training-guide-how-to-improve-your-game" target="_blank">
                            Soccer Training Guide
                        </a>
                    </li>
                    <li>
                        <a href="https://www.soccer.com/guide/best-soccer-drills-for-improving-your-skills" target="_blank">
                            Best Soccer Drills
                        </a>
                    </li>
                    <li>
                        <a href="https://www.goal.com/en-us/lists/the-most-influential-soccer-players-of-all-time/blt56410d8f556d5d7d" target="_blank">
                            Most Influential Soccer Players
                        </a>
                    </li>
                </ul>
            </nav>

            {/* Title */}
            <h1>Alden - Playing Soccer</h1>

            {/* Banner Image */}
            <img src="/soccer%20pic.png" alt="Soccer Field" width="920" />
            <p><strong>Soccer Training & Matches</strong></p>

            {/* Introduction */}
            <p>
                My name is Alden, and I have been playing soccer since I was a child.
                I have always been passionate about the game and know a lot about soccer, from strategies to techniques.
                I play soccer every Wednesday and Friday from 9 PM to 11 PM, and I'm always looking for more teammates to join!
            </p>

            <p>
                Soccer is not just a sport to me—it’s a way to build friendships, improve endurance, and develop teamwork.
                Whether it's practicing drills or competing in matches, soccer is an essential part of my life.
            </p>

            {/* Recommended Articles */}
            <h2>Recommended Articles</h2>
            <ul>
                <li>
                    <a href="https://www.fourfourtwo.com/us/features/soccer-training-guide-how-to-improve-your-game" target="_blank">
                        Soccer Training Guide
                    </a>
                    <p>A comprehensive guide to improving your soccer skills.</p>
                </li>
                <li>
                    <a href="https://www.soccer.com/guide/best-soccer-drills-for-improving-your-skills" target="_blank">
                        Best Soccer Drills
                    </a>
                    <p>Some of the best drills to enhance dribbling, passing, and shooting.</p>
                </li>
                <li>
                    <a href="https://www.goal.com/en-us/lists/the-most-influential-soccer-players-of-all-time/blt56410d8f556d5d7d" target="_blank">
                        Most Influential Soccer Players
                    </a>
                    <p>A look at legendary soccer players and their impact on the game.</p>
                </li>
            </ul>

            {/* Soccer Activity List */}
            <h2>Soccer Activities I Do</h2>
            <ul>
                <li className="highlight">Dribbling Drills</li>
                <li>Passing Exercises</li>
                <li>Shooting Practice</li>
                <li>Match Strategy Sessions</li>
                <li>Team Scrimmages</li>
            </ul>

            {/* Soccer Schedule Table */}
            <h2>My Weekly Soccer Schedule</h2>
            <table className="schedule-table">
                <caption>Schedule</caption>
                <thead>
                <tr>
                    <th>Day</th>
                    <th>Activity</th>
                    <th>Time</th>
                </tr>
                </thead>
                <tbody>
                <tr><td>Wednesday</td><td>Soccer Match</td><td>9 PM - 11 PM</td></tr>
                <tr><td>Friday</td><td>Soccer Match</td><td>9 PM - 11 PM</td></tr>
                </tbody>
            </table>

            {/* Soccer Nutrition Section */}
            <h2>What I Eat</h2>
            <p>
                Soccer requires stamina and energy, so I make sure to eat well.
                My diet includes protein-rich foods like chicken and eggs, complex carbohydrates for sustained energy,
                and plenty of hydration to keep me in top form on the field.
            </p>

            {/* Join the Soccer Team Form */}
            <h2>Want to Join the Soccer Team? Sign Up Here!</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" /><br />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" /><br />

                <fieldset>
                    <legend>Preferred Soccer Days:</legend>
                    <label><input type="checkbox" name="soccer_days" value="wednesday" /> Wednesday</label><br />
                    <label><input type="checkbox" name="soccer_days" value="friday" /> Friday</label><br />
                </fieldset>

                <fieldset>
                    <legend>Soccer Position Preference:</legend>
                    <label><input type="radio" name="soccer_position" value="forward" /> Forward</label><br />
                    <label><input type="radio" name="soccer_position" value="midfielder" /> Midfielder</label><br />
                    <label><input type="radio" name="soccer_position" value="defender" /> Defender</label><br />
                    <label><input type="radio" name="soccer_position" value="goalkeeper" /> Goalkeeper</label><br />
                </fieldset>

                <label htmlFor="comments">Comments:</label><br />
                <textarea id="comments" name="comments" rows={4} cols={50}></textarea><br />

                <button type="submit">Join Team</button>
            </form>
        </div>
    );
};

export default Hobby2;
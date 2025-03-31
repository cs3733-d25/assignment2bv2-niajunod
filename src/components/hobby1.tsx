import React from "react";
import "./Nia.css"; // Ensure this CSS file exists for styling

const Hobby1: React.FC = () => {
    return (
        <div className="hobby-container">

            {/* Title */}
            <h1>Nia Junod - Working Out at the Gym</h1>

            {/* Banner Image */}
            <img src="/src/assets/Gym.jpg" alt="Gym Workout Banner" width="2300" />
            <p><strong>Equinox Gym</strong></p>

            {/* Introduction */}
            <p>
                My name is Nia Junod, a junior studying computer science with a minor in business.
                I grew up in Atlanta, Georgia, and was adopted from Jiangxi Province in China.
                You can find me at the campus gym in the mornings.
            </p>

            <p>
                My hobby is working out, both during and outside the school year. At school, I work out
                seven times a week, and at home, I run 1-2 miles for light exercise. Since freshman year of
                high school, I've been going to the gym regularly as a way to decompress and practice self-care.
                I find that physical health improves mental health. Research shows that by working out, your body
                releases endorphins which make you happy.
            </p>

            {/* Recommended Articles */}
            <h2>Recommended Articles</h2>
            <ul>
                <li>
                    <a href="https://www.healthline.com/health/fitness-exercise/elliptical-benefits" target="_blank">Elliptical Benefits</a>
                    <p>A low-impact, full-body workout that's easy on your joints.</p>
                </li>
                <li>
                    <a href="https://www.vogue.com/article/all-the-benefits-of-strength-training-for-women" target="_blank">Strength Training for Women</a>
                    <p>Breaking the myth that weightlifting is just for men.</p>
                </li>
                <li>
                    <a href="https://www.forbes.com/sites/bernardmarr/2023/04/05/fit-for-the-future-10-trends-that-will-transform-the-fitness-industry/" target="_blank">Future Fitness Trends</a>
                    <p>Innovative changes coming to the fitness industry.</p>
                </li>
            </ul>

            {/* Exercise List */}
            <h2>Exercises I Do at the Gym</h2>
            <ul>
                <li className="highlight">Elliptical</li>
                <li>Push</li>
                <li>Pull</li>
                <li>Legs</li>
                <li>Treadmill</li>
            </ul>

            {/* Workout Schedule Table */}
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

            {/* Nutrition Section */}
            <h2>What I Eat</h2>
            <p>
                Fitness is more than just working out—it's about eating healthy.
                I meal prep Monday through Friday with ground beef, rice, and mixed vegetables,
                seasoned with taco seasoning and a bit of hot sauce for extra flavor.
            </p>

            {/* Contact Form */}
            <h2>Want to Work Out Together? Leave Your Info!</h2>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" /><br />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" /><br />

                <fieldset>
                    <legend>Preferred Workout Days:</legend>
                    <label><input type="checkbox" name="workout_days" value="monday" /> Monday</label><br />
                    <label><input type="checkbox" name="workout_days" value="tuesday" /> Tuesday</label><br />
                    <label><input type="checkbox" name="workout_days" value="wednesday" /> Wednesday</label><br />
                    <label><input type="checkbox" name="workout_days" value="thursday" /> Thursday</label><br />
                    <label><input type="checkbox" name="workout_days" value="friday" /> Friday</label><br />
                    <label><input type="checkbox" name="workout_days" value="saturday" /> Saturday</label><br />
                    <label><input type="checkbox" name="workout_days" value="sunday" /> Sunday</label><br />
                </fieldset>

                <fieldset>
                    <legend>Workout Time Preference:</legend>
                    <label><input type="radio" name="workout_time" value="morning" /> Morning</label><br />
                    <label><input type="radio" name="workout_time" value="afternoon" /> Afternoon</label><br />
                    <label><input type="radio" name="workout_time" value="evening" /> Evening</label><br />
                </fieldset>

                <label htmlFor="goal">Fitness Goal:</label>
                <select id="goal" name="goal">
                    <option value="strength">Increase Strength</option>
                    <option value="endurance">Improve Endurance</option>
                    <option value="flexibility">Enhance Flexibility</option>
                </select><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Hobby1;
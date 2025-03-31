export default function Form() {
    return (
        <>
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
        </>
    )
}
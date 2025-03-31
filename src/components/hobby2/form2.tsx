export default function Form2() {
    return (
        <>
            <form className={"input-form"}>
                <h2>Contact Me!</h2>
                <div className="button-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" /><br /><br />
                </div>

                <div className="button-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" name="email" /><br /><br />
                </div>

                <div>
                    <label>Favorite Sport:</label><br />
                    <div className="button-group">
                        <input type="checkbox" id="soccer" name="sport" value="soccer" />
                        <label htmlFor="soccer">Soccer</label><br />
                    </div>
                    <div className="button-group">
                        <input type="checkbox" id="basketball" name="sport" value="basketball" />
                        <label htmlFor="basketball">Basketball</label><br />
                    </div>
                    <div className="button-group">
                        <input type="checkbox" id="tennis" name="sport" value="tennis" />
                        <label htmlFor="tennis">Tennis</label><br />
                    </div>
                    <br />
                </div>

                <div>
                    <label>Favorite League:</label><br />
                    <div className="button-group">
                        <input type="radio" id="mls" name="league" value="mls" />
                        <label htmlFor="mls">MLS</label><br />
                    </div>
                    <div className="button-group">
                        <input type="radio" id="nba" name="league" value="nba" />
                        <label htmlFor="nba">NBA</label><br />
                    </div>
                    <div className="button-group">
                        <input type="radio" id="epl" name="league" value="epl" />
                        <label htmlFor="epl">EPL</label><br />
                    </div>
                    <br />
                </div>

                <label htmlFor="comments">Comments:</label><br />
                <textarea id="comments" name="comments" rows={4} cols={50}></textarea><br /><br />

                <label htmlFor="team">Favorite Team:</label>
                <select id="team" name="team">
                    <option value="">Select a team</option>
                    <option value="sounders">Seattle Sounders FC</option>
                    <option value="lakers">Los Angeles Lakers</option>
                    <option value="manutd">Manchester United</option>
                </select><br /><br />

                <button id="form-button">Submit</button>
            </form>
        </>
    )
}
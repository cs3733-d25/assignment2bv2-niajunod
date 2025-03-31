import React from "react";
import "./Nia.css"; // Ensure this CSS file exists for styling
import Form from "./hobby1/form1";
import Table from "./hobby1/table1";
import List from "./hobby1/list1";

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

            {/* Recommended Articles and Exercise List */}
            <List />

            {/* Workout Schedule Table */}
            <Table />

            {/* Nutrition Section */}
            <h2>What I Eat</h2>
            <p>
                Fitness is more than just working out—it's about eating healthy.
                I meal prep Monday through Friday with ground beef, rice, and mixed vegetables,
                seasoned with taco seasoning and a bit of hot sauce for extra flavor.
            </p>

            {/* Contact Form */}
            <Form />
        </div>
    );
};

export default Hobby1;
import React from "react";
import "../App.css"; // Ensure this CSS file exists for styling

const Intro: React.FC = () => {

    return (
        <div className="intro-container">
            {/* Title */}
            <p>
                Welcome to our website! We are Alden and Nia, two students at WPI who are passionate about soccer and working out at the gym.
                We created this website to share our interests with you and provide information on the benefits of these hobbies.
            </p>
            <p>
                Soccer and working out are not only great ways to stay active and healthy, but they also help us relieve stress and improve our mental well-being.
                We hope you enjoy learning more about our hobbies and find inspiration to pursue your own interests.
            </p>
            <h2>Our Hobbies</h2>
            <p>
                Alden is a soccer enthusiast who plays soccer every Wednesday and Friday. He enjoys the physical activity, teamwork, and friendships that come with playing soccer.
                Nia is a gym-goer who works out seven times a week. She finds that working out is a great way to practice self-care and improve her mental health.
            </p>
            <h2>Benefits of Soccer and Gym</h2>
            <p>
                Soccer and working out at the gym offer numerous benefits for both physical and mental health. These activities can help you stay fit, improve your endurance, and boost your mood.
                Whether you prefer playing soccer with friends or lifting weights at the gym, there are many ways to incorporate these hobbies into your daily routine.
            </p>
            <h2>Get Started</h2>
            <p>
                If you're interested in playing soccer or working out at the gym, we encourage you to explore our website for more information and resources.
                You can learn about the benefits of each hobby, find recommended articles, and discover tips for getting started.
                We hope you feel inspired to try something new and incorporate these activities into your lifestyle.
            </p>
        </div>
    );
}

export default Intro;
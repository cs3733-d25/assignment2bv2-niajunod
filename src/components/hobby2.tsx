import React from "react";
import "./Alden.css"; // Ensure this CSS file exists for styling
import Table2 from "./hobby2/table2";
import Form2 from "./hobby2/form2";
import List2 from "./hobby2/list2";

const Hobby2: React.FC = () => {
    return (
        <div className="content">

            <h1>Alden Cutler - Soccer as a hobby</h1>
            <img src="/src/assets/sounders.png"
                alt="Sounders supporters" />

            <p>
                Hi, my name is Alden. I'm a junior CS major at WPI. I play soccer and I like video games and computers.
                Outside of school, I live in Seattle, WA, where I like hiking and skiing. I also play a lot of online
                chess and just passed 1500 ELO on chess.com.
            </p>

            <p>
                One of my favorite hobbies is playing soccer. I've been playing since I was very small, through Capitol
                Hill Soccer (my neighborhood), then Emerald City FC, and finally Seattle Celtic. I play in the midfield, usually as
                a central attacking midfielder (CAM) or a central defensive midfielder (CDM). I also play a lot of FIFA in my free
                time. Since coming to WPI, I've joined a semi-professional team called the New England Combine, which plays in
                the UPSL (United Premier Soccer League). We play against teams from all over New England, and it's been a
                great experience so far.
            </p>


            <List2 />
            <Table2 />
            <Form2 />

        </div>
    );
};

export default Hobby2;
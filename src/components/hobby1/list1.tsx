import './list.css';

export default function List() {
    return (
        <>
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

        </>
    )
}
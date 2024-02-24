import NotesLogo from '../assests/images/notes_logo.png'
import TripleSLogo from '../assests/images/triples_logo.png'
import VehiclesMarketLogo from '../assests/images/vehicles_market_logo.png'
import NotesVideo from '../assests/videos/notesapp_rec.mp4'
import TriplesVideo from '../assests/videos/TripleSOverview.mp4'

export const ProjectsList = [
    {
        id: 1,
        title: 'TripleS IOT System',
        description: "Educational Purpose: This project was an educational endeavor to explore and master various industry-relevant tools and technologies beyond my academic curriculum. Technologies and Tools: Includes cloud computing (AWS), communication protocols (MQTT, HTTP/S, WebRTC), web development technologies (React, Node), and hardware (Raspberry Pi, ESP32).",
        details: (
            <>
                <h2>System Components</h2>
                <h3>Hardware</h3>
                <p>The system comprises a Raspberry Pi with a PiCamera and an ESP32 connected to various sensors.</p>
                <h3>Web Application</h3>
                <p>Interaction between the hardware components and a web application, with future plans for mobile app integration.</p>
                <h3>PiCamera</h3>
                <p>A 5-megapixel camera capable of 60 frames per second video, chosen for its robust features.</p>

                <h2>Learning Curve</h2>
                <h3>Personal Growth</h3>
                <p>As a novice to the technologies, frameworks, and hardware used, this project represented a significant learning curve.</p>

                <h2>Raspberry Pi Functions</h2>
                <h3>Automated Tasks</h3>
                <ul>
                    <li>Capturing and uploading images to AWS S3.</li>
                    <li>Real-time video streaming via Kinesis Video Stream.</li>
                    <li>Message transmission and reception through IoT Core.</li>
                </ul>

                <h2>ESP32 Capabilities</h2>
                <h3>Sensor Integration</h3>
                <ul>
                    <li>Sending event alerts (intrusion or fire) and receiving commands through IoT Core.</li>
                    <li>Operating in three modes: off, on, and sleep.</li>
                    <li>Sensor data acquisition.</li>
                </ul>

                <h2>Communication Protocol</h2>
                <p>MQTT: Chosen for its publish-subscribe architecture, message queuing capabilities, cloud system support (like AWS), and asynchronous nature.</p>
                <p>System Utilization: MQTT is used for message transmission, including command execution, status testing, and confirmation messages. Integrated AWS services for comprehensive cloud support.</p>

                <h2>Application Development</h2>
                <h3>Client-Side</h3>
                <p>Developed using ReactJS.</p>
                <h3>Server-Side</h3>
                <p>Developed using NodeJS with Express managing database interactions.</p>
                <h3>Cloud Messaging and Real-Time Updates</h3>
                <p>Server-side leverages IoT Core for cloud messaging, while the client-side receives updates via WebSockets and sends API requests using axios.</p>
                <h3>Video Streaming</h3>
                <p>Handled by the cloud on the client-side.</p>
                <h3>Server Architecture</h3>
                <p>Includes an HTTP server for API requests and a WebSocket server for real-time client updates.</p>
            </>
        ),
        repoLink: '',
        techList: [
            'ReactJS',
            'NodeJS',
            'ExpressJS',
            'AWS',
            'Raspberry PI',
            'ESP32',
            'JavaScript',
            'Python',
        ],
        videoUrl: TriplesVideo,
        logoImgUrl: TripleSLogo,
        area: 'Embedded & FullStack',
    },
    {
        id: 2,
        title: 'Vehicles Market',
        description: '',
        details: '',
        repoLink: 'https://github.com/OfirNahshoni/VehiclesMarket_FullStack_WebApp',
        techList: [
            'HTML',
            'Flask',
            'SQLite3',
            'Python',
        ],
        videoUrl: '',
        logoImgUrl: VehiclesMarketLogo,
        area: 'FullStack',
    },
    {
        id: 3,
        title: 'Notes Web App',
        description: 'FullStack Web Application, with BackEnd in Flask (Python) and FrontEnd with HTML. The main branch is a very basic Web App',
        details: (
            <>
                <h2>Structure</h2>
                <h3>Blueprints</h3>
                <p>The Flask application is separated into two Blueprints: auth and views.</p>
                <ul>
                    <li><strong>Auth Blueprint:</strong> Used for login, sign-up, and logout operations.</li>
                    <li><strong>Views Blueprint:</strong> Handles all other requests, like rendering the home page and deleting Notes from the database.</li>
                </ul>

                <h2>Authentication</h2>
                <h3>Tools Used for Authentication</h3>
                <ul>
                    <li><strong>werkzeug.security:</strong> Utilized for generate_password_hash and check_password_hash modules.</li>
                    <li><strong>flask_login:</strong> Employed for login_user, login_required, logout_user, current_user.</li>
                </ul>

                <h2>User Feedback</h2>
                <h3>Database Interactions</h3>
                <p>All database queries (Create, Update, Delete) are followed by flash messages to provide user feedback.</p>
            </>
        ),
        repoLink: '',
        techList: [
            'HTML',
            'Flask',
            'SQLite3',
            'Python',
        ],
        videoUrl: NotesVideo,
        logoImgUrl: NotesLogo,
        area: 'FullStack',
    }
]
import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const sections = [

  {
    title: "React Tasks",
    tasks: [
      { name: "Counter App", route: "/js/counter" },
    ],
    color: "#2a3d45",
  },
];

function Home() {
  return (
    <div className="home-container">
      {sections.map((section, i) => (
        <div key={i} className="section">
          <h2>{section.title}</h2>
          <div className="task-grid">
            {section.tasks.map((task, j) => (
              <Link
                key={j}
                to={task.route}
                className="task-card"
                style={{ backgroundColor: section.color }}
              >
                {task.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="home-container">
      <h3>Hazwan Faizul - AEON Bank FrontEnd Assessment</h3>
      <p>Please click on the following links to view my solutions to the FrontEnd Assessment </p>
      <ul className="link-container">
        
        <h4>Multiple Choice Questions</h4>
        <li>
          <Link className="solution-link" href='/MCQ-Answers'>MCQ Solutions Page</Link>
        </li>

        <h4>Coding Questions</h4>
        <li>
          <Link className="solution-link" href='/problem1'>Calculator Solution</Link>
        </li>
        <li>
          <Link  className="solution-link" href='/problem2'>Responsive Navbar Solution</Link>
          <p>*Note: all a tag links will lead back to homepage due to href=/ as specified by assessment.</p>
        </li>
        <li>
          <Link  className="solution-link" href='/problem3'>Two Sum II Solution</Link>
          <p>*Note: Please use the code editor to see the console.log output.</p>
        </li>
      </ul>
    </div>
    
    
  );
}

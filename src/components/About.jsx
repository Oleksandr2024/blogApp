import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <p>About page</p>
      <ul className="about-ul">
        <li><Link to='contacts'>Our contacts</Link></li>
        <li><Link to='team'>Our team</Link></li>
      </ul>
      {/* <Routes>
        <Route path="contacts" element={<p>Our contacts</p>} /> {/* nested routes 
        <Route path="team" element={<p>Our team</p>} />         {/* nested routes 
      </Routes> */}
      <Outlet/>
    </div>
  );
};

export default About;

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function UserCard() {
  // useContext gets student information
  // from UserContext
  const user = useContext(UserContext);

  return (
    <section className="card">
      <h2>👤 Student Information</h2>

      <p>
        <strong>Name:</strong> {user.name}
      </p>

      <p>
        <strong>Branch:</strong> {user.branch}
      </p>

      <p>
        <strong>Semester:</strong> {user.semester}
      </p>
    </section>
  );
}

export default UserCard;

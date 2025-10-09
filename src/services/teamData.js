import teamData from "../assets/data/team.json";
import TeamMember from "../models/TeamMember";

// Import images dynamically
import member1 from "../assets/images/team1.jpg";
import member2 from "../assets/images/alexwassabi.jpg";
import member3 from "../assets/images/team2.jpg";

// Map JSON image names to actual imports
const images = {
  "team1.jpg": member1,
  "alexwassabi.jpg": member2,
  "team2.jpg": member3,
};

const teamMembers = teamData.map(
  (member) =>
    new TeamMember(
      member.id,
      member.name,
      member.role,
      images[member.image], // map image name to actual import
      member.linkedin,
      member.facebook,
      member.email
    )
);

export default teamMembers;

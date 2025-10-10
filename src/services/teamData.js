import teamData from "../assets/data/team.json";
import TeamMember from "../models/TeamMember";

// Import images dynamically
import Pasan from "../assets/images/team/Pasan-Mendis.png";
import Didula from "../assets/images/team/Didula.png";
import Dilshan from "../assets/images/team/Dilshan.png";
import Dilmini from "../assets/images/team/Dilmini.png";
import Vishmi from "../assets/images/team/Vishmo.png";
import Aaqel from "../assets/images/team/Unknown.png";
import Panchami from "../assets/images/team/Panchami.png";
import Manthila from "../assets/images/team/Manthila.png";
import Shanelka from "../assets/images/team/Shanelka.png";
import Vihara from "../assets/images/team/Vihara.png";
import Lakisha from "../assets/images/team/Lakisha.png";
import Thisaruni from "../assets/images/team/Thisaruni.png";
import Malinda from "../assets/images/team/Malinda.png";
import Sineth from "../assets/images/team/Simeth.png";
import Nisala from "../assets/images/team/Nisala.png";
import Shamindya from "../assets/images/team/Shamindya.png";
import Humaid from "../assets/images/team/Humaid.png";


// Map JSON image names to actual imports
const images = {
  "Pasan-Mendis.png": Pasan,
  "Didula.png": Didula,
  "Dilshan.png": Dilshan,
  "Dilmini.png": Dilmini,
  "Vishmi.png": Vishmi,
  "Aaqel.png": Aaqel,
  "Panchami.png": Panchami,
  "Manthila.png": Manthila,
  "Shanelka.png": Shanelka,
  "Vihara.png": Vihara,
  "Lakisha.png": Lakisha,
  "Thisaruni.png": Thisaruni,
  "Malinda.png": Malinda,
  "Sineth.png": Sineth,
  "Nisala.png": Nisala,
  "Shamindya.png": Shamindya,
  "Humaid.png": Humaid,
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

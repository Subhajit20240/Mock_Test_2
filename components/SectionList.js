import { View } from "react-native";
import EpisodeCard from "./EpisodeCard";

const bodySystemIcon = require("../assets/images/r.png");
const diagnosticsIcon = require("../assets/images/medecine.png");

export default function SectionList() {
  return (
    <View>
 
      <EpisodeCard
        title="Body Systems"
        color="#E6F9F5"
        iconUri={bodySystemIcon}
        date="3 Jun"
        count={12}
        episodes={[
          { iconFamily: "FontAwesome", icon: "heart", color: "#ef4444", text: "How your heart works" },
          { iconFamily: "FontAwesome5", icon: "lungs", color: "#fb923c", text: "Breathing and the lungs" },
        ]}
      />


      <EpisodeCard
        title="Medical Conditions"
        color="#FFF4EC"
        iconUri="https://cdn-icons-png.flaticon.com/512/2966/2966486.png"
        date="1 Jun"
        count={27}
        episodes={[
          { iconFamily: "FontAwesome5", icon: "fire-alt", color: "#f87171", text: "Managing high blood pressure" },
          { iconFamily: "FontAwesome", icon: "plus-square", color: "#007AFF", text: "Understanding depression" },
        ]}
      />

    
      <EpisodeCard
        title="Diagnostics"
        color="#F0EBFF"
        iconUri={diagnosticsIcon}
        date="29 May"
        count={12}
        episodes={[
          { iconFamily: "FontAwesome5", icon: "file-medical-alt", color: "#7c3aed", text: "Understanding your ECG results" },
          { iconFamily: "FontAwesome5", icon: "microscope", color: "#3b82f6", text: "What an MRI can tell you" },
        ]}
      />
    </View>
  );
}

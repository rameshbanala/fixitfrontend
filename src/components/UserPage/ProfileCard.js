import { UserProfileCard } from "./styledComponents";

const ProfileCard = ({ name }) => {
    const firstLetter = name[0].toUpperCase();
    const letterColors = {
        A: "#FF5733", B: "#33FF57", C: "#3357FF", D: "#FF33A1", E: "#33FFA5",
        F: "#5733FF", G: "#FFAC33", H: "#57FF33", I: "#33FFBD", J: "#FF5733",
        K: "#33D4FF", L: "#FF33D2", M: "#57FFB3", N: "#FF3357", O: "#33FF9E",
        P: "#5733A3", Q: "#A3FF33", R: "#FF3333", S: "#33FF73", T: "#A3FF57",
        U: "#3357A3", V: "#D2FF33", W: "#FF33C5", X: "#33FFDD", Y: "#FF57D3",
        Z: "#33C5FF",
    };

    const getBackgroundColor = (name) => {
        
        return letterColors[firstLetter] || "#CCCCCC"; // Default color if letter is not found
    };

    const backgroundColor = getBackgroundColor(name);

    return (
        <UserProfileCard $backgroundColor={backgroundColor}>
            <h1 style={{ color: "#ffffff", fontSize: "18px", margin: 0 }}>{firstLetter}</h1>
        </UserProfileCard>
    );
}

export default ProfileCard;

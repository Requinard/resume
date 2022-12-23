import { Avatar, Tooltip } from "@mui/material";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

import MainAvatar from "../assets/avatar.png?preset=thumbnail";

const filterOn = "blur(12px) grayscale(1)";
const filterOff = "";

export const Headshot = () => {
    const [filter, setFilter] = useState<string>(filterOn);
    const props = useSpring({
        filter: filter,
        padding: "4px",
        config: {
            duration: 400,
        },
    });

    return (
        <animated.div style={props}>
            <Tooltip title={"Click to unblur"}>
                <Avatar
                    onClick={() =>
                        setFilter((draft) => {
                            if (draft === filterOn) {
                                return filterOff;
                            }
                            return filterOn;
                        })
                    }
                    src={MainAvatar[1].src}
                    alt={
                        "A headshot. It is blurred by default to help with inherent biases."
                    }
                    sx={{ flex: 1, width: "100%", height: "auto" }}
                />
            </Tooltip>
        </animated.div>
    );
};

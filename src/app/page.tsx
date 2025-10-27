import { Intro } from "@/components/sections/intro";
import { Features } from "@/components/sections/features";
import { Implementations } from "@/components/sections/implementations";
import { About } from "@/components/sections/about";

import "./home.scss";

const Home = () => {
    return (
        <>
            <Intro />
            <Features />
            <Implementations />
            <About />
        </>
    );
};

export default Home;

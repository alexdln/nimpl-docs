"use client";

import Link from "next/link";
import { useRef } from "react";
import { Container } from "robindoc/lib/components/ui/container";

import "./intro.scss";

export const Intro = () => {
    const circleRef = useRef<SVGCircleElement>(null);

    const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const ratio = 961 / e.currentTarget.clientWidth;
        const maskOffsetTop = (e.currentTarget.clientHeight - 355 / ratio) / 2;
        circleRef.current!.setAttribute("cx", ((e.clientX - e.currentTarget.offsetLeft) * ratio).toString());
        circleRef.current!.setAttribute(
            "cy",
            ((e.clientY - e.currentTarget.offsetTop + window.scrollY - maskOffsetTop) * ratio).toString(),
        );
    };

    const onMouseLeave = () => {
        circleRef.current!.classList.add("intro-circle-hidden");
    };

    const onMouseEnter = () => {
        circleRef.current!.classList.remove("intro-circle-hidden");
    };

    return (
        <section>
            <Container
                className="intro-container"
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
                onMouseEnter={onMouseEnter}
            >
                <h1 className="intro-heaging">
                    <span className="intro-text-dye-blue">Solutions</span> for your{" "}
                    <span className="intro-text-dye-pink">Next.js</span> project
                </h1>
                <h2 className="intro-subheaging">
                    cover the flaws of next.js and supplement it with much-desired functionality
                </h2>
                <div className="intro-actions">
                    <Link href="/#implementations" className="intro-button">
                        Get Started
                    </Link>
                    <Link href="/#about" className="intro-button intro-button_secondary">
                        About Nimpl
                    </Link>
                </div>
                <svg viewBox="0 0 961 355" className="intro-bg">
                    <mask id="logo-mask" strokeWidth={2} stroke="white">
                        <path d="M303 73C303 66.3726 308.373 61 315 61H339C345.627 61 351 66.3726 351 73V340C351 346.627 345.627 352 339 352H315C308.373 352 303 346.627 303 340V73Z" />
                        <path d="M383 220C383 213.373 388.373 208 395 208H419C425.627 208 431 213.373 431 220V340C431 346.627 425.627 352 419 352H395C388.373 352 383 346.627 383 340V220Z" />
                        <path d="M463 73C463 66.3726 468.373 61 475 61H499C505.627 61 511 66.3726 511 73V340C511 346.627 505.627 352 499 352H475C468.373 352 463 346.627 463 340V73Z" />
                        <path d="M647 73C647 66.3726 652.373 61 659 61H683C689.627 61 695 66.3726 695 73V193C695 199.627 689.627 205 683 205H659C652.373 205 647 199.627 647 193V73Z" />
                        <path d="M567 73C567 66.3726 572.373 61 579 61H603C609.627 61 615 66.3726 615 73V340C615 346.627 609.627 352 603 352H579C572.373 352 567 346.627 567 340V73Z" />
                        <path d="M911 220C911 213.373 916.373 208 923 208H947C953.627 208 959 213.373 959 220V340C959 346.627 953.627 352 947 352H923C916.373 352 911 346.627 911 340V220Z" />
                        <path d="M831 316C831 309.373 836.373 304 843 304H867C873.627 304 879 309.373 879 316V340C879 346.627 873.627 352 867 352H843C836.373 352 831 346.627 831 340V316Z" />
                        <path d="M751 73C751 66.3726 756.373 61 763 61H787C793.627 61 799 66.3726 799 73V340C799 346.627 793.627 352 787 352H763C756.373 352 751 346.627 751 340V73Z" />
                        <path d="M199 14C199 7.37258 204.373 2 211 2H235C241.627 2 247 7.37258 247 14V38C247 44.6274 241.627 50 235 50H211C204.373 50 199 44.6274 199 38V14Z" />
                        <path d="M14 2H38C42.4417 2 46.3198 4.41321 48.3946 8L199 252.751V73C199 66.3726 204.373 61 211 61H235C241.627 61 247 66.3726 247 73V340C247 346.627 241.627 352 235 352C235 352 217.132 352.052 210.503 352.052C206.452 352.066 202.492 350.029 200.22 346.323L50 101.365V340C50 346.627 44.6274 352 38 352H14C7.37258 352 2 346.627 2 340V14C2 7.37259 7.37258 2 14 2Z" />
                    </mask>
                    <rect
                        fill="currentColor"
                        cx="0"
                        cy="0"
                        width="100%"
                        height="100%"
                        mask="url(#logo-mask)"
                        opacity={0.7}
                    ></rect>
                    <circle
                        className="intro-circle intro-circle-hidden"
                        fill="blue"
                        cx="0"
                        cy="0"
                        r="150"
                        mask="url(#logo-mask)"
                        ref={circleRef}
                    ></circle>
                </svg>
            </Container>
        </section>
    );
};

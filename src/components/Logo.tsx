interface LogoProps {
    className?: string;
}

export default function Logo({ className = "w-32" }: LogoProps) {
    return (
        <svg viewBox="0 0 160 65" className={`text-current ${className}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <g stroke="none">
                {/* Left Dot */}
                <circle cx="28" cy="22" r="3.5" />
                {/* Left base line tapering down */}
                <path d="M 28 20.5 H 65 C 75 20.5 82 27 90 27 C 80 27 72 22.5 65 22.5 H 28 Z" />

                {/* Main upper sweeping arc */}
                <path d="M 68 26 C 80 26 88 10 105 10 C 112 10 120 13 125 15 C 120 13 114 12 105 12 C 90 12 82 24 68 24 Z" />

                {/* Right base line */}
                <path d="M 95 21 H 132 V 23 H 95 Z" />
                {/* Right Dot */}
                <circle cx="132" cy="22" r="3.5" />
            </g>
            {/* Brand Text */}
            <text
                x="80"
                y="58"
                fontSize="34"
                fontWeight="800"
                fontFamily="Outfit, sans-serif"
                letterSpacing="0.04em"
                textAnchor="middle"
            >
                LOW
            </text>
        </svg>
    );
}

interface LogoProps {
    className?: string;
    imgClassName?: string;
}

export default function Logo({ className = "w-32", imgClassName = "object-contain w-full h-full" }: LogoProps) {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <img
                src="/assets/logo.png"
                alt="Low Logo"
                className={imgClassName}
            />
        </div>
    );
}

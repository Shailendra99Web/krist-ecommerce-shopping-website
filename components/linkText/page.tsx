interface LinkTextProps {
    href: string;
    text: string;
    className?: string;
}

function LinkText({ href, text, className }: LinkTextProps) {
    return (
        <a href={href} className={`text-primary-500 no-underline text-sm ${className}`}>
            {text}
        </a>
    );
}

export default LinkText;
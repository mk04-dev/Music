import React, { useEffect, useRef } from "react";

interface Props {
	className?: string;
	children: React.ReactNode;
    activeOnOverflow?: true | boolean;
}
function Marquee(props: Props) {
	const { className, children, activeOnOverflow } = props;
    const ref = useRef(null);

    useEffect(() => {
        if (ref && ref.current) {
            const current = (ref.current as HTMLElement);
            if (activeOnOverflow) {
                const {scrollWidth, clientWidth} = current;
                scrollWidth > clientWidth && current.classList.add('marquee');
            }else {
                current.classList.add('marquee');
            }
        }
    }, [ref, activeOnOverflow])
	return <div ref={ref} className={className}>
        <span style={{animationDuration: '10s'}}>{children}</span>
    </div>;
}

export default React.memo(Marquee);

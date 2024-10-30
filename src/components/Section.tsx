import React from "react";

interface Props {
    title: string;
    children?: React.ReactNode;
}
function Section(props: Props) {
    const {title, children} = props
	return (
		<section>
			<h2 className="header-section">{title}</h2>
            {children}
		</section>
	);
}

export default React.memo(Section)

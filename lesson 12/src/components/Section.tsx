import {ReactNode} from "react";
type SectionProps = {
	title?: string;
	children: ReactNode;
};
//  old ways
// export const Section: React.FC<{title: string}> = ({children, title}) => {
// 	return (
// 		<section>
// 			<h2>{title}</h2>
// 			<p>{children}</p>
// 		</section>
// 	);
// };
export const Section = ({children, title = "My subheading"}: SectionProps) => {
	return (
		<section>
			<h2>{title}</h2>
			<p>{children}</p>
		</section>
	);
};

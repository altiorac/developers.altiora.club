"use client";

import { delay, wrap } from "motion";
import { Typewriter } from "motion-plus/react";
import { useState } from "react";

interface ScriptSegment {
	text: string;
	endDelay?: number;
	backspace?: "character" | "word" | "all";
	backspaceFactor?: number;
}

export default function TypeWriter({
	script = [
		{ text: "Hello everyone!", endDelay: 0.8 },
	],
    className = ""
}: {
	script?: ScriptSegment[];
    className?: string;
}) {
	const [paragraphIndex, setParagraphIndex] = useState(0);

	const { text, endDelay = 0.8, backspace = "character", backspaceFactor = 0.5 } = script[paragraphIndex];

	return (
		<Typewriter
			as="p"
			speed="fast"
			cursorStyle={cursor}
			backspace={backspace}
			backspaceFactor={backspaceFactor}
			onComplete={() => {
				delay(() => {
					setParagraphIndex(wrap(paragraphIndex, script.length, paragraphIndex + 1));
				}, endDelay);
			}}
		>
			{text}
		</Typewriter>
	);
}

const cursor: React.CSSProperties = {
	background: "#0d63f8",
	width: 2,
};

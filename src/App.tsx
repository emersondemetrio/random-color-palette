import React, { useEffect, useState } from 'react';
import './App.css';

interface HSL {
	h: number;
	s: number;
	l: number;
}

interface Position {
	x: number;
	y: number;
}

const hslToString = ({ h, s, l }: HSL): string => `hsl(${h}, ${s}%, ${l}%)`;

const Color = ({ color, position }: { color: HSL; position: Position }) => (
	<rect
		width="10"
		height="10"
		x={position.x}
		y={position.y}
		style={{ backgroundColor: hslToString(color) }}
	/>
);

const App = () => {
	const [colors, setColors] = useState<
		Array<{
			color: HSL;
			position: Position;
		}>
	>([]);

	useEffect(() => {
		const list: Array<{
			color: HSL;
			position: Position;
		}> = [];

		for (let h = 0; h < 10; h++) {
			for (let s = 0; s < 10; s++) {
				for (let l = 0; l < 10; l++) {
					list.push({
						position: { x: h, y: s },
						color: {
							h,
							s,
							l,
						},
					});
				}
			}
		}

		setColors(list);
	}, []);

	return (
		<div className="App">
			<svg width="100%" height="100%">
				{colors.map(({ color, position }) => (
					<Color
						key={hslToString(color)}
						position={position}
						color={color}
					/>
				))}
			</svg>
		</div>
	);
};

export default App;

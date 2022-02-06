// Selectors
const displayTP = document.querySelector('#display-total-points');
const displayPPM = document.querySelector('#points-per-man');
const crewSize = document.querySelector('#crew');
const sixTw = document.querySelector('#sT');
const tE = document.querySelector('#tE');
const eT = document.querySelector('#eT');
const twenty = document.querySelector('#t');
const bonusTier = document.querySelector('#bonus-tier');
const treesTillMax = document.querySelector('#trees-till-max');

// Functions
const bonus = () => {
	const crew = crewSize.value * 9;
	const sixT = sixTw.value * 0.75;
	const twelveE = tE.value * 1.55;
	const eightT = eT.value * 3.1;
	const twentyPlus = twenty.value * 6.26;
	const maxTier = 0.88;
	let sumOfTrees = '';
	let sum = '';
	let pointsTM = '';

	// Calculate bonus
	sumOfTrees = sixT + twelveE + eightT + twentyPlus;
	sum = sumOfTrees / crew;

	// Points needed till max
	pointsTM = Math.abs(maxTier - sum).toFixed(2);
	console.log(pointsTM);

	if (sum < maxTier) {
		treesTillMax.innerText = `You need ${pointsTM} points till max.`;
	} else {
		treesTillMax.innerText = `You made max`;
	}
	// console.log(sum);

	// Display Totals
	displayTP.innerText = `Total Points: ${sumOfTrees.toFixed(2)}`;
	displayPPM.innerText = `Points Per Man: ${sum.toFixed(2)}`;

	// Displays when at max bonus
};

//Eventlisteners
crewSize.addEventListener('select', bonus);
sixTw.addEventListener('input', bonus);
tE.addEventListener('input', bonus);
eT.addEventListener('input', bonus);
twenty.addEventListener('input', bonus);

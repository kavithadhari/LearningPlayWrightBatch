// Simple variable-based voting eligibility check
// Change the `age` value below to test different cases.
const age = 30; // example: 20

if (!Number.isFinite(age) || age < 0) {
	console.log('Please provide a valid non-negative number for age.');
} else if (age >= 18) {
	console.log(`Age ${age}: You are eligible to vote.`);
} else {
	console.log(`Age ${age}: You are not eligible to vote.`);
}

// Reusable function for other modules/tests
function isEligibleToVote(inputAge) {
	const n = Number(inputAge);
	if (!Number.isFinite(n) || n < 0) return { valid: false, message: 'Invalid age' };
	return { valid: true, eligible: n >= 18 };
}

module.exports = { isEligibleToVote };


const checkboxWhite = document.getElementById('wit');
const checkboxBlack = document.getElementById('zwart');

const zwartOptie = document.getElementById('zwartOptie');
const witOptie = document.getElementById('witOptie');

checkboxWhite.addEventListener('change', function() {
	if (checkboxWhite.checked) {
		witOptie.style.display = 'block';
	} else {
		witOptie.style.display = 'none';
	}
});

checkboxBlack.addEventListener('change', function() {
	if (checkboxBlack.checked) {
		zwartOptie.style.display = 'block';
	} else {
		zwartOptie.style.display = 'none';
	}
});

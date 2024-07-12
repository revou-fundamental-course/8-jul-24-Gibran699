// Fungsi untuk menghitung BMI
function calculateBMI(weight, height) {
    return weight / ((height / 100) ** 2);
}

// Fungsi untuk mendapatkan kategori BMI
function getBMICategory(bmi, gender) {
    if (gender === 'male') {
        if (bmi < 18.5) return 'Kurus';
        if (bmi < 25) return 'Normal';
        if (bmi < 30) return 'Gemuk';
        return 'Obesitas';
    } else {
        if (bmi < 17) return 'Kurus';
        if (bmi < 23) return 'Normal';
        if (bmi < 27) return 'Gemuk';
        return 'Obesitas';
    }
}

// Event listener untuk form submission
document.getElementById('bmiForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil nilai input
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const gender = document.getElementById('gender').value;

    // Hitung BMI
    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi, gender);

    // Tampilkan hasil
    document.getElementById('bmiValue').textContent = `BMI Anda: ${bmi.toFixed(2)}`;
    document.getElementById('bmiCategory').textContent = `Kategori: ${category}`;
    document.getElementById('result').classList.remove('hidden');
});

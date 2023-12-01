function submitForm() {
    // Get input values
    const food1 = document.getElementById('food1').value;
    const food2 = document.getElementById('food2').value;
    const food3 = document.getElementById('food3').value;
    const food4 = document.getElementById('food4').value;
    const food5 = document.getElementById('food5').value;

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h2>Your Top 5 Foods:</h2>
        <ol>
            <li>${food1}</li>
            <li>${food2}</li>
            <li>${food3}</li>
            <li>${food4}</li>
            <li>${food5}</li>
        </ol>
    `;
}

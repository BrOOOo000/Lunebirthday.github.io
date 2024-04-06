document.addEventListener('DOMContentLoaded', function() {
    const birthdayMessage = document.getElementById('birthdayMessage');
    const today = new Date();
    const birthday = new Date(today.getFullYear(), 5, 15); // Example: June 15th

    if (today.getMonth() === birthday.getMonth() && today.getDate() === birthday.getDate()) {
        birthdayMessage.textContent = "It's your birthday! 🎉";
    } else {
        const daysUntilBirthday = (birthday - today) / (1000 * 60 * 60 * 24);
        if (daysUntilBirthday > 0) {
            birthdayMessage.textContent = `There are ${Math.floor(daysUntilBirthday)} days until your birthday!`;
        } else {
            birthdayMessage.textContent = "Your birthday has already passed this year. 😢";
        }
    }
});

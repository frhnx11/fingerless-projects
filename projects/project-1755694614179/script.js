document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickMe');
    const output = document.getElementById('output');
    let clickCount = 0;

    button.addEventListener('click', function() {
        clickCount++;
        output.textContent = `You've clicked the button ${clickCount} time${clickCount !== 1 ? 's' : ''}!`;
        
        // Add a fun animation
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
    });

    console.log('Sample Bolt.new project loaded successfully!');
});
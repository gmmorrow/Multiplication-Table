document.write('<span class="cell header">&times;</span>');
for (let i = 0; i <= 10; i++) {
    document.write('<span class="cell header">' + i + '</span>');
}
document.write('<br>');

for (let i = 0; i <= 10; i++) {
    for (let j = 1; j <= 12; j++) {
        if (j == 1) {
            document.write('<span class="cell header">' + i + '</span>');
        } else {
            document.write('<span class="cell header">' + i + (j - 2) + '</span>');
        }
    }
document.write('<br>')
}

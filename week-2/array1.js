let states = ['Abia', 'Akwa Ibom', 'Anambra', 'Bauchi'];

document.write('<h1>' + states[0] + '</h1>');

states.push('Bayelsa');

document.write('<h1>' + states + '</h1>');

states.push('Cross River');

document.write('<h1>' + states + '</h1>');

states.pop();

document.write('<h1>' + states + '</h1>');
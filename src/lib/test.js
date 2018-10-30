const say = function say(name) {
    const el = document.createElement('div');
    el.innerText = `Hello, ${name}!!!`;
    document.body.appendChild(el);
};

export default say;
function likes(name) {
	switch(name.length) {
		case 0:
			return "no one likes this";
			break;
		case 1:
			return `${name[0]} likes this`;
			break;
		case 2:
			return `${name[0]} and ${name[1]} like this`;
			break;
		case 3:
			return `${name[0]}, ${name[1]} and ${name[2]} like this`;
			break;
		default:
			return `${name[0]}, ${name[1]} and ${name.length - 2} others like this`;
			break;
	}

	return msg;
}

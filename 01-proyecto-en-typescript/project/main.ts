import './datos';

class Users {
	usuario : User;
	constructor(name : string, age: number){
		this.usuario = {
			name : name,
			age : age
		}
		
		console.log(this.usuario);
	}
}

const u = new Users ('Javier', 44);
export const login = function(user, success, error) {
	$.ajax({
		method: 'POST',
		url: '/api/session',
		data: user,
		success,
		error
	});
};

export const signup = function(user, success, error) {
	$.ajax({
		method: 'POST',
		url: '/api/user',
		data: user,
		success,
		error
	});
};

export const logout = function(success){
	$.ajax({
		method: 'delete',
		url: '/api/session',
		success,
		error: () => {
		  console.log("Logout error in SessionApiUtil#logout");
		}
	});
};

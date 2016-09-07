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
		url: '/api/users',
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

export const fetchUser = function(username, success, error){
	$.ajax({
		method: 'GET',
		url: `/api/users/${username}`,
		success,
		error
	});
};

export const followUser = function(userId, success, error){
	$.ajax({
		method: 'POST',
		url: `/api/follow`,
		data: {user_id: userId},
		success,
		error
	});
};

export const unfollowUser = function(userId, success, error){
	$.ajax({
		method: 'DELETE',
		url: `/api/follow`,
		data: {user_id: userId},
		success,
		error
	});
};

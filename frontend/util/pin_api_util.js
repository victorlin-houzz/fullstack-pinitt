export const fetchAllPins = function(page ,success, error) {
	$.ajax({
		method: 'GET',
		url: '/api/pins',
		data: {page: page},
		success,
		error
	});
};

export const fetchBoardPins = function(boardId, success, error) {
	$.ajax({
		method: 'GET',
		url: '/api/pins',
		data: {board_id: boardId},
		success,
		error
	});
};

export const fetchSearchPins = function(keyword, success, error) {
	$.ajax({
		method: 'GET',
		url: '/api/pins',
		data: {keyword: keyword},
		success,
		error
	});
};

export const fetchUserPins = function(userId, success, error) {
	$.ajax({
		method: 'GET',
		url: '/api/pins',
		data: {user_id: userId},
		success,
		error
	});
};

export const fetchPin = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/pins/${id}`,
    success,
		error
  });
};

export const createPin = (pin, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/pins',
    data: pin,
    success,
		error
  });
};

export const updatePin = (pin, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/pins/${pin.pin.id}`,
    data: pin,
    success,
		error
  });
};

export const deletePin = (id, success, error) => {
	$.ajax({
		method: 'DELETE',
    url: `api/pins/${id}`,
		success,
		error
	});
};
